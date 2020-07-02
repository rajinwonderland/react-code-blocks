import React, { useMemo, useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import withDefaults from '../../hooks/with-defaults';
import { CopyTypes } from '../../utils/prop-types';
import { getStyles } from './styles';
import SnippetIcon from './SnippetIcon';
import useClipboard from '../../hooks/use-clipboard';

interface Props {
  text?: string | string[];

  width?: string;
  copy?: CopyTypes;
  className?: string;
}

const SnippetWrapper = styled.div<
  Props & {
    style: any;
  }
>`
   {
    position: relative;
    width: ${({ width }) => width};
    max-width: 100%;
    padding: 8pt;
    padding-right: calc(2 * 16pt);
    color: ${({ style }) => style.color};
    background-color: ${({ style }) => style.bgColor};
    border: 1px solid ${({ style }) => style.border};
    border-radius: 5px;
  }
  pre {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ style }) => style.color};
    font-size: 0.8125rem;
  }
  pre::before {
    content: '$ ';
    user-select: none;
  }
  pre :global(*) {
    margin: 0;
    padding: 0;
    font-size: inherit;
    color: inherit;
  }
  .copy {
    position: absolute;
    right: 0;
    top: -2px;
    transform: translateY(50%);
    background-color: ${({ style }) => style.bgColor};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: calc(2 * 16pt);
    color: inherit;
    transition: opacity 0.2s ease 0s;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
  }
  .copy:hover {
    opacity: 0.7;
  }
`;

const defaultProps = {
  width: 'initial',
  copy: 'default' as CopyTypes,
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type SnippetProps = Props & typeof defaultProps & NativeAttrs;

const textArrayToString = (text: string[]): string => {
  return text.reduce((pre, current) => {
    if (!current) return pre;
    return pre ? `${pre}\n${current}` : current;
  }, '');
};

const Snippet: React.FC<React.PropsWithChildren<SnippetProps>> = ({
  children,
  text,
  width,
  copy: copyType,
  className,
  ...props
}) => {
  const { copy } = useClipboard();
  const ref = useRef<HTMLPreElement>(null);
  const isMultiLine = text && Array.isArray(text);
  const theme = useContext(ThemeContext);
  const style = useMemo(() => getStyles(theme), [theme]);
  const showCopyIcon = useMemo(() => copyType !== 'prevent', [copyType]);
  const childText = useMemo<string | undefined | null>(() => {
    if (isMultiLine) return textArrayToString(text as string[]);
    if (!children) return text as string;
    if (!ref.current) return '';
    return ref.current.textContent;
  }, [ref.current, children, text]);

  const clickHandler = () => {
    if (!childText || !showCopyIcon) return;
    copy(childText);
    if (copyType === 'slient') return;
  };

  return (
    <SnippetWrapper className={`${className}`} {...props} style={style}>
      {isMultiLine ? (
        (text as string[]).map((t, index) => (
          <pre key={`snippet-${index}-${t}`}>{t}</pre>
        ))
      ) : (
        <pre ref={ref}>{children || text}</pre>
      )}
      {showCopyIcon && (
        <div className="copy" onClick={clickHandler}>
          <SnippetIcon />
        </div>
      )}
    </SnippetWrapper>
  );
};

const MemoSnippet = React.memo(Snippet);

export default withDefaults(MemoSnippet, defaultProps);

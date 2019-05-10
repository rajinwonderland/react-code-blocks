import React from 'react';
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { fontFamily, fontSize, space, width } from 'styled-system';
import styled from 'styled-components';

const CodeStyler = styled.div`
	${fontFamily}
	${fontSize}
  ${space}
  ${width}
`;

function getTheme(theme) {
	return require(`react-code-blocks`)[`${theme}`];
}
export const Code = ({ codeString, language, ...props }) => {
	const theme = props['theme'] ? getTheme(props['theme']) : dracula;
	if (props['copy']) {
		return (
			<CodeStyler
				fontFamily="Fira Code"
				mb="1.5rem"
				mx={props['mx']}
				mr={props['mr']}
				ml={props['ml']}
				width={props['w']}>
				<CopyBlock
					text={codeString}
					language={language}
					showLineNumbers={props['linenumbers'] || false}
					theme={theme}
					wrapLines
					codeBlock
				/>
				<br />
			</CodeStyler>
		);
	} else {
		return (
			<CodeStyler
				fontFamily="Fira Code"
				mb="1.5rem"
				mx={props['mx']}
				mr={props['mr']}
				ml={props['ml']}
				width={props['w']}>
				<CodeBlock
					text={codeString}
					language={language}
					showLineNumbers={props['linenumbers'] || false}
					theme={theme}
					wrapLines
				/>
			</CodeStyler>
		);
	}
};

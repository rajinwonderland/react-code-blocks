import React from 'react';
import Code from './Code';
import CopyButton from './Copy';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

const CodeWrapper = styled.div`
	background: ${(p) => p.theme && p.theme.backgroundColor};
	padding: 2px 2px 2px 0px;
`;

const CodeSnippet = ({
	showCopy,
	theme,
	text,
	iconDescription,
	feedback,
	feedbackTimeout,
	onClick,
	...rest
}) => (
	<CodeWrapper {...{ theme }}>
		<Code {...rest} {...{ text, theme }} />
		{showCopy && (
			<CopyButton
				onClick={() => copy(text)}
				color={theme.textColor}
				background={theme.backgroundColor}
				{...{ iconDescription, feedback, feedbackTimeout }}
			/>
		)}
	</CodeWrapper>
);

export default CodeSnippet;

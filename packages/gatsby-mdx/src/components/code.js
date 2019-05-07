import React from 'react';
import CodeBlock from 'react-code-blocks/build/ThemedCodeBlock';
import dracula from 'react-code-blocks/build/themes/dracula';

const Code = ({ codeString, language, ...props }) => {
	if (props['theme']) {
		const theme = require(`react-code-blocks`)[`${props['theme']}`];
		return (
			<>
				<CodeBlock
					text={codeString}
					language={language}
					showLineNumbers={props['showLineNumbers'] || false}
					theme={theme}
				/>
				<br />
			</>
		);
	}
	return (
		<>
			<CodeBlock
				text={codeString}
				language={language}
				showLineNumbers={props['showLineNumbers'] || false}
				theme={dracula}
			/>
			<br />
		</>
	);
};

export default Code;

import React from 'react';
import dracula from 'react-code-blocks/build/esm/themes/dracula';
import CopyBlock from 'react-code-blocks/build/esm/ThemedCopyBlock';
function getTheme(theme) {
	return require(`react-code-blocks`)[`${theme}`];
}

const Code = ({ codeString, language, ...props }) => {
	return (
		<>
			<CopyBlock
				text={codeString}
				language={language}
				showLineNumbers={props['showLineNumbers'] || false}
				theme={props['theme'] ? getTheme(props['theme']) : dracula}
			/>
			<br />
		</>
	);
};

export default Code;

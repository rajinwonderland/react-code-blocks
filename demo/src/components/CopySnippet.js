import React from 'react';
import { Code } from 'react-code-blocks';
import Copy from './Copy';
import Clipboard from 'clipboard';

export default function({ theme, text, language, ...rest }) {
	const clip = new Clipboard('#copy');
	clip.on('success', () => alert('copied'));
	clip.on('error', (err) => console.error(err));
	return (
		<button
			id="copy"
			className="flex flex-wrap p-2 justify-between items-center w-2/3"
			style={{ background: theme.backgroundColor }}
			data-clipboard-text={text}>
			<Code language={language} text={text} theme={theme} {...rest} />
			<Copy color={theme.textColor} className="w-4 h-4 mx-2" />
		</button>
	);
}

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Code from 'react-code-blocks/Code';
import CodeBlock from 'react-code-blocks/CodeBlock';
import dracula from 'react-code-blocks/dracula';
import { themes, sample, TopBar } from './components';
import './styles.css';

function App() {
	const [selected, changeTheme] = useState({
		name: 'dracula',
		theme: dracula
	});
	const [lineNumbers, toggleLineNumbers] = useState(true);
	const { name, theme } = selected;
	return (
		<div className="container mx-auto p-4">
			<TopBar
				select={{
					value: name,
					onChange: (e) => {
						const theme = require(`react-code-blocks/${e.target.value}`);
						return changeTheme({
							name: themes[e.target.value],
							theme
						});
					},
					children: Object.keys(themes).map((theme) => (
						<option key={theme} value={theme}>
							{themes[theme]}
						</option>
					))
				}}
				toggle={{
					checked: lineNumbers,
					onChange: (e) => toggleLineNumbers(!lineNumbers)
				}}
			/>
			<CodeBlock
				language="jsx"
				text={sample.react}
				showLineNumbers={lineNumbers}
				theme={theme}
			/>
			<br />
			<Code language="go" text={`v := Vertex{X: 1, Y: 2}`} theme={theme} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

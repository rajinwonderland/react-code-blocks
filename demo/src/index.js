import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Code, CodeBlock, dracula } from 'react-code-blocks';
import { themes, sample, TopBar } from './components';
import './styles.css';

function App() {
	const [selectedTheme, changeTheme] = useState(dracula);
	const [selectedName, changeName] = useState('dracula');
	const [lineNumbers, toggleLineNumbers] = useState(true);
	return (
		<div className="container mx-auto p-4">
			<TopBar
				select={{
					value: selectedName,
					onChange: (e) => {
						const theme = require(`react-code-blocks`)[e.target.value];
						changeTheme(theme);
						return changeName(e.target.value);
					},
					options: Object.keys(themes).map((theme) => (
						<option key={theme} value={theme}>
							{theme}
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
				theme={selectedTheme}
			/>
			<br />
			<CodeBlock
				language="jsx"
				text={sample.react}
				showLineNumbers={lineNumbers}
			/>
			<br />
			<div
				className="flex flex-wrap p-4 max-w-md m-auto"
				style={{ background: selectedTheme.backgroundColor }}>
				<Code
					language="go"
					text={`v := Vertex{X: 1, Y: 2}`}
					theme={selectedTheme}
				/>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

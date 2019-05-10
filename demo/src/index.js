import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { dracula, CopyBlock } from 'react-code-blocks';
import { themes, sample, TopBar } from './components';
import './styles.css';

function App() {
	const [selectedTheme, changeTheme] = useState(dracula);
	const [selectedName, changeName] = useState('dracula');
	const [language, changeLanguage] = useState('jsx');
	const [languageDemo, changeDemo] = useState(sample['jsx']);
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
				language={{
					value: language,
					onChange: (e) => {
						changeDemo(sample[e.target.value]);
						return changeLanguage(e.target.value);
					},
					options: Object.keys(sample).map((lang) => (
						<option key={lang} value={lang}>
							{lang}
						</option>
					))
				}}
				toggle={{
					checked: lineNumbers,
					onChange: (e) => toggleLineNumbers(!lineNumbers)
				}}
			/>
			<div className="demo">
				<CopyBlock
					language={language}
					text={languageDemo}
					showLineNumbers={lineNumbers}
					theme={selectedTheme}
					wrapLines={true}
					codeBlock
				/>
				<br />
				<CopyBlock
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

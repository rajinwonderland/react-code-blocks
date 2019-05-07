import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CodeBlock, dracula } from 'react-code-blocks';
import { themes, sample, TopBar, CopySnippet } from './components';
import './styles.css';

function App() {
	const [selectedTheme, changeTheme] = useState(dracula);
	const [selectedName, changeName] = useState('dracula');
	const [language, changeLanguage] = useState('javascript');
	const [languageDemo, changeDemo] = useState(sample['javascript']);
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
			<CodeBlock
				language={language}
				text={languageDemo}
				showLineNumbers={lineNumbers}
				theme={selectedTheme}
				wrapLines={true}
			/>
			<br />
			<CopySnippet
				language="go"
				text={`v := Vertex{X: 1, Y: 2}`}
				theme={selectedTheme}
				codeStyle={{
					borderRadius: 0,
					fontFamily: 'sans-serif'
				}}
			/>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

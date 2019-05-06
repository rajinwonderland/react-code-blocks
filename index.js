import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeBlock from './ThemedCodeBlock';
import CodeSnippet from './ThemedCodeSnippet';
import { themes, sample, TopBar } from './demo';
import { dracula, nord, railscast } from './themes';
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
						const theme = require(`./themes/${e.target.value}`).default;
						return changeTheme({
							name: e.target.value,
							theme
						});
					},
					children: themes.map((theme) => (
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
				theme={theme}
			/>
			<br />
			<CodeSnippet
				language="go"
				text={`v := Vertex{X: 1, Y: 2}`}
				theme={theme}
				showLineNumbers={lineNumbers}
				showCopy
			/>
			<br />
			<CodeBlock language="gql" text={sample.graphql} theme={railscast} />
			<br />
			<CodeBlock language="go" text={sample.go} theme={dracula} />
			<br />
			<CodeBlock language="rust" text={sample.rust} theme={nord} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

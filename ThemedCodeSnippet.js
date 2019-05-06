import React from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import CodeSnippet from './components/CodeSnippet';
var CodeWithTheme = withTheme(CodeSnippet);
var emptyTheme = {};
export default function(props) {
	return React.createElement(
		ThemeProvider,
		{
			theme: emptyTheme
		},
		React.createElement(CodeWithTheme, props)
	);
}

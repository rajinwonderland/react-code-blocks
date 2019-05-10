import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Code } from './components/code';

const components = {
	pre: (preProps) => {
		const props = preToCodeBlock(preProps);
		if (props) {
			return <Code {...props} />;
		} else {
			// it's possible to have a pre without a code in it
			return (
				<pre
					{...preProps}
					style={{ color: 'pink', padding: 5, background: '#999' }}
				/>
			);
		}
	}
};

const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
);

export default wrapRootElement;

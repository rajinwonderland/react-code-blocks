# Using React Code Block in Gatsby MDX

## Install

I will assume that you have mdx plugin up and running, if you aren't then visit [this link](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx).

Also don't forget to install react code blocks.

```sh
yarn add react-code-blocks
```

or

```sh
npm i react-code-blocks
```

Now We are ready to go.

## Usage

We are going to set our code blocks component as a default code block in mdx.

First, we should customize the component for our use then pass it to the MDXProvider.

here is our Custom Code Block.

We are going to pass to arguments, first is the language and the second is copy boolean.

```javascript
import React from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CustomCodeBlock = (props) => {
  // if any language selected or javascript by default

  const { className, copy, children } = props;

  const language = className.match(/(?<=language-)(\w.*?)\b/) != null
    ? className.match(/(?<=language-)(\w.*?)\b/)[0]
    : "javascript";

  return copy ? (
    <CopyBlock
      text={children}
      language={language}
      theme={dracula}
      wrapLines
      codeBlock
    />
  ) : (
    <CodeBlock text={children} language={language} theme={dracula} wrapLines />
  );
};

export default CustomCodeBlock;
```

And here is our MDX Provider

```javascript
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CustomCodeBlock from "../elements/CodeBlock";

export default function rootLayout({ children }) {
  return (
    <MDXProvider
      components={{
        code: (props) => <CustomCodeBlock {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}
```

Now we are ready to use it.

````mdx
```python copy
print("Hello World!")
```

```javascript
console.log("Hello World!");
```
````

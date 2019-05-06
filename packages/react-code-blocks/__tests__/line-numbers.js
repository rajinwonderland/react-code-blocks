import React from 'react'
import renderer from 'react-test-renderer'
import Code from '../src/ThemedCode'

const code = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');
function itIs() {
  return 'no seriously really it is';
}
`

test('Code component renders correctly', () => {
  const tree = renderer
    .create(<Code language="javascript" showLineNumbers={true} text={code} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Code allows lineNumberStyle as object', () => {
  const tree = renderer
    .create(
      <Code
        language="javascript"
        showLineNumbers={true}
        lineNumberContainerStyle={{ color: 'red' }}
        text={code}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Code allows lineNumberStyle as function', () => {
  const tree = renderer
    .create(
      <Code
        language="javascript"
        showLineNumbers={true}
        lineNumberContainerStyle={() => ({ color: 'red' })}
        text={code}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

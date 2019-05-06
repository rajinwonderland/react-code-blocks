import React from 'react'
import CodeBlock from '../src/ThemedCodeBlock'
import renderer from 'react-test-renderer'

const code = `
const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');
function itIs() {
  return 'no seriously really it is';
}
`

test('CodeBlock component renders correctly', () => {
  const tree = renderer.create(<Code text={code} />).toJSON()
  expect(tree).toMatchSnapshot()
})

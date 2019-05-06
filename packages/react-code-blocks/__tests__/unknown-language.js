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

test('Code component renders correctly by falling back to text if unknown language provided', () => {
  const tree = renderer.create(<Code language="j" text={code} />).toJSON()
  expect(tree).toMatchSnapshot()
})

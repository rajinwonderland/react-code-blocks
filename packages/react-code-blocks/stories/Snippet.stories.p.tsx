import React from 'react';
import { Snippet } from '../src';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { themeObj } from '../utils/knobs';
import he from 'he';

export default {
  title: 'Snippet',
  decorators: [withKnobs],
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => {
  //@ts-ignore
  const themes = select('theme', themeObj, 'dracula');
  const code = text('text', `df[df.index == 1]['name']`);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <Snippet text={he.decode(code)} theme={require('../src')[themes]} />
    </div>
  );
};

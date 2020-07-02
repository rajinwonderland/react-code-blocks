export const tuple = <T extends string[]>(...args: T) => args;

const snippetTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite'
);

const copyTypes = tuple('default', 'slient', 'prevent');

export type SnippetTypes = typeof snippetTypes[number];

export type CopyTypes = typeof copyTypes[number];

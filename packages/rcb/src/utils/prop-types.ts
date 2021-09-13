export const tuple = <T extends string[]>(...args: T) => args;

const copyTypes = tuple('default', 'slient', 'prevent');

export type CopyTypes = typeof copyTypes[number];

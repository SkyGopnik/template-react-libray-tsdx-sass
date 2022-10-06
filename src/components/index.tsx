import React, { FC, HTMLAttributes, ReactChild } from 'react';

import style from './index.module.scss';

export interface IndexProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<IndexProps> = ({ children }) => {
  return <div className={style.test}>{children || 'test'}</div>;
};

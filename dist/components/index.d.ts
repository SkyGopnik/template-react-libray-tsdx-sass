import { FC, HTMLAttributes, ReactChild } from 'react';
export interface IndexProps extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
/**
 * A custom Thing component. Neat!
 */
export declare const Thing: FC<IndexProps>;

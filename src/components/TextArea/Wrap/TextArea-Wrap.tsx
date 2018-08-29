import * as React from 'react';
import { cn } from '@bem-react/classname';

import './TextArea-Wrap.css';

const textAreaWrap = cn('TextArea', 'Wrap');

export interface ITextAreaWrapProps {
    children: React.ReactNode;
}

export const Wrap: React.SFC<ITextAreaWrapProps> = props =>
     <span className={textAreaWrap()}>{props.children}</span>;

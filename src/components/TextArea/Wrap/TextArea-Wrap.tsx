import * as React from 'react';

import { elem } from '../../../@bem-react/naming/react';

import './TextArea-Wrap.css';

const el = elem('TextArea', 'Wrap');

export interface ITextAreaWrapProps {
    children: React.ReactNode;
}

export const Wrap: React.SFC<ITextAreaWrapProps> = props =>
     <span className={el()}>{props.children}</span>;

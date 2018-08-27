import * as React from 'react';

import { entity } from '../../../@bem-react/entity';
import './TextArea-Wrap.css';

const textAreaWrap = entity('TextArea', 'Wrap');

export interface ITextAreaWrapProps {
    children: React.ReactNode;
}

export const Wrap: React.SFC<ITextAreaWrapProps> = props =>
     <span className={String(textAreaWrap)}>{props.children}</span>;

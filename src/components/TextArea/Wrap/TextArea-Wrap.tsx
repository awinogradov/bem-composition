import * as React from 'react';

import { textArea } from '../TextArea.entity';
import './TextArea-Wrap.css';

export interface ITextAreaWrapProps {
    children: React.ReactNode;
}

export const Wrap: React.SFC<ITextAreaWrapProps> = props =>
     <span className={textArea.wrap()}>{props.children}</span>;

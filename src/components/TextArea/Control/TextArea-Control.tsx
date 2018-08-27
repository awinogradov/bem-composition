import * as React from 'react';
import { TextareaHTMLAttributes } from 'react';
import { entity } from '../../../@bem-react/entity';

import './TextArea-Control.css';

export const textAreaControl = entity('TextArea', 'Control');
export interface ITextAreaControlProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string;
    name?: string;
    cols?: number;
    rows?: number;
    disabled?: boolean;
    placeholder?: string;
    autoComplete?: string;
    value: string | string[] | number;
}

export const Control = React.forwardRef((props: ITextAreaControlProps, ref) => {
    const {
        id,
        name,
        cols,
        rows,
        value,
        disabled,
        placeholder,
        autoComplete,
    } = props;

    const attrs = {
        id,
        name,
        cols,
        rows,
        value,
        disabled,
        placeholder,
        autoComplete,
        className: String(textAreaControl),
        ref: ref as React.RefObject<HTMLTextAreaElement>,
    };

    return <textarea {...attrs} />;
});

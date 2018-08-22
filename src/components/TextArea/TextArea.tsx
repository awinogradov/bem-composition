import * as React from 'react';
import {
    ChangeEvent,
    CSSProperties,
    AllHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';
import { compose } from '@typed/compose';

import { block, withClassName } from '../../@bem-react/naming/react';

import { ensureProp } from '../../utils';
import { withInteractive, IInteractiveProps } from '../../behaviors/interactive/interactive';
import { Box } from './Box/TextArea-Box';
import { Wrap } from './Wrap/TextArea-Wrap';
import { Control } from './Control/TextArea-Control';

const bl = block('TextArea');

export type TextareaChangeEventHandler = (value: string, props: ITextAreaProps, options?: { source?: string }) => void;

export interface ITextAreaProps extends IInteractiveProps {
    id?: string;
    cols?: number;
    rows?: number;
    name?: string;
    text?: string;
    theme?: string;
    size?: 'm' | 's';
    tabIndex?: number;
    hasClear?: boolean;
    className?: string;
    placeholder?: string;
    style?: CSSProperties;
    autocomplete?: boolean;
    controls?: React.ReactNode;
    onChange?: TextareaChangeEventHandler;
    forwardRef?: React.RefObject<HTMLTextAreaElement>;
    dangerouslySetAttrs?: AllHTMLAttributes<HTMLSpanElement>;
    dangerouslyControlSetAttrs?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export class TextAreaPresenter<P extends ITextAreaProps = ITextAreaProps> extends React.Component<P> {
    static defaultProps = {
        cols: 10,
        rows: 10,
    };

    constructor(props: P) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render() {
        const {
            id,
            name,
            cols,
            rows,
            controls,
            disabled,
            tabIndex,
            className,
            text = '',
            forwardRef,
            placeholder,
            autocomplete,
            dangerouslySetAttrs,
            dangerouslyControlSetAttrs = {},
        } = this.props;

        const controlAttrs = {
            id,
            cols,
            rows,
            name,
            tabIndex,
            disabled,
            placeholder,
            value: text,
            ref: forwardRef,
            onChange: ensureProp(!disabled, this.onChange),
            autoComplete: ensureProp(autocomplete === false, 'off'),
            ...dangerouslyControlSetAttrs,
        };

        return (
            <span className={className} {...dangerouslySetAttrs}>
                <Wrap>
                    <Control {...controlAttrs} />
                </Wrap>
                <Box/>
                {controls}
            </span>
        );
    }

    protected onChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const { onChange } = this.props;

        if (onChange) {
            onChange(e.currentTarget.value, this.props);
        }
    }
}

export const TextArea = compose(
    withClassName<ITextAreaProps>(bl),
    withInteractive<ITextAreaProps>(),
)(TextAreaPresenter);

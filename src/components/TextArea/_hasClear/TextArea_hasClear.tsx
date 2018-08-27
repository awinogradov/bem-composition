import * as React from 'react';
import { MouseEventHandler, MouseEvent } from 'react';
import { compose } from '@typed/compose';

import { withBemMod } from '../../../@bem-react/core';

import { Clear } from '../Clear/TextArea-Clear';
import { TextAreaClearVisible } from '../Clear/_visible/TextArea-Clear_visible';
import { ITextAreaProps } from '../TextArea';

import './TextArea_hasClear.css';

import { textArea } from '../TextArea';

const ClearWithMods = compose(TextAreaClearVisible)(Clear);

export interface ITextAreaHasClearProps extends ITextAreaProps {
    onClearClick?: MouseEventHandler;
}

function withClear() {
    return (WrappedComponent: React.SFC<ITextAreaProps>) => {
        class Clearable extends React.Component<ITextAreaHasClearProps> {
            protected domElem = React.createRef<HTMLTextAreaElement>();

            constructor(props: ITextAreaHasClearProps) {
                super(props);

                this.onClearClick = this.onClearClick.bind(this);
            }

            render() {
                const { size, text } = this.props;
                const clearElement = (
                    <ClearWithMods
                        size={size}
                        visible={Boolean(text)}
                        onClick={this.onClearClick} />
                );

                const newProps = {
                    ...this.props,
                    forwardRef: this.domElem,
                    controls: clearElement,
                };

                return <WrappedComponent {...newProps} />;
            }

            protected onClearClick(e: MouseEvent) {
                if (this.domElem.current) {
                    this.domElem.current.focus();
                }

                if (this.props.onClearClick) {
                    this.props.onClearClick(e);
                }

                if (!e.isDefaultPrevented() && this.props.onChange) {
                    this.props.onChange('', this.props, { source: 'clear' });
                }
            }
        }

        const ClearableContainer = (props: ITextAreaHasClearProps) => <Clearable {...props} />;

        return ClearableContainer;
    };
}

export const TextAreaHasClear = withBemMod<ITextAreaProps>(textArea, { hasClear: true }, (TextArea, props) => {
    const TextAreaWithClear = compose(withClear())(TextArea);

    return <TextAreaWithClear {...props} />;
});

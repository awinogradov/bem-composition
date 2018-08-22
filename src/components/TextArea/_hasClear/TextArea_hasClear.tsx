import * as React from 'react';
import { MouseEventHandler, MouseEvent } from 'react';
import { compose } from '@typed/compose';

import { withCondition } from '../../../@bem-react/conditional';

import { Clear } from '../Clear/TextArea-Clear';
import { ITextAreaProps } from '../TextArea';

import './TextArea_hasClear.css';

export interface ITextAreaHasClearProps extends ITextAreaProps {
    onClearClick?: MouseEventHandler;
}

function withClear() {
    return (WrappedComponent: React.SFC<ITextAreaProps>) => {
        class ClearableContainer extends React.Component<ITextAreaHasClearProps> {
            protected domElem = React.createRef<HTMLTextAreaElement>();

            constructor(props: ITextAreaHasClearProps) {
                super(props);

                this.onClearClick = this.onClearClick.bind(this);
            }

            render() {
                const { size, text } = this.props;
                const clearElement = (
                    <Clear
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

        return (props: ITextAreaHasClearProps) => <ClearableContainer {...props} />;
    };
}

export const TextAreaHasClear = withCondition<ITextAreaProps>({ hasClear: true }, (TextArea, props) => {
    const TextAreaWithClear = compose(withClear())(TextArea);

    return <TextAreaWithClear {...props} />;
});

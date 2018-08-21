import * as React from 'react';
import {
    FocusEvent,
    MouseEvent,
    KeyboardEvent,
    FocusEventHandler,
    MouseEventHandler,
    KeyboardEventHandler,
} from 'react';

import { setConditions } from '../../@bem-react/conditional';
import { ensureProp } from '../../utils';

export interface IInteractiveProps {
    onBlur?: FocusEventHandler<HTMLElement>;
    onFocus?: FocusEventHandler<HTMLElement>;
    onMouseDown?: MouseEventHandler<HTMLElement>;
    onMouseUp?: MouseEventHandler<HTMLElement>;
    onClick?: MouseEventHandler<HTMLElement>;
    onKeyUp?: KeyboardEventHandler<HTMLElement>;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    disabled?: boolean;
    focused?: boolean;
    pressed?: boolean;
}

export interface IInteractiveState {
    disabled?: boolean;
    focused?: boolean;
    pressed?: boolean;
}

export function withInteractive<
    P extends IInteractiveProps = IInteractiveProps,
    S extends IInteractiveState = IInteractiveState
>() {
    return (WrappedComponent: any): React.SFC<P> => { // tslint:disable-line:no-any
        class InteractiveContainer extends React.Component<P, S> {
            constructor(props: P) {
                super(props);

                const { disabled, focused, pressed } = this.props;

                this.state = {
                    disabled,
                    focused,
                    pressed,
                } as S;

                this.onFocus = this.onFocus.bind(this);
                this.onBlur = this.onBlur.bind(this);
                this.onMouseDown = this.onMouseDown.bind(this);
                this.onMouseUp = this.onMouseUp.bind(this);
                this.onClick = this.onClick.bind(this);
                this.onKeyUp = this.onKeyUp.bind(this);
                this.onKeyDown = this.onKeyDown.bind(this);
                this.docOnMouseUp = this.docOnMouseUp.bind(this);
            }

            componentWillReceiveProps(nextProps: IInteractiveProps) {
                if (nextProps.disabled !== this.props.disabled) {
                    this.setState({ disabled: nextProps.disabled });
                }
            }

            render() {
                const { pressed, disabled, focused } = this.state;

                const props = Object.assign({}, {
                    onFocus: ensureProp(!disabled, this.onFocus),
                    onBlur: ensureProp(!disabled, this.onBlur),
                    onMouseDown: ensureProp(!disabled, this.onMouseDown),
                    onMouseUp: ensureProp(!disabled, this.onMouseUp),
                    onKeyUp: ensureProp(!disabled, this.onKeyUp),
                    onKeyDown: ensureProp(!disabled, this.onKeyDown),
                    onClick: ensureProp(!disabled, this.onClick),
                }, this.props);

                const newProps = setConditions(props, {
                    disabled,
                    focused: !disabled && focused,
                    pressed: !disabled && pressed,
                });

                return <WrappedComponent {...newProps} />;
            }

            protected onMouseDown(e: MouseEvent<HTMLElement>) {
                // по нажатию правой кнопки мыши
                // не нужно выставлять pressed
                if (e.nativeEvent.which === 3) {
                    return;
                }

                this.setState({ pressed: true });

                if (this.props.onMouseDown) {
                    this.props.onMouseDown(e);
                }

                this.docOnMouseDown();
            }

            protected onMouseUp(e: MouseEvent<HTMLElement>) {
                this.setState({ pressed: false });

                if (this.props.onMouseUp) {
                    this.props.onMouseUp(e);
                }
            }

            protected onClick(e: MouseEvent<HTMLElement>) {
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
            }

            protected onKeyDown(e: KeyboardEvent<HTMLElement>) {
                if (this.props.onKeyDown) {
                    this.props.onKeyDown(e);
                }
            }

            protected onKeyUp(e: KeyboardEvent<HTMLElement>) {
                if (this.props.onKeyUp) {
                    this.props.onKeyUp(e);
                }
            }

            protected onFocus(e: FocusEvent<HTMLElement>) {
                this.setState({ focused: true });

                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            }

            protected onBlur(e: FocusEvent<HTMLElement>) {
                this.setState({ focused: false });

                if (this.props.onBlur) {
                    this.props.onBlur(e);
                }
            }

            protected docOnMouseDown() {
                // необходимо слушать mouseup вне блока, иначе
                // при отпущенной вовне кнопке мыши блок остается pressed
                document.addEventListener('mouseup', this.docOnMouseUp);
                // необходимо для button2_type_link
                document.addEventListener('dragend', this.docOnMouseUp);
            }

            protected docOnMouseUp() {
                this.setState({ pressed: false });
                document.removeEventListener('mouseup', this.docOnMouseUp);
                document.removeEventListener('dragend', this.docOnMouseUp);
            }
        }

        return (props: any) => <InteractiveContainer {...props} />; // tslint:disable-line:no-any
    };
}

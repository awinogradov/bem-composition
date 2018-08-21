import * as React from 'react';
import {
    MouseEvent,
    MouseEventHandler,
} from 'react';

import { setConditions } from '../../@bem-react/conditional';
import { ensureProp } from '../../utils';

export interface IInteractiveDesktopProps {
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    hovered?: boolean;
}

export interface IInteractiveDesktopState {
    disabled?: boolean;
    hovered?: boolean;
}

export function withDesktopInteractive<
    P extends IInteractiveDesktopProps = IInteractiveDesktopProps,
    S extends IInteractiveDesktopState = IInteractiveDesktopState
>() {
    return (WrappedComponent: any): React.SFC<P> => { // tslint:disable-line:no-any
        class InteractiveDesktopContainer extends React.Component<P, S> {
            constructor(props: P) {
                super(props);

                const { disabled } = this.props;

                this.state = {
                    disabled,
                    hovered: this.props.hovered,
                } as S;

                this.onMouseEnter = this.onMouseEnter.bind(this);
                this.onMouseLeave = this.onMouseLeave.bind(this);
            }

            componentWillReceiveProps(nextProps: IInteractiveDesktopProps) {
                if (nextProps.disabled !== this.props.disabled) {
                    this.setState({ disabled: nextProps.disabled });
                }
            }

            render() {
                const { disabled, hovered } = this.state;

                const props = Object.assign({}, {
                    onMouseEnter: ensureProp(!disabled, this.onMouseEnter),
                    onMouseLeave: ensureProp(!disabled, this.onMouseLeave),
                }, this.props);

                const newProps = setConditions(props, {
                    disabled,
                    hovered: !disabled && hovered,
                });

                return <WrappedComponent {...newProps} />;
            }

            protected onMouseEnter(e: MouseEvent<HTMLElement>) {
                this.setState({ hovered: true });

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(e);
                }
            }

            protected onMouseLeave(e: MouseEvent<HTMLElement>) {
                this.setState({ hovered: false });

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(e);
                }
            }
        }

        return (props: any) => <InteractiveDesktopContainer {...props} />; // tslint:disable-line:no-any
    };
}

import * as React from 'react';
import {
    MouseEvent,
    MouseEventHandler,
} from 'react';

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

export function withDesktopInteractive<P extends IInteractiveDesktopProps>() {
    return (WrappedComponent: any): React.SFC<P> => {
        class InteractiveDesktop extends React.Component<IInteractiveDesktopProps, IInteractiveDesktopState> {
            constructor(props: IInteractiveDesktopProps) {
                super(props);

                const { disabled } = this.props;

                this.state = {
                    disabled,
                    hovered: this.props.hovered,
                };

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

                const newProps = Object.assign({}, {
                    disabled,
                    hovered: !disabled && hovered,
                    onMouseEnter: ensureProp(!disabled, this.onMouseEnter),
                    onMouseLeave: ensureProp(!disabled, this.onMouseLeave),
                }, this.props);

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

        const InteractiveDesktopContainer = (props: P) => <InteractiveDesktop {...props} />;

        return InteractiveDesktopContainer;
    };
}

import * as React from 'react';
import { compose } from '@typed/compose';
import { cn } from '@bem-react/classname';
import { withBemClassName, withBemClassMix } from '@bem-react/core';

import { Icon, IIconProps } from '../../Icon/Icon';
import { IconTypeCross } from '../../Icon/_type/Icon_type_cross';
import { withInteractive, IInteractiveProps } from '../../../behaviors/interactive/interactive';

import './TextArea-Clear.css';

export const textAreaClear = cn('TextArea', 'Clear');

const IconWithMods = compose(IconTypeCross)(Icon);

export interface ITextAreaClearProps extends IInteractiveProps {
    theme?: string;
    size?: 'm' | 's';
    visible?: boolean;
    className?: string;
}

const mapPropsToBemMods = ({ theme }: ITextAreaClearProps) => ({ theme });

export class ClearPresenter<P extends ITextAreaClearProps = ITextAreaClearProps> extends React.Component<P> {
    attrs() {
        const { onBlur, onFocus, onMouseDown, onMouseUp, onClick, onKeyUp, onKeyDown } = this.props;

        return { onBlur, onFocus, onMouseDown, onMouseUp, onClick, onKeyUp, onKeyDown };
    }

    render() {
        const { size, className } = this.props;

        const IconWithMix = withBemClassMix<IIconProps>(String(className))(IconWithMods);

        return <IconWithMix type="cross" size={size} dangerouslySetAttrs={this.attrs()} />;
    }
}

export const Clear: React.SFC<ITextAreaClearProps> = compose(
    withInteractive(),
    withBemClassName(textAreaClear, mapPropsToBemMods),
)(ClearPresenter);

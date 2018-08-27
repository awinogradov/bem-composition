import * as React from 'react';
import { compose } from '@typed/compose';

import { entity } from '../../../@bem-react/entity';
import { withBemClassName, withBemClassMix } from '../../../@bem-react/core';

import { Icon } from '../../Icon/Icon';
import { IconTypeCross } from '../../Icon/_type/Icon_type_cross';
import { withInteractive, IInteractiveProps } from '../../../behaviors/interactive/interactive';

import './TextArea-Clear.css';

export const textAreaClear = entity('TextArea', 'Clear');

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

        const IconWithMix = withBemClassMix(IconWithMods, className);

        return <IconWithMix type="cross" size={size} dangerouslySetAttrs={this.attrs()} />;
    }
}

export const Clear = compose(
    withInteractive<ITextAreaClearProps>(),
    withBemClassName(textAreaClear, mapPropsToBemMods),
)(ClearPresenter);

import * as React from 'react';
import { compose } from '@typed/compose';

import { classnames, withClassName } from '../../../@bem-react/naming/react';

import { Icon } from '../../Icon/Icon';
import { IconTypeCross } from '../../Icon/_type/Icon_type_cross';
import { withInteractive, IInteractiveProps } from '../../../behaviors/interactive/interactive';

import { textArea } from '../TextArea.entity';
import './TextArea-Clear.css';
import { TextAreaClearVisible } from './_visible/TextArea-Clear_visible';

const IconWithMods = compose(IconTypeCross)(Icon);

export interface ITextAreaClearProps extends IInteractiveProps {
    theme?: string;
    size?: 'm' | 's';
    visible?: boolean;
    className?: string;
}

export class ClearPresenter<P extends ITextAreaClearProps = ITextAreaClearProps> extends React.Component<P> {
    attrs() {
        const { onBlur, onFocus, onMouseDown, onMouseUp, onClick, onKeyUp, onKeyDown } = this.props;

        return { onBlur, onFocus, onMouseDown, onMouseUp, onClick, onKeyUp, onKeyDown };
    }

    render() {
        const { size, className, theme } = this.props;

        const iconProps = {
            size,
            dangerouslySetAttrs: this.attrs(),
            mix: classnames(className, textArea.clear({ theme })),
        };

        return <IconWithMods type="cross" {...iconProps} />;
    }
}

export const Clear = compose(
    TextAreaClearVisible,
    withClassName(textArea.clear),
    withInteractive<ITextAreaClearProps>(),
)(ClearPresenter);

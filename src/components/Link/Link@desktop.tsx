import { compose } from '@typed/compose';
import { withBemClassName } from '../../@bem-react/core';

import { withInteractive } from '../../behaviors/interactive/interactive';
import { withDesktopInteractive, IInteractiveDesktopProps } from '../../behaviors/interactive/interactive@desktop';

import { LinkPresenter, ILinkProps} from './Link';
import { link } from './Link';

export type ILinkDesktopProps = ILinkProps & IInteractiveDesktopProps;

const mapPropsToBemMods = ({ focused, pressed, disabled, hovered }: ILinkDesktopProps) => ({ focused, pressed, disabled, hovered });

export class LinkDesktopPresenter extends LinkPresenter<ILinkDesktopProps> {
    attrs() {
        const { onMouseEnter, onMouseLeave } = this.props;

        return {
            ...super.attrs(),
            onMouseEnter,
            onMouseLeave,
        };
    }
}

export const Link = compose(
    withInteractive<ILinkDesktopProps>(),
    withDesktopInteractive<ILinkDesktopProps>(),
    withBemClassName(link, mapPropsToBemMods),
)(LinkDesktopPresenter);

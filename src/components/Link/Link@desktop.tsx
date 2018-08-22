import { compose } from '@typed/compose';
import { withClassName } from '../../@bem-react/naming/react';

import { withInteractive } from '../../behaviors/interactive/interactive';
import { withDesktopInteractive, IInteractiveDesktopProps } from '../../behaviors/interactive/interactive@desktop';

import { LinkPresenter, ILinkProps} from './Link';
import { link } from './Link.entity';

export type ILinkDesktopProps = ILinkProps & IInteractiveDesktopProps;

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
    withClassName<ILinkDesktopProps>(link),
    withInteractive<ILinkDesktopProps>(),
    withDesktopInteractive<ILinkDesktopProps>(),
)(LinkDesktopPresenter);

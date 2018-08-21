import { compose } from '@typed/compose';
import { withClassName } from '../../@bem-react/className';

import { withInteractive } from '../../behaviors/interactive/interactive';
import { withDesktopInteractive, IInteractiveDesktopProps } from '../../behaviors/interactive/interactive@desktop';

import { LinkPresenter, ILinkProps, block } from './Link';

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
    withClassName<ILinkDesktopProps>(block),
    withInteractive<ILinkDesktopProps>(),
    withDesktopInteractive<ILinkDesktopProps>(),
)(LinkDesktopPresenter);

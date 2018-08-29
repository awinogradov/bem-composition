import * as React from 'react';
import { CSSProperties } from 'react';
import { withBemClassName } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { compose } from '@typed/compose';

import { ensureProp } from '../../utils';

import { withInteractive, IInteractiveProps } from '../../behaviors/interactive/interactive';

export const link = cn('Link');

export interface ILinkProps extends IInteractiveProps {
    url: string;
    id?: string;
    rel?: string;
    name?: string;
    text?: string;
    title?: string;
    target?: string;
    tabIndex?: number;
    className?: string;
    style?: CSSProperties;
}

const mapPropsToBemMods = ({ focused, pressed, disabled }: ILinkProps) => ({ focused, pressed, disabled });
export class LinkPresenter<P extends ILinkProps = ILinkProps> extends React.Component<P> {
    attrs() {
        const {
            disabled, rel, url, target, tabIndex = 0, className,
            onBlur, onFocus, onMouseDown, onMouseUp, onClick, onKeyUp, onKeyDown,
        } = this.props;

        let _rel = rel;
        if (target === '_blank') {
            if (rel && rel.indexOf('noopener') === -1) {
                _rel = `${rel} noopener`; // Пользовательский атрибут имеет больший приоритет
            }
        }

        return {
            onBlur,
            onFocus,
            onClick,
            onKeyUp,
            onMouseUp,
            onKeyDown,
            className,
            rel: _rel,
            href: url,
            onMouseDown,
            'aria-disabled': disabled,
            role: ensureProp(!url, 'button'),
            tabIndex: disabled
                ? (url ? -1 : undefined)
                : tabIndex,
        };
    }

    render() {
        const Tag = this.props.url ? 'a' : 'span';

        return <Tag {...this.attrs()}>{this.props.text}</Tag>;
    }
}

export const Link = compose(
    withInteractive<ILinkProps>(),
    withBemClassName(link, mapPropsToBemMods),
)(LinkPresenter);

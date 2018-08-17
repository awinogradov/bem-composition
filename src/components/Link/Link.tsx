import * as React from 'react';
import { CSSProperties } from 'react';

import { block, onlyOwn, ensureProp } from '../../@bem-react/core';

import { interactive, IInteractiveProps } from '../../behaviors/interactive/interactive';

export interface ILinkProps extends IInteractiveProps {
    url: string;
    id?: string;
    rel?: string;
    name?: string;
    text?: string;
    title?: string;
    target?: string;
    tabIndex?: number;
    style?: CSSProperties;
}

const LinkView = block<ILinkProps>('Link', props => {
    const { bem, disabled } = props;
    const ownProps = onlyOwn<ILinkProps>(props);
    const { rel, url, target, text, tabIndex = 0 } = ownProps;

    const Tag = url ? 'a' : 'span';

    let _rel = rel;
    if (target === '_blank') {
        if (rel && rel.indexOf('noopener') === -1) {
            _rel = `${rel} noopener`; // Пользовательский атрибут имеет больший приоритет
        }
    }

    const newProps = {
        ...ownProps,
        rel: _rel,
        href: url,
        className: bem.className,
        'aria-disabled': disabled,
        role: ensureProp(!url, 'button'),
        tabIndex: disabled
            ? (url ? -1 : undefined)
            : tabIndex,
    };

    return <Tag {...newProps}>{text}</Tag>;
});

export const Link = interactive(LinkView);

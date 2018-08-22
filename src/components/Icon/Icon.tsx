import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import { classnames, withClassName } from '../../@bem-react/naming/react';

import { icon } from './Icon.entity';
import './Icon.css';

export type IconSize = 'ns' | 'xs' | 's' | 'm' | 'n' | 'l' | 'head';
export type IconDirection = 'left' | 'top' | 'right' | 'bottom';

export interface IIconProps {
    direction?: IconDirection;
    size?: IconSize;
    type?: 'cross';

    id?: string;
    url?: string;
    alt?: string;
    mix?: string;
    className?: string;
    dangerouslySetAttrs?: AllHTMLAttributes<IIconProps>;
}

export const IconPresenter: React.SFC<IIconProps> = props => {
    const { url, id, alt, dangerouslySetAttrs = {}, direction, size, className, mix } = props;

    if (url !== undefined) {
        dangerouslySetAttrs.style = dangerouslySetAttrs.style || {};
        dangerouslySetAttrs.style.backgroundImage = `url('${url}')`;
    }

    const attrs = {
        id,
        alt,
        className: classnames(className, icon({ direction, size }), mix),
        ...dangerouslySetAttrs,
    };

    return <span {...attrs} />;
};

export const Icon = withClassName(icon)(IconPresenter);

import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import { withBemClassName } from '../../@bem-react/core';
import { entity } from '../../@bem-react/entity';

import './Icon.css';

export const icon =  entity('Icon');

export type IconSize = 'ns' | 'xs' | 's' | 'm' | 'n' | 'l' | 'head';
export type IconDirection = 'left' | 'top' | 'right' | 'bottom';

export interface IIconProps {
    direction?: IconDirection;
    size?: IconSize;
    type?: 'cross';

    id?: string;
    url?: string;
    alt?: string;
    className?: string;
    dangerouslySetAttrs?: AllHTMLAttributes<IIconProps>;
}

const mapPropsToBemMods = ({ direction, size }: IIconProps) => ({ direction, size });

export const IconPresenter: React.SFC<IIconProps> = props => {
    const { url, id, alt, dangerouslySetAttrs = {}, className } = props;

    if (url !== undefined) {
        dangerouslySetAttrs.style = dangerouslySetAttrs.style || {};
        dangerouslySetAttrs.style.backgroundImage = `url('${url}')`;
    }

    const attrs = {
        id,
        alt,
        className,
        ...dangerouslySetAttrs,
    };

    return <span {...attrs} />;
};

export const Icon = withBemClassName(icon, mapPropsToBemMods)(IconPresenter);

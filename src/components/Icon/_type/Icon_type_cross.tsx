import { withBemMod } from '../../../@bem-react/core';

import { IIconProps } from '../Icon';
import { icon } from '../Icon';

import './Icon_type_cross.css';

export const IconTypeCross = withBemMod<IIconProps>(icon, { type: 'cross' });

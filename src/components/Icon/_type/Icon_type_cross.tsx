import { withCondition } from '../../../@bem-react/conditional';

import { IIconProps } from '../Icon';

import './Icon_type_cross.css';

export const IconTypeCross = withCondition<IIconProps>({ type: 'cross' });

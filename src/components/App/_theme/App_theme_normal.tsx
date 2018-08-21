import { withCondition } from '../../../@bem-react/conditional';

import { IAppProps } from '../App';

export const AppThemeNormal = withCondition<IAppProps>({ theme: 'normal' });

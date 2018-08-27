import { withBemMod } from '../../../@bem-react/core';

import { IAppProps, app } from '../App';

export const AppThemeNormal = withBemMod<IAppProps>(app, { theme: 'normal' });

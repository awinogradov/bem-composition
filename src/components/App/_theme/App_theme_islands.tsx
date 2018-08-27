import { withBemMod } from '../../../@bem-react/core';

import './App_theme_islands.css';

import { IAppProps, app } from '../App';

export const AppThemeIslands = withBemMod<IAppProps>(app, { theme: 'islands' });

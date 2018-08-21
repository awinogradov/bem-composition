import { withCondition } from '../../../@bem-react/conditional';

import './App_theme_islands.css';

import { IAppProps } from '../App';

export const AppThemeIslands = withCondition<IAppProps>({ theme: 'islands' });

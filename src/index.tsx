import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { compose } from '@typed/compose';

import { App } from './components/App/App';
import { AppThemeIslands } from './components/App/_theme/App_theme_islands';
import { AppThemeNormal } from './components/App/_theme/App_theme_normal';
import { AppTypeButton } from './components/App/_type/App_type_button';

import './index.css';

const AppWithMods = compose(AppThemeNormal, AppTypeButton, AppThemeIslands)(App);

ReactDOM.render(<AppWithMods />, document.getElementById('root'));

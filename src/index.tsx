import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { compose } from './@bem-react/core';

import { App } from './components/App/App';
import { AppThemeIslands } from './components/App/_theme/App_theme_islands';
import { AppTypeButton } from './components/App/_type/App_type_button';

import './components/Page/Page.css';

const AppWithMods = compose(AppThemeIslands, AppTypeButton)(App);

ReactDOM.render(<AppWithMods />, document.getElementById('root'));

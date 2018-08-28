import * as React from 'react';
import { entity } from '../../../@bem-react/entity';

import './App-Logo.css';
import logo from './App-Logo.svg';

export const appLogo = entity('App', 'Logo');

export const Logo: React.SFC = () => <img src={logo} className={appLogo()} />;

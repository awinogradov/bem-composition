import * as React from 'react';
import { cn } from '@bem-react/classname';

import './App-Logo.css';
import logo from './App-Logo.svg';

export const appLogo = cn('App', 'Logo');

export const Logo: React.SFC = () => <img src={logo} className={appLogo()} />;

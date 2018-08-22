import * as React from 'react';

import { elem } from '../../../@bem-react/naming/react';

import './App-Logo.css';
import logo from './App-Logo.svg';

const el = elem('App', 'Logo');

export const Logo: React.SFC = () => <img src={logo} className={el()} />;

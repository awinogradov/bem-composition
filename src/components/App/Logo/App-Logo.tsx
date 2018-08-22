import * as React from 'react';

import { app } from '../App.entity';
import './App-Logo.css';
import logo from './App-Logo.svg';

export const Logo: React.SFC = () => <img src={logo} className={app.logo()} />;

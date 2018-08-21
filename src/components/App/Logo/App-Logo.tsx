import * as React from 'react';

import { cn } from '../App';

import './App-Logo.css';
import logo from './App-Logo.svg';

export const Logo: React.SFC = () => <img src={logo} className={cn('Logo')} />;

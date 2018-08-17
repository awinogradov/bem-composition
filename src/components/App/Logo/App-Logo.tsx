import * as React from 'react';

import { elem } from '../../../@bem-react/core';

import './App-Logo.css';

export interface IAppLogoProps {
    src: string;
}

export const Logo: React.SFC<IAppLogoProps> = elem('Logo', ({ bem, src }) =>
    <img src={src} className={bem.className} alt="logo" />);

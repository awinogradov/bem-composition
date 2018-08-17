import * as React from 'react';

import { block, elem } from '../../@bem-react/core';

import { Link } from '../Link/Link@desktop';

import { Logo } from './Logo/App-Logo';
import { Title } from './Title/App-Title';

import logo from './App.svg';

import './App.css';

const Header = elem('Header', ({ bem }) => (
    <header className={bem.className}>
        <Logo src={logo} />
        <Title text="Welcome to React" />
        <Link url="http://yandex.ru" text="Intractive link" />
    </header>
));

export interface IAppProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const App = block<IAppProps>('App', ({ bem, onClick }) => (
    <div className={bem.className} onClick={onClick}>
        <Header/>
        <p className={bem.elem('Intro', { theme: 'shit' })}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
));

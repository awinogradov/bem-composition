import * as React from 'react';

import { Link } from '../../Link/Link@desktop';

import { Logo } from '../Logo/App-Logo';
import { Title } from '../Title/App-Title';

import { app } from '../App.entity';
import './App-Header.css';

export interface IAppHeaderProps {
    title: string;
}

export const Header: React.SFC<IAppHeaderProps> = ({ title }) => (
    <header className={app.header()}>
        <Logo />
        <Title text={title} />
        <Link url="http://yandex.ru" text="Interactive link" />
    </header>
);

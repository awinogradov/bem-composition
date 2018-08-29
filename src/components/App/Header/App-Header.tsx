import * as React from 'react';
import { cn } from '@bem-react/classname';

import { Link } from '../../Link/Link@desktop';

import { Logo } from '../Logo/App-Logo';
import { Title } from '../Title/App-Title';

import './App-Header.css';

export const appHeader = cn('App', 'Header');

export interface IAppHeaderProps {
    title: string;
}

export const Header: React.SFC<IAppHeaderProps> = ({ title }) => (
    <header className={appHeader()}>
        <Logo />
        <Title text={title} />
        <Link url="http://yandex.ru" text="Interactive link" />
    </header>
);

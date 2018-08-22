import * as React from 'react';
import { elem } from '../../../@bem-react/naming/react';

import { Link } from '../../Link/Link@desktop';

import { Logo } from '../Logo/App-Logo';
import { Title } from '../Title/App-Title';

import './App-Header.css';

const el = elem('App', 'Header');

export interface IAppHeaderProps {
    title: string;
}

export const Header: React.SFC<IAppHeaderProps> = ({ title }) => (
    <header className={el()}>
        <Logo />
        <Title text={title} />
        <Link url="http://yandex.ru" text="Interactive link" />
    </header>
);

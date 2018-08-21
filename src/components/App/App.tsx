import * as React from 'react';

import { react } from '../../@bem-react/naming';
import { withClassName } from '../../@bem-react/className';

import { Header } from './Header/App-Header';

import './App.css';

export const cn = react.block('App');

export interface IAppProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    theme?: 'islands' | 'normal';
    type?: 'button';
    className?: string;
}

const AppPresenter: React.SFC<IAppProps> = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <Header title="Welcome to React" />
        <p className={cn('Intro', { theme: 'shit' })}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
);

export const App = withClassName(cn)(AppPresenter);

import * as React from 'react';

import { bem } from '../../@bem-react/naming/react';
import { withClassName } from '../../@bem-react/className';
import { compose } from '@typed/compose';

import { Header } from './Header/App-Header';
import { Icon } from '../Icon/Icon';
import { IconTypeCross } from '../Icon/_type/Icon_type_cross';

const IconWithMods = compose(IconTypeCross)(Icon);

import './App.css';

export const { block, elem } = bem('App');

export interface IAppProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    theme?: 'islands' | 'normal';
    type?: 'button';
    className?: string;
}

const AppPresenter: React.SFC<IAppProps> = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <Header title="Welcome to React" />
        <p className={elem('Intro', { theme: 'shit' })}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <IconWithMods size="s" type="cross" mix={elem('Icon')} />
    </div>
);

export const App = withClassName(block)(AppPresenter);

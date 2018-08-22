import * as React from 'react';
import { compose } from '@typed/compose';

import { block, withClassName } from '../../@bem-react/naming/react';

import { Header } from './Header/App-Header';

import { TextArea } from '../TextArea/TextArea';
import { TextAreaThemeNormal } from '../TextArea/_theme/TextArea_theme_normal';
import { TextAreaSizeM } from '../TextArea/_size/TextArea_size_m';
import { TextAreaHasClear } from '../TextArea/_hasClear/TextArea_hasClear';

const TextAreaWithMods = compose(TextAreaThemeNormal, TextAreaSizeM, TextAreaHasClear)(TextArea);

import './App.css';

const b = block('App');

export interface IAppProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    theme?: 'islands' | 'normal';
    type?: 'button';
    className?: string;
}

const AppPresenter: React.SFC<IAppProps> = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <Header title="Welcome to React" />
        <p className={b('Intro', { theme: 'shit' })}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextAreaWithMods theme="normal" size="m" hasClear text="wow!" />
    </div>
);

export const App = withClassName(b)(AppPresenter);

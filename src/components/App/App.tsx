import * as React from 'react';
import { compose } from '@typed/compose';

import { withBemClassName } from '../../@bem-react/core';
import { entity } from '../../@bem-react/entity';
import { withRegistry, Registry, RegistryConsumer } from '../../@bem-react/di';

import { textAreaBox } from '../TextArea/Box/TextArea-Box';
import { textArea, TextArea as Ta, ITextAreaProps } from '../TextArea/TextArea';
import { TextAreaThemeNormal } from '../TextArea/_theme/TextArea_theme_normal';
import { TextAreaSizeM } from '../TextArea/_size/TextArea_size_m';
import { TextAreaHasClear } from '../TextArea/_hasClear/TextArea_hasClear';

import { Header } from './Header/App-Header';

export const app = entity('App');
export const appIntro = entity('App', 'Intro');

const textAreaOverrides = new Registry({ id: textArea() });
const textAreaOverrides2 = new Registry({ id: textArea() });

textAreaOverrides.add(textAreaBox(), () => <section/>);
textAreaOverrides2.add(textAreaBox(), () => <abbr/>);

const TextAreaWithMods: React.SFC<ITextAreaProps> = compose(
    // withRegistry<ITextAreaProps>(textAreaOverrides), // это важнее чем в App, но перетирает тот что в TextArea
    TextAreaThemeNormal,
    TextAreaSizeM,
    TextAreaHasClear,
)(Ta);

import './App.css';


const appRegistry = new Registry({ id: app() });

appRegistry.add(textArea(), TextAreaWithMods);

export interface IAppProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    theme?: 'islands' | 'normal';
    type?: 'button';
    className?: string;
}

const AppPresenter: React.SFC<IAppProps> = ({ className, onClick }) => (
    <RegistryConsumer>
        {registries => {
            const registry = registries[app()];

            const TextArea = registry.get<ITextAreaProps>(textArea());

            return (
                <div className={className} onClick={onClick}>
                    <Header title="Welcome to React" />
                    <p className={appIntro({ theme: 'shit' })}>
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <TextArea theme="normal" size="m" hasClear text="wow!" />
                </div>
            );
        }}
    </RegistryConsumer>
);

export const App = compose(
    withRegistry(appRegistry),
    withBemClassName(app),
)(AppPresenter);

import * as React from 'react';
import { cn } from '@bem-react/classname';

import './App-Title.css';

export const appTitle = cn('App', 'Title');

export interface IAppTitleProps {
    text: string;
}

export class Title extends React.Component<IAppTitleProps> {
    render() {
        return <h1 className={appTitle()}>{this.props.text}</h1>;
    }
}

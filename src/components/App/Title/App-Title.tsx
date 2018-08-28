import * as React from 'react';
import { entity } from '../../../@bem-react/entity';

import './App-Title.css';

export const appTitle = entity('App', 'Title');

export interface IAppTitleProps {
    text: string;
}

export class Title extends React.Component<IAppTitleProps> {
    render() {
        return <h1 className={appTitle()}>{this.props.text}</h1>;
    }
}

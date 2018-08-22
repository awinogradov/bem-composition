import * as React from 'react';

import { app } from '../App.entity';
import './App-Title.css';

interface IAppTitleProps {
    text: string;
}

export class Title extends React.Component<IAppTitleProps> {
    render() {
        return <h1 className={app.title()}>{this.props.text}</h1>;
    }
}

import * as React from 'react';

import { elem } from '../../../@bem-react/naming/react';

import './App-Title.css';

const el = elem('App', 'Title');

interface IAppTitleProps {
    text: string;
}

export class Title extends React.Component<IAppTitleProps> {
    render() {
        return <h1 className={el()}>{this.props.text}</h1>;
    }
}

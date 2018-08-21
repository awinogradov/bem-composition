import * as React from 'react';

import { cn } from '../App';

import './App-Title.css';

interface IAppTitleProps {
    text: string;
}

export class Title extends React.Component<IAppTitleProps> {
    render() {
        return <h1 className={cn('Title')}>{this.props.text}</h1>;
    }
}

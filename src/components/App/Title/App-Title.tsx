import * as React from 'react';

import { elem, IElemProps } from '../../../@bem-react/core';

import './App-Title.css';

interface IAppTitleProps {
    text: string;
}

class AppTitle extends React.Component<IAppTitleProps & IElemProps> {
    render() {
        const { text, bem } = this.props;

        return <h1 className={bem.className}>{text}</h1>;
    }
}

export const Title = elem('Title', AppTitle);

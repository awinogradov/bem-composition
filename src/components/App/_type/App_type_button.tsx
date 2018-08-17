import * as React from 'react';

import { mod } from '../../../@bem-react/core';

import { IAppProps } from '../App';

export const AppTypeButton = mod<IAppProps>({ type: 'button' }, (Block, props) => {
    const newProps = {
        ...props,
        onClick: () => console.log('!!!'), // tslint:disable-line:no-console
    };

    return <Block {...newProps} />;
});

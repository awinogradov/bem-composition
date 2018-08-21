import * as React from 'react';

import { withCondition } from '../../../@bem-react/conditional';

import { IAppProps } from '../App';

export const AppTypeButton = withCondition<IAppProps>({ type: 'button' }, (App, props) => (
    <App {...{
        ...props,
        onClick: () => console.log('!!!'), // tslint:disable-line:no-console
    }} />
));

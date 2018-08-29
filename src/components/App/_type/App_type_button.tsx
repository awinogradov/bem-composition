import * as React from 'react';
import { withBemMod } from '@bem-react/core';

import { IAppProps, app } from '../App';

export const AppTypeButton = withBemMod<IAppProps>(app, { type: 'button' }, (App, props) => (
    <App {...{
        ...props,
        onClick: () => console.log('!!!'), // tslint:disable-line:no-console
    }} />
));

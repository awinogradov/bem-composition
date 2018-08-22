import { bem } from '../../../@bem-react/naming/react';

const { block, elem } = bem('App');

export const app = block;

app.header = elem('Header');
app.logo = elem('Logo');
app.title = elem('Title');
app.intro = elem('Intro');

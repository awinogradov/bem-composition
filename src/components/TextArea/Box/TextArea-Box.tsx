import * as React from 'react';

import { elem } from '../../../@bem-react/naming/react';

import './TextArea-Box.css';

const el = elem('TextArea', 'Box');

export const Box = () => <span className={el()}/>;

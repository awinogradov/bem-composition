import * as React from 'react';
import { entity } from '../../../@bem-react/entity';

import './TextArea-Box.css';

export const textAreaBox = entity('TextArea', 'Box');

export const Box = () => <span className={textAreaBox()}/>;

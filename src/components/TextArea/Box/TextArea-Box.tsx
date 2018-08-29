import * as React from 'react';
import { cn } from '@bem-react/classname';

import './TextArea-Box.css';

export const textAreaBox = cn('TextArea', 'Box');

export const Box = () => <span className={textAreaBox()}/>;

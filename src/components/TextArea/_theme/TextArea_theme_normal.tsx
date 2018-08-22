import { withCondition } from '../../../@bem-react/conditional';

import { ITextAreaProps } from '../TextArea';

import './TextArea_theme_normal.css';

export const TextAreaThemeNormal = withCondition<ITextAreaProps>({ theme: 'normal' });

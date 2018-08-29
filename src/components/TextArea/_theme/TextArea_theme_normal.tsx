import { withBemMod } from '@bem-react/core';

import { ITextAreaProps } from '../TextArea';

import './TextArea_theme_normal.css';

import { textArea } from '../TextArea';

export const TextAreaThemeNormal = withBemMod<ITextAreaProps>(textArea, { theme: 'normal' });

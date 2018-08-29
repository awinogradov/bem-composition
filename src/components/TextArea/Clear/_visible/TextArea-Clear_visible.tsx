import { withBemMod } from '@bem-react/core';

import { ITextAreaClearProps } from '../TextArea-Clear';

import './TextArea-Clear_visible.css';

import { textAreaClear } from '../TextArea-Clear';

export const TextAreaClearVisible = withBemMod<ITextAreaClearProps>(textAreaClear, { visible: true });

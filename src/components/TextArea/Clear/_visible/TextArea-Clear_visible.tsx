import { withCondition } from '../../../../@bem-react/conditional';

import { ITextAreaClearProps } from '../TextArea-Clear';

import './TextArea-Clear_visible.css';

export const TextAreaClearVisible = withCondition<ITextAreaClearProps>({ visible: true });

import { withCondition } from '../../../@bem-react/conditional';

import { ITextAreaProps } from '../TextArea';

import './TextArea_size_m.css';

export const TextAreaSizeM = withCondition<ITextAreaProps>({ size: 'm' });

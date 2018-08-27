import { withBemMod } from '../../../@bem-react/core';

import { ITextAreaProps } from '../TextArea';

import './TextArea_size_m.css';

import { textArea } from '../TextArea';

export const TextAreaSizeM = withBemMod<ITextAreaProps>(textArea, { size: 'm' });

import { bem } from '../../../@bem-react/naming/react';

const { block, elem } = bem('TextArea');

export const textArea = block;

textArea.box = elem('Box');
textArea.wrap = elem('Wrap');
textArea.control = elem('Control');
textArea.clear = elem('Clear');

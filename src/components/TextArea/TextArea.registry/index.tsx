import { Registry } from '../../../@bem-react/di';

import { textArea } from '../TextArea.entity';
import { Box } from '../Box/TextArea-Box';

const textAreaRegistry = new Registry({ id: textArea(), inverted: true });

textAreaRegistry.add(textArea.box(), Box);

export { textAreaRegistry };

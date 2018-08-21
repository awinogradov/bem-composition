import { B } from 'b_';

export const react = {
    block(block: string) {
        return B({
            elementSeparator: '-',
            modSeparator: '_',
            modValueSeparator: '_',
        }).with(block);
    },
};

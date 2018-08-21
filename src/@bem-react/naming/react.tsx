import { B } from 'b_';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

export const bem = (b: string) => {
    const block = B({
        elementSeparator: '-',
        modSeparator: '_',
        modValueSeparator: '_',
    }).with(b);

    return {
        block,
        elem(e: string, elemMods?: NoStrictMods) {
            return block(e, elemMods);
        },
        mods(mods: NoStrictMods) {
            return block(mods);
        },
    };
};

export * from '.';

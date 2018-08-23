import { B } from 'b_';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

type ElemFormatter = (mods?: NoStrictMods) => string;

interface IEntity {
    (mods?: NoStrictMods): string;
    [key: string]: ElemFormatter;
}

export const bem = (b: string) => {
    const bl = B({
        elementSeparator: '-',
        modSeparator: '_',
        modValueSeparator: '_',
    }).with(b);

    // @ts-ignore
    const block: IEntity = (mods?: NoStrictMods) => {
        return bl(mods);
    };

    const elem = (e: string) => {
        return function(elemMods?: NoStrictMods) {
            return bl(e, elemMods);
        };
    };

    return { block, elem };
};

export * from '.';

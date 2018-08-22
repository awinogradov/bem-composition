import { B } from 'b_';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

// interface IBlockFormatter {
//     (mods?: NoStrictMods): string;
//     (elem: string, mods?: NoStrictMods): string;
// }

type ElemFormatter = (mods?: NoStrictMods) => string;

// const bem = B({
//     elementSeparator: '-',
//     modSeparator: '_',
//     modValueSeparator: '_',
// });

interface IEntity {
    (mods?: NoStrictMods): string;
    [key: string]: ElemFormatter;
}

// @ts-ignore
// export const block = (b: string): IEntity => bem.with(b);

// export const elem = (b: string, e: string) => bem.with(b, e);

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

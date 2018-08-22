import { B } from 'b_';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

const bem = B({
    elementSeparator: '-',
    modSeparator: '_',
    modValueSeparator: '_',
});

export const block = (b: string) => bem.with(b);

export const elem = (b: string, e: string) => (elemMods?: NoStrictMods) => block(b)(e, elemMods);

// export const bem = (b: string) => {
//     const block = B({
//         elementSeparator: '-',
//         modSeparator: '_',
//         modValueSeparator: '_',
//     }).with(b);

//     return {
//         block,
//         elem(e: string) {
//             return function(elemMods?: NoStrictMods) {
//                 return block(e, elemMods);
//             };
//         },
//         mods(mods: NoStrictMods) {
//             return block(mods);
//         },
//     };
// };

export * from '.';

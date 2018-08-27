import { stringifyWrapper, Stringify } from '@bem/sdk.naming.entity.stringify';

const react = require('@bem/sdk.naming.presets/react');

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

const modsToArray = (block: string, elem?: string, mods?: NoStrictMods) => {
    const arr = [];

    if (!mods) return [];

    for (const modName in mods) {
        if (mods[modName] || mods[modName] === 0) {
            arr.push({
                block,
                elem,
                mod: {
                    name: modName,
                    val: mods[modName] === true ? true : String(mods[modName]),
                },
            });
        }
    }

    return arr;
};

export interface IEntity {
    block: string;
    elem?: string;
}

export interface IEntityFormatter {
    block: string;
    elem?: string;
    mods(m?: NoStrictMods): string;
}

class Entity {
    block: string;
    elem?: string;
    protected naming: Stringify;

    constructor(options: IEntity) {
        this.block = options.block;
        this.elem = options.elem;
        this.naming = stringifyWrapper(react);
    }

    mods(mods?: NoStrictMods) {
        return modsToArray(this.block, this.elem, mods).map(this.naming).join(' ');
    }

    toString() {
        return this.naming({ block: this.block, elem: this.elem });
    }
}

export const entity = (block: string, elem?: string) => new Entity({ block, elem });

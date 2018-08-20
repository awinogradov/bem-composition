import * as React from 'react';
import { bemClassName } from 'bem-react-core';
import { react } from '@bem/sdk.naming.presets';

const deepAssign = require('deep-assign');

export { compose } from '@typed/compose';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

export type ValidComponent<P> = React.SFC<P> | React.ComponentClass<P>;

export interface IBemContext {
    blockName?: string;
}

export interface IBlock {
    block: string;
    mods?: NoStrictMods;
    elem: (elemName: string, elemMods: NoStrictMods) => string;
    className: string;
}

export interface IBlockProps {
    bem: IBlock;
}

export interface IElem {
    block: string;
    elem: string;
    elemMods?: NoStrictMods;
    className: string;
}

export interface IElemProps {
    bem: IElem;
}

const naming = bemClassName(react);
const BemContext = React.createContext<IBemContext>({
    blockName: undefined,
});

export function elem<P>(elemName: string, ElemComponent: ValidComponent<P & IElemProps>): React.SFC<P> {
    return (props: any) => ( // tslint:disable-line:no-any
        <BemContext.Consumer>
            {(bemContext: IBemContext) => {
                if (!bemContext.blockName) throw Error('Alarm!');

                const newProps = setBem(props, {
                    block: bemContext.blockName,
                    elem: elemName,
                    className: naming(bemContext.blockName, elemName, (props.bem || {}).elemMods),
                });

                return <ElemComponent {...newProps} />;
            }}
        </BemContext.Consumer>
    );
}

export function block<P>(blockName: string, BlockComponent: React.SFC<P & IBlockProps>): React.SFC<P> {
    return (props: any) => { // tslint:disable-line:no-any
        const newProps = setBem(props, {
            block: blockName,
            elem: (elemName: string, elemMods: NoStrictMods) => naming(blockName, elemName, elemMods),
            className: naming(blockName, undefined, (props.bem || {}).mods), // tslint:disable-line:no-any
        });

        return (
            <BemContext.Provider value={{ blockName }}>
                <BlockComponent {...newProps} />
            </BemContext.Provider>
        );
    };
}

type ModBody<P> = (Block: React.SFC<P>, props: P & IBlockProps) => JSX.Element;
type ModMatch = Record<string, string | boolean | number>;
export function mod<P>(match: ModMatch, cb?: ModBody<P>) {
    return function(Block: React.SFC<P>) {
        return function(props: P) {
            if (matchSubset(props, match)) {
                const newProps = setBem(props, { mods: match });

                return cb
                    ? cb(Block, newProps)
                    : <Block {...newProps} />;
            }

            return <Block {...props}/>;
        };
    };
}

export function onlyOwn<P>(props: P) {
    const ownProps: any = Object.assign({}, props); // tslint:disable-line:no-any

    if (ownProps.bem) delete ownProps.bem;

    return ownProps as P;
}

export const ensureProp = (predicate: boolean, prop: any) => predicate ? prop : undefined; // tslint:disable-line:no-any

export function setBem<P>(props: P, bem: Partial<IBlock | IElem>) {
    return Object.assign({}, props, { bem: deepAssign({}, (props as any).bem, bem) }); // tslint:disable-line:no-any
}

export function matchSubset(props: Record<string, any>, match: Record<string, any>) { // tslint:disable-line:no-any
    return Object.keys(match).every(key => {
        return props[key] === match[key];
    });
}

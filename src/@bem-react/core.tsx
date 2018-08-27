import * as React from 'react';
import { IEntityFormatter } from './entity';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

export interface IClassNameProps {
    className?: string;
}

export type ModBody<P> = (Block: React.SFC<P>, props: P) => JSX.Element;
export type ModMatch = Record<string, string | boolean | number>;

export const matchSubset = (
    props: Record<string, any>,
    match: Record<string, any>,
) => Object.keys(match).every(key => props[key] === match[key]);

export function withBemClassName<P extends IClassNameProps>(
    entity: IEntityFormatter,
    mapPropsToBemMods?: (props: P) => NoStrictMods,
) {
    return function(Origin: any): React.SFC<P> {
        const BemClassName: React.SFC<P> = (props: P) => {
            const mods = mapPropsToBemMods ? entity.mods(mapPropsToBemMods(props)) : undefined;
            const bemClassName = classnames(String(entity), mods);
            const className = classnames(bemClassName, props.className);
            const newProps = Object.assign({}, props, { className });

            BemClassName.displayName = `BemClassName(${Origin.displayName || Origin.name}, ${bemClassName})`;

            return <Origin {...newProps} />;
        };

        return BemClassName;
    };
}

export function withBemMod<P extends IClassNameProps>(
    entity: IEntityFormatter,
    mod: NoStrictMods,
    cb?: ModBody<P>,
) {
    return function(Block: React.SFC<P>) {
        const BemMod: React.SFC<P> = function(props: P) {
            if (matchSubset(props, mod)) {
                const newProps = Object.assign({}, props, {
                    className: classnames(props.className, entity.mods(mod)),
                });

                BemMod.displayName = `BemMod(${JSON.stringify(mod)}, true)`;

                return cb ? cb(Block, newProps) : <Block {...newProps} />;
            }

            BemMod.displayName = `BemMod(${JSON.stringify(mod)})`;

            return <Block {...props}/>;
        };

        return BemMod;
    };
}

export function withBemClassMix<P extends IClassNameProps>(
    Origin: React.ComponentClass<P> | React.SFC<P>,
    mix?: string,
) {
    const BemClassMix: React.SFC<P> = (props: P) => {
        const newProps = Object.assign({}, props, {
            className: classnames(props.className, mix),
        });

        return <Origin {...newProps} />;
    };

    BemClassMix.displayName = `BemClassMix(${mix})`;

    return BemClassMix;
}

export const classnames = (...args: Array<string | undefined>) => {
    const classNames: string[] = [];

    args.forEach(className => {
        if (className) {
            className.split(' ').forEach(part => {
                if (classNames.indexOf(part) === -1) {
                    classNames.push(part);
                }
            });
        }
    });

    return classNames.join(' ');
};

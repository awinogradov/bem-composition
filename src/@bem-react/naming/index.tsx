import * as React from 'react';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

export interface IClassNameProps {
    className?: string;
}

export interface IConditionsProps {
    conditions: NoStrictMods;
}

export function withClassName<P extends IClassNameProps>(fn: (mods: NoStrictMods) => string) {
    return function(Origin: React.ComponentClass<P> | React.SFC<P>): React.SFC<P> {
        const ClassName = (props: P) => {
            const newProps = Object.assign({}, props, {
                className: classnames(fn((props as any).conditions), props.className),
            });

            return <Origin {...newProps} />;
        };

        return ClassName;
    };
}

export function withClassMix<P extends IClassNameProps>(
    Origin: React.ComponentClass<P> | React.SFC<P>,
    mix: string,
) {
    const ClassMix = (props: P) => {
        const newProps = Object.assign({}, props, {
            className: classnames(props.className, mix),
        });

        return <Origin {...newProps} />;
    };

    return ClassMix;
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

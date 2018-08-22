import * as React from 'react';

export type NoStrictMods = Record<string, string | boolean | number | undefined>;

export function withClassName<P>(fn: (mods: NoStrictMods) => string) {
    return function(Origin: React.ComponentClass<P> | React.SFC<P>): React.SFC<P> {
        const ClassName = (props: any) => { // tslint:disable-line:no-any
            const newProps = {
                ...props,
                className: fn(props.conditions),
            };

            return <Origin {...newProps} />;
        };

        return ClassName;
    };
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

    return classNames.join(' ').trim();
};

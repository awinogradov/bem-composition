import * as React from 'react';

export type NoStrictConditions = Record<string, string | boolean | number | undefined>;

export interface IConditionalProps {
    conditions?: NoStrictConditions;
}

export type ModBody<P> = (Block: React.SFC<P>, props: P & IConditionalProps) => JSX.Element;
export type ModMatch = Record<string, string | boolean | number>;

export function matchSubset(props: Record<string, any>, match: Record<string, any>) { // tslint:disable-line:no-any
    return Object.keys(match).every(key => props[key] === match[key]);
}

export function withCondition<P>(condition: ModMatch, cb?: ModBody<P>) {
    return function(Block: React.SFC<P>) {
        const Conditional = function(props: P) {
            if (matchSubset(props, condition)) {
                const newProps = setConditions(props, {
                    ...(props as any).conditions, // tslint:disable-line:no-any
                    ...condition,
                });

                return cb
                    ? cb(Block, newProps)
                    : <Block {...newProps} />;
            }

            return <Block {...props}/>;
        };

        return Conditional;
    };
}

export function setConditions<P>(props: P & IConditionalProps, condition: NoStrictConditions) {
    return Object.assign({}, props, { conditions: {
        ...props.conditions,
        ...condition,
    }});
}

export function onlyOwn<P>(props: P) {
    const ownProps: any = Object.assign({}, props); // tslint:disable-line:no-any

    if (ownProps.conditions) delete ownProps.conditions;

    return ownProps as P;
}

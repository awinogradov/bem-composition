import * as React from 'react';

export function withClassName<P>(fn: (mods: object) => string) {
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

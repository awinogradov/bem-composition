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

[
    scope('(.component)', [
        rule(selector([
            classSelector('a'),
        ]), [
            declaration('color', 'red'),
        ]),
    ]),
];

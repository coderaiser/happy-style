[
    rule(selector([
        classSelector('x'),
    ]), [
        declaration('grid-template-columns', valueList([
            brackets(['full-start']),
            functionValue('minmax', [
                dimension(1, 'em'),
                operator(','),
                dimension(1, 'fr'),
            ]),
            brackets(['full-end']),
        ])),
    ]),
];

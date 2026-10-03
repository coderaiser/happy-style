[
    rule(selector([
        classSelector('x'),
    ]), [
        declaration('grid-template-columns', valueList([
            brackets(['full-start']),
            brackets(['full-end']),
        ])),
    ]),
];

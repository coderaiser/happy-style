[
    rule(selector([
        classSelector('a'),
    ]), [
        declaration('background', functionValue('linear-gradient', [
            'red',
            percentage(0),
            operator(','),
            'blue',
            percentage(100),
        ])),
    ]),
];

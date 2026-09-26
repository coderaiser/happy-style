[
    rule(selector([
        classSelector('a'),
    ]), [
        declaration('color', functionValue('color-mix', [
            'in',
            'srgb',
            operator(','),
            'red',
            percentage(50),
            operator(','),
            'blue',
        ])),
    ]),
];

[
    rule(selector([
        classSelector('a'),
    ]), [
        declaration('font-family', valueList([
            'Arial',
            operator(','),
            'sans-serif',
        ])),
        declaration('aspect-ratio', valueList([
            16,
            operator('/'),
            9,
        ])),
    ]),
];

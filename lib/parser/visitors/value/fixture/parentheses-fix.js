[
    rule(selector([
        classSelector('x'),
    ]), [
        declaration('width', parentheses([
            dimension(1, 'px'),
            operator('+'),
            dimension(2, 'px'),
        ])),
    ]),
];

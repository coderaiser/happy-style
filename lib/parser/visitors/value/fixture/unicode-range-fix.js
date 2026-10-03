[
    rule(selector([
        classSelector('x'),
    ]), [
        declaration('unicode-range', valueList([
            unicodeRange('U+0-7F'),
            operator(','),
            unicodeRange('U+2000-206F'),
        ])),
    ]),
];

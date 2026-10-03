[
    rule(selector([
        classSelector('x'),
    ]), [
        declaration('width', functionValue('var', ['--gap', operator(','), ' '])),
    ]),
];

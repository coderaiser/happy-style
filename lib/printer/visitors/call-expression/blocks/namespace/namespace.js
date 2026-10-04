export function namespace(path, {write}) {
    write(`@namespace ${path.get('arguments')[0].node.value};\n`);
}

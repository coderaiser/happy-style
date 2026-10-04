export function marginBox(path, {write, traverse, indent}) {
    const [name, decls] = path.get('arguments');
    
    indent();
    write(`@${name.node.value} {\n`);
    indent.inc();
    
    for (const decl of decls.get('elements'))
        traverse(decl);
    
    indent.dec();
    indent();
    write('}\n');
}

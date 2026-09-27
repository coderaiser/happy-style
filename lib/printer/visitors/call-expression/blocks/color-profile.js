export function colorProfile(path, {write, traverse, indent}) {
    const [name, decls] = path.get('arguments');
    
    write(`@color-profile ${name.node.value} {\n`);
    indent.inc();
    
    for (const decl of decls.get('elements'))
        traverse(decl);
    
    indent.dec();
    write('}\n');
}

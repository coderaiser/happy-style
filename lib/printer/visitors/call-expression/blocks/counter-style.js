export function counterStyle(path, {write, traverse, indent}) {
    const [name, decls] = path.get('arguments');
    
    write(`@counter-style ${name.node.value} {\n`);
    indent.inc();
    
    for (const decl of decls.get('elements'))
        traverse(decl);
    
    indent.dec();
    write('}\n');
}
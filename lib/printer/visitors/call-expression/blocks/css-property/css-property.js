export function cssProperty(path, {write, traverse, indent}) {
    const [name, decls] = path.get('arguments');
    
    write(`@property ${name.node.value} {\n`);
    indent.inc();
    
    for (const decl of decls.get('elements'))
        traverse(decl);
    
    indent.dec();
    write('}\n');
}

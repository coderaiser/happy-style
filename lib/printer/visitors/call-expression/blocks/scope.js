export function scope(path, {write, traverse, indent}) {
    const [prelude, rules] = path.get('arguments');
    
    write(`@scope ${prelude.node.value} {\n`);
    indent.inc();
    
    for (const rule of rules.get('elements'))
        traverse(rule);
    
    indent.dec();
    write('}\n');
}

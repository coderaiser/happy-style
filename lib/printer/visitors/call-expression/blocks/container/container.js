export function container(path, {write, traverse, indent}) {
    const [query, rules] = path.get('arguments');
    
    write(`@container ${query.node.value} {\n`);
    indent.inc();
    
    for (const rule of rules.get('elements'))
        traverse(rule);
    
    indent.dec();
    write('}\n');
}

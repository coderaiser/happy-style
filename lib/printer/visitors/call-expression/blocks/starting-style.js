export function startingStyle(path, {write, traverse, indent}) {
    const [rules] = path.get('arguments');
    
    write('@starting-style {\n');
    indent.inc();
    
    for (const rule of rules.get('elements'))
        traverse(rule);
    
    indent.dec();
    write('}\n');
}
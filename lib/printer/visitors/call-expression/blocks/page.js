export function page(path, {write, traverse, indent}) {
    const [selector, children] = path.get('arguments');
    const name = selector.node.value;
    
    write(`@page${name ? ` ${name}` : ''} {\n`);
    indent.inc();
    
    for (const child of children.get('elements'))
        traverse(child);
    
    indent.dec();
    write('}\n');
}

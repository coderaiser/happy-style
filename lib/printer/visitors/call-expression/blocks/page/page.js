export function page(path, {write, traverse, indent}) {
    const [selector, children] = path.get('arguments');
    const name = selector.node.value;
    
    write(`@page${name ? ` ${name}` : ''} {\n`);
    indent.inc();
    
    for (const element of children.get('elements'))
        traverse(element);
    
    indent.dec();
    write('}\n');
}

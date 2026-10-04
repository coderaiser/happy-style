export function selectorList(path, {write, traverse}) {
    const items = path.get('arguments.0.elements');
    
    for (const [i, item] of items.entries()) {
        traverse(item);
        
        if (i < items.length - 1)
            write(', ');
    }
}

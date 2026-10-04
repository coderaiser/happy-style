export function selector(path, {traverse}) {
    for (const child of path.get('arguments.0.elements'))
        traverse(child);
}

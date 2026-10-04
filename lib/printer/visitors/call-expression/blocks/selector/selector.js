export function selector(path, {traverse}) {
    for (const element of path.get('arguments.0.elements'))
        traverse(element);
}

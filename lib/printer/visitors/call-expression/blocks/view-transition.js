export function viewTransition(path, {write, traverse, indent}) {
    write('@view-transition {\n');
    indent.inc();
    
    for (const decl of path.get('arguments.0.elements'))
        traverse(decl);
    
    indent.dec();
    write('}\n');
}

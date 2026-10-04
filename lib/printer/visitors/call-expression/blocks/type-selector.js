export function typeSelector(path, {write}) {
    const [arg] = path.node.arguments;
    write(arg.value);
}

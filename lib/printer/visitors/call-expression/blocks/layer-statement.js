const getName = (element) => element.node.value;

export function layerStatement(path, {write}) {
    const names = path
        .get('arguments')[0]
        .get('elements')
        .map(getName);
    
    write(`@layer ${names.join(', ')};\n`);
}
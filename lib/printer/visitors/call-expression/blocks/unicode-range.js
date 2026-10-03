export function unicodeRange(path, {write}) {
    const {value} = path.get('arguments')[0].node;
    
    write(value);
}

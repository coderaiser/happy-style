export function operator(path, {write}) {
    const {value} = path.get('arguments')[0].node;
    
    // a comma is never preceded by a space, every other operator (`/`, `+`, `-`)
    // is always surrounded by them: `calc(100% - 10px)`
    write(value === ',' ? `${value} ` : ` ${value} `);
}

import {types} from '@putout/babel';

const {isStringLiteral} = types;

export function cssImport(path, {write, traverse}) {
    const [arg] = path.get('arguments');
    
    write('@import ');
    
    if (isStringLiteral(arg)) {
        write(`'`);
        traverse(arg);
        write(`'`);
    } else {
        traverse(arg);
    }
    
    write(';\n');
}

import {writeArguments} from './write-arguments.js';

export function functionValue(path, {write, traverse}) {
    const [name, argsArray] = path.get('arguments');
    
    write(`${name.node.value}(`);
    writeArguments(argsArray.get('elements'), {write, traverse});
    write(')');
}

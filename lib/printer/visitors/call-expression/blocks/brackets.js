import {writeArguments} from './write-arguments.js';

export function brackets(path, printer) {
    const {write} = printer;
    
    write('[');
    writeArguments(path.get('arguments')[0].get('elements'), printer);
    write(']');
}

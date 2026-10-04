import {writeArguments} from './write-arguments.js';

export function parentheses(path, printer) {
    const {write} = printer;
    const elements = path.get('arguments.0.elements');
    
    write('(');
    writeArguments(elements, printer);
    write(')');
}

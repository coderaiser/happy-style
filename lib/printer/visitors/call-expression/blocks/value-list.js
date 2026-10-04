import {writeArguments} from './write-arguments.js';

export function valueList(path, printer) {
    writeArguments(path.get('arguments.0.elements'), printer);
}

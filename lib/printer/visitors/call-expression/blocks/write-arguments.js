import {isOperator} from './is-operator.js';

export function writeArguments(items, {write, traverse}) {
    for (const [i, item] of items.entries()) {
        if (i > 0 && !isOperator(item) && !isOperator(items[i - 1]))
            write(' ');
        
        traverse(item);
    }
}

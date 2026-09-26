import {isOperator} from './is-operator.js';

// the arguments of a function and the items of a value list are joined the same
// way: a single space fills every gap, an operator brings its own spacing
// (`operator(',')` writes `, `, `operator('/')` writes ` / `), so `rgb(255, 0, 0)`
// and `rgb(0 0 0 / 20%)` need no extra hint to be printed correctly
export function writeArguments(items, {write, traverse}) {
    for (const [i, item] of items.entries()) {
        if (i > 0 && !isOperator(item) && !isOperator(items[i - 1]))
            write(' ');
        
        traverse(item);
    }
}

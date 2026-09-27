import * as csstree from 'css-tree';
import {types} from '@putout/babel';
import {createStringLiteral} from '#create-string-literal';

const {
    identifier,
    callExpression,
    expressionStatement,
} = types;

export function convertNamespace(node) {
    const value = csstree.generate(node.prelude);
    
    return expressionStatement(callExpression(identifier('namespace'), [
        createStringLiteral(value),
    ]));
}

import {types} from '@putout/babel';
import {convertNode} from '#parser/visitors';

const {
    identifier,
    callExpression,
    arrayExpression,
    expressionStatement,
} = types;

const convertChild = (comments) => (child) => convertNode(child, comments);

export function convertStartingStyle(node, comments) {
    const rules = node
        .block
        .children
        .toArray()
        .map(convertChild(comments));
    
    return expressionStatement(callExpression(identifier('startingStyle'), [
        arrayExpression(rules),
    ]));
}

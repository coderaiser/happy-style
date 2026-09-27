import * as csstree from 'css-tree';
import {types} from '@putout/babel';
import {convertDeclaration} from '#parser/declaration';
import {createStringLiteral} from '#create-string-literal';

const {
    identifier,
    callExpression,
    arrayExpression,
    expressionStatement,
} = types;

const isDeclaration = (node) => node.type === 'Declaration';

const convertChild = (comments) => (child) => convertDeclaration(child, comments);

export function convertProperty(node, comments) {
    const name = csstree.generate(node.prelude);
    
    const decls = node
        .block
        .children
        .toArray()
        .filter(isDeclaration)
        .map(convertChild(comments));
    
    return expressionStatement(callExpression(identifier('cssProperty'), [
        createStringLiteral(name),
        arrayExpression(decls),
    ]));
}

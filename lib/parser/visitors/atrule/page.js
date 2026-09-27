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

const convertPageDeclaration = (node, comments) => convertDeclaration(node, comments);

const convertMarginBox = (node, comments) => {
    const decls = node
        .block
        .children
        .toArray()
        .filter(isDeclaration)
        .map(convertChild(comments));
    
    return callExpression(identifier('marginBox'), [
        createStringLiteral(node.name),
        arrayExpression(decls),
    ]);
};

const pageChildConvertors = {
    Declaration: convertPageDeclaration,
    Atrule: convertMarginBox,
};

const convertPageChild = (comments) => (child) => {
    const convertor = pageChildConvertors[child.type];
    
    if (!convertor)
        throw Error(`${child.type} not supported yet in @page`);
    
    return convertor(child, comments);
};

const getPageSelector = (prelude) => {
    if (!prelude)
        return '';
    
    return csstree.generate(prelude);
};

export function convertPage(node, comments) {
    const selector = getPageSelector(node.prelude);
    
    const children = node
        .block
        .children
        .toArray()
        .map(convertPageChild(comments));
    
    return expressionStatement(callExpression(identifier('page'), [
        createStringLiteral(selector),
        arrayExpression(children),
    ]));
}

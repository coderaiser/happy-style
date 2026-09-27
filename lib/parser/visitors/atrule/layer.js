import * as csstree from 'css-tree';
import {types} from '@putout/babel';
import {convertNode} from '#parser/visitors';
import {createStringLiteral} from '#create-string-literal';

const {
    identifier,
    callExpression,
    arrayExpression,
    expressionStatement,
} = types;

const convertChild = (comments) => (child) => convertNode(child, comments);

const convertLayerBlock = (node, comments) => {
    const query = csstree.generate(node.prelude);
    
    const rules = node
        .block
        .children
        .toArray()
        .map(convertChild(comments));
    
    return expressionStatement(callExpression(identifier('layer'), [
        createStringLiteral(query),
        arrayExpression(rules),
    ]));
};

const getLayerNames = (prelude) => {
    if (!prelude)
        return [];
    
    const [list] = prelude.children.toArray();
    
    return list.children.toArray();
};

const convertLayerName = (layer) => createStringLiteral(csstree.generate(layer));

const convertLayerStatement = (node) => {
    const names = getLayerNames(node.prelude).map(convertLayerName);
    
    return expressionStatement(callExpression(identifier('layerStatement'), [
        arrayExpression(names),
    ]));
};

export function convertLayer(node, comments) {
    if (!node.block)
        return convertLayerStatement(node);
    
    return convertLayerBlock(node, comments);
}

import * as csstree from 'css-tree';
import {types} from '@putout/babel';
import {createStringLiteral} from '#create-string-literal';

const {
    identifier,
    callExpression,
    numericLiteral,
    arrayExpression,
} = types;

const call = (name, args) => callExpression(identifier(name), args);

const filterWhiteSpace = (node) => node.type !== 'WhiteSpace';

const getUrlValue = (node) => node.value;

const convertIdentifier = (node) => createStringLiteral(node.name);

const convertDimension = (node) => {
    const value = Number(node.value);
    const valueNode = value < 0 ? types.valueToNode(value) : numericLiteral(value);
    
    return call('dimension', [valueNode, createStringLiteral(node.unit)]);
};

const convertPercentage = (node) => {
    const value = Number(node.value);
    const valueNode = value < 0 ? types.valueToNode(value) : numericLiteral(value);
    
    return call('percentage', [valueNode]);
};

const convertHash = (node) => call('color', [
    createStringLiteral(`#${node.value}`),
]);

const convertNumber = (node) => {
    const value = Number(node.value);
    return value < 0 ? types.valueToNode(value) : numericLiteral(value);
};

const convertString = (node) => call('string', [
    createStringLiteral(node.value),
]);

const convertOperator = (node) => call('operator', [
    createStringLiteral(node.value.trim()),
]);

const convertUrl = (node) => call('functionValue', [
    createStringLiteral('url'),
    arrayExpression([
        call('string', [
            createStringLiteral(getUrlValue(node)),
        ]),
    ]),
]);

const convertFunctionArg = convertValueNode;

// a comma is an argument of its own: `rgb(255, 0, 0)` is
// `functionValue('rgb', [255, operator(','), 0, operator(','), 0])` and
// `rgb(0 0 0 / 20%)` is
// `functionValue('rgb', [0, 0, 0, operator('/'), percentage(20)])`, so the
// printer can always join the arguments in one and the same way
const convertFunction = (node) => call('functionValue', [
    createStringLiteral(node.name),
    arrayExpression(
        node.children
            .toArray()
            .filter(filterWhiteSpace)
            .map(convertFunctionArg),
    ),
]);

const childrenOf = (node) => node.children
    .toArray()
    .filter(filterWhiteSpace);

const convertBrackets = (node) => call('brackets', [
    arrayExpression(
        childrenOf(node).map(convertFunctionArg),
    ),
]);

const convertParentheses = (node) => call('parentheses', [
    arrayExpression(
        childrenOf(node).map(convertFunctionArg),
    ),
]);

// a UnicodeRange has no children to walk — `U+0-7F` is one token — so it stays a
// single string, unlike `Brackets` and `Parentheses` whose insides a rule may want
// to reach
const convertUnicodeRange = (node) => call('unicodeRange', [
    createStringLiteral(node.value),
]);

const valueConvertors = {
    Identifier: convertIdentifier,
    Dimension: convertDimension,
    Percentage: convertPercentage,
    Hash: convertHash,
    Number: convertNumber,
    String: convertString,
    Url: convertUrl,
    Function: convertFunction,
    Operator: convertOperator,
    Brackets: convertBrackets,
    Parentheses: convertParentheses,
    UnicodeRange: convertUnicodeRange,
};

function convertValueNode(node) {
    const {type} = node;
    const convertor = valueConvertors[type];
    
    if (convertor)
        return convertor(node);
    
    return createStringLiteral(csstree.generate(node));
}

export function convertValue(valueNode) {
    if (valueNode.type === 'Raw')
        return createStringLiteral(valueNode.value.trim());
    
    const children = valueNode.children
        .toArray()
        .filter(filterWhiteSpace);
    
    if (children.length === 1)
        return convertValueNode(children[0]);
    
    return call('valueList', [
        arrayExpression(children.map(convertFunctionArg)),
    ]);
}

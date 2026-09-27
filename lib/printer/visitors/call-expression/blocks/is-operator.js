import {types} from '@putout/babel';

const {isCallExpression} = types;

const hasOperatorCallee = (node) => node.callee.name === 'operator';

export const isOperator = (item) => {
    if (!isCallExpression(item.node))
        return false;
    
    return hasOperatorCallee(item.node);
};

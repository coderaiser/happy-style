import {createTest as createPutoutTest} from '@putout/test';
import {parse} from '@putout/babel';
import {convert} from '../bin/convert.js';

const noop = () => {};

const lint = (source) => {
    const code = convert(source);
    
    parse(code);
    
    return {
        code,
        places: [],
    };
};

export const createTest = (url, options) => createPutoutTest(url, {
    extension: 'css',
    extensionFix: 'js',
    lint,
    plugins: [
        ['css', {
            report: noop,
            replace: noop,
        }],
    ],
    ...options,
});

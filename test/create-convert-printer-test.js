import {createTest as createPutoutTest} from '@putout/test';
import {convert} from '../bin/convert.js';

const noop = () => {};

const lint = (source) => {
    const code = convert(source);
    
    return {
        code,
        places: [],
    };
};

export const createTest = (url, options) => createPutoutTest(url, {
    extension: 'js',
    extensionFix: 'css',
    lint,
    plugins: [['css', {
        report: noop,
        replace: noop,
    }]],
    ...options,
});

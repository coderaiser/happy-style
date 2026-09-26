import {createTest as createPutoutTest} from '@putout/test';
import {convertCssToJs, convertJsToCss} from '#happy-style';
import {canonical} from './canonical.js';

const noop = () => {};

const roundtrip = (source) => canonical(convertJsToCss(convertCssToJs(source)));

const lint = (source) => {
    const code = roundtrip(source);
    
    return {
        code,
        places: [],
    };
};

export const createTest = (url, options) => createPutoutTest(url, {
    extension: 'css',
    extensionFix: 'css',
    lint,
    plugins: [
        ['css', {
            report: noop,
            replace: noop,
        }],
    ],
    ...options,
});

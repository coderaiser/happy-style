import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: string', (t) => {
    t.transform('string');
    t.end();
});

test('happy-style: printer: string: string-escaped', (t) => {
    t.transform('string-escaped');
    t.end();
});

test('happy-style: printer: string: string-backslash', (t) => {
    t.transform('string-backslash');
    t.end();
});

test('happy-style: printer: string: url-quoted', (t) => {
    t.transform('url-quoted');
    t.end();
});

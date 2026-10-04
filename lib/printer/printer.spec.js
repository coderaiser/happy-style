import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: comment', (t) => {
    t.transform('comment');
    t.end();
});

test('happy-style: printer: brackets', (t) => {
    t.transform('brackets');
    t.end();
});

test('happy-style: printer: parentheses', (t) => {
    t.transform('parentheses');
    t.end();
});

test('happy-style: printer: unicode-range', (t) => {
    t.transform('unicode-range');
    t.end();
});

import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: function-value', (t) => {
    t.transform('function-value');
    t.end();
});

test('happy-style: printer: function-value: function-value-space', (t) => {
    t.transform('function-value-space');
    t.end();
});

test('happy-style: printer: function-value: function-space', (t) => {
    t.transform('function-space');
    t.end();
});

test('happy-style: printer: function-value: function-mixed', (t) => {
    t.transform('function-mixed');
    t.end();
});

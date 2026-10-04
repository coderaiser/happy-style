import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: rule', (t) => {
    t.transform('rule');
    t.end();
});

test('happy-style: printer: rule: multi-rule', (t) => {
    t.transform('multi-rule');
    t.end();
});

test('happy-style: printer: rule: nested-rule', (t) => {
    t.transform('nested-rule');
    t.end();
});

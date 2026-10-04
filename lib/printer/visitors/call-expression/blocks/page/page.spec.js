import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: page', (t) => {
    t.transform('page');
    t.end();
});

test('happy-style: printer: page: page-plain', (t) => {
    t.transform('page-plain');
    t.end();
});

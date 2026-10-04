import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: selector-list', (t) => {
    t.transform('selector-list');
    t.end();
});

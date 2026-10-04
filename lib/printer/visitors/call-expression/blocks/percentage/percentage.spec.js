import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: percentage: percentage-value', (t) => {
    t.transform('percentage-value');
    t.end();
});

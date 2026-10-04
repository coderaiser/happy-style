import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: color: color-value', (t) => {
    t.transform('color-value');
    t.end();
});

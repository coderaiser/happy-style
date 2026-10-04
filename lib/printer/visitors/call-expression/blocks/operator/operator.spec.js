import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: operator', (t) => {
    t.transform('operator');
    t.end();
});

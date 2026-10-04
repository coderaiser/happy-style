import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: value-list: value-list-operator', (t) => {
    t.transform('value-list-operator');
    t.end();
});

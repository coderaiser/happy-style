import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: supports', (t) => {
    t.transform('supports');
    t.end();
});

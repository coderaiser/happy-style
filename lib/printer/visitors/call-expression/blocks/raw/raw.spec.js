import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: raw', (t) => {
    t.transform('raw');
    t.end();
});

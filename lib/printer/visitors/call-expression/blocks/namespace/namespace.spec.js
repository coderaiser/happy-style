import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: namespace', (t) => {
    t.transform('namespace');
    t.end();
});

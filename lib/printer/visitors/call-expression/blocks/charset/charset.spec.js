import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: charset', (t) => {
    t.transform('charset');
    t.end();
});

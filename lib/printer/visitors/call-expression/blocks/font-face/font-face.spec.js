import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: font-face', (t) => {
    t.transform('font-face');
    t.end();
});

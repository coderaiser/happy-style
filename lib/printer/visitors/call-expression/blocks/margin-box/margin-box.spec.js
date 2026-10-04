import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: margin-box', (t) => {
    t.transform('margin-box');
    t.end();
});

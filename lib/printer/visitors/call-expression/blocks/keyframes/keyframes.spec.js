import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: keyframes', (t) => {
    t.transform('keyframes');
    t.end();
});

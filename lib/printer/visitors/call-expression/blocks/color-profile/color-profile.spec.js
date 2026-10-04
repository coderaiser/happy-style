import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: color-profile', (t) => {
    t.transform('color-profile');
    t.end();
});

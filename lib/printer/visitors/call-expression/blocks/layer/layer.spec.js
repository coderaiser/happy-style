import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: layer', (t) => {
    t.transform('layer');
    t.end();
});

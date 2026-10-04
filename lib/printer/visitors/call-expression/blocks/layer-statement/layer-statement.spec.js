import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: layer-statement', (t) => {
    t.transform('layer-statement');
    t.end();
});

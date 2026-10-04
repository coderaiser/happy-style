import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: id-selector', (t) => {
    t.transform('id-selector');
    t.end();
});

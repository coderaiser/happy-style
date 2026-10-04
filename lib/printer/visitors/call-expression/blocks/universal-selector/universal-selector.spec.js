import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: universal-selector', (t) => {
    t.transform('universal-selector');
    t.end();
});

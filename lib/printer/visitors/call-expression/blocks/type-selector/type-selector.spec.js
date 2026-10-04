import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: type-selector', (t) => {
    t.transform('type-selector');
    t.end();
});

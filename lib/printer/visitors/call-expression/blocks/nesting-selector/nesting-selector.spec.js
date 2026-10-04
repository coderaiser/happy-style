import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: nesting-selector', (t) => {
    t.transform('nesting-selector');
    t.end();
});

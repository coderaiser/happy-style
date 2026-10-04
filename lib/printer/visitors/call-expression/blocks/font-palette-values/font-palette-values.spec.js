import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: font-palette-values', (t) => {
    t.transform('font-palette-values');
    t.end();
});

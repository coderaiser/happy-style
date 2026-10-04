import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: css-property: property', (t) => {
    t.transform('property');
    t.end();
});

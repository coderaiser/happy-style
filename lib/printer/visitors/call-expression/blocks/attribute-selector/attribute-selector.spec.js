import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: attribute-selector', (t) => {
    t.transform('attribute-selector');
    t.end();
});

test('happy-style: printer: attribute-selector: attribute-bare', (t) => {
    t.transform('attribute-bare');
    t.end();
});

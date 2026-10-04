import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: pseudo-element-selector: pseudo-element', (t) => {
    t.transform('pseudo-element');
    t.end();
});

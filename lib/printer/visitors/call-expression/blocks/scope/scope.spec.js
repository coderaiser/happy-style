import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: scope', (t) => {
    t.transform('scope');
    t.end();
});

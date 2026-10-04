import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: starting-style', (t) => {
    t.transform('starting-style');
    t.end();
});

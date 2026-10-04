import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: counter-style', (t) => {
    t.transform('counter-style');
    t.end();
});

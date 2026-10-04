import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: combinator', (t) => {
    t.transform('combinator');
    t.end();
});

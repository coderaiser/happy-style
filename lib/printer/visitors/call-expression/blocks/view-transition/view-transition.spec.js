import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: view-transition', (t) => {
    t.transform('view-transition');
    t.end();
});

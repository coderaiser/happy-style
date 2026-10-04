import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: media', (t) => {
    t.transform('media');
    t.end();
});

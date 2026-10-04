import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: declaration', (t) => {
    t.transform('declaration');
    t.end();
});

test('happy-style: printer: declaration: declaration-no-important', (t) => {
    t.transform('declaration-no-important');
    t.end();
});

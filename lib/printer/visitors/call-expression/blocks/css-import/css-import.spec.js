import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: css-import: import', (t) => {
    t.transform('import');
    t.end();
});

test('happy-style: printer: css-import: import-url', (t) => {
    t.transform('import-url');
    t.end();
});

import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: pseudo-class-selector: pseudo-class', (t) => {
    t.transform('pseudo-class');
    t.end();
});

test('happy-style: printer: pseudo-class-selector: pseudo-class-arg', (t) => {
    t.transform('pseudo-class-arg');
    t.end();
});

test('happy-style: printer: pseudo-class-selector: pseudo-class-raw', (t) => {
    t.transform('pseudo-class-raw');
    t.end();
});

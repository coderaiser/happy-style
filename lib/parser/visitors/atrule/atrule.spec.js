import {createTest} from '#parser/test';

const {test} = createTest(import.meta.url);

test('happy-style: parser: atrule: import', (t) => {
    t.transform('import');
    t.end();
});

test('happy-style: parser: atrule: import-url', (t) => {
    t.transform('import-url');
    t.end();
});

test('happy-style: parser: atrule: charset', (t) => {
    t.transform('charset');
    t.end();
});

test('happy-style: parser: atrule: media', (t) => {
    t.transform('media');
    t.end();
});

test('happy-style: parser: atrule: keyframes', (t) => {
    t.transform('keyframes');
    t.end();
});

test('happy-style: parser: atrule: font-face', (t) => {
    t.transform('font-face');
    t.end();
});

test('happy-style: parser: atrule: supports', (t) => {
    t.transform('supports');
    t.end();
});

test('happy-style: parser: atrule: layer', (t) => {
    t.transform('layer');
    t.end();
});

test('happy-style: parser: atrule: layer-statement', (t) => {
    t.transform('layer-statement');
    t.end();
});

test('happy-style: parser: atrule: layer-anonymous', (t) => {
    t.transform('layer-anonymous');
    t.end();
});

test('happy-style: parser: atrule: keyframes-percentage', (t) => {
    t.transform('keyframes-percentage');
    t.end();
});

test('happy-style: parser: atrule: keyframes-string-name', (t) => {
    t.transform('keyframes-string-name');
    t.end();
});

test('happy-style: parser: atrule: font-face-unicode-range', (t) => {
    t.transform('font-face-unicode-range');
    t.end();
});

test('happy-style: parser: atrule: import-comment', (t) => {
    t.transform('import-comment');
    t.end();
});

test('happy-style: parser: atrule: counter-style', (t) => {
    t.transform('counter-style');
    t.end();
});

test('happy-style: parser: atrule: property', (t) => {
    t.transform('property');
    t.end();
});

test('happy-style: parser: atrule: scope', (t) => {
    t.transform('scope');
    t.end();
});

test('happy-style: parser: atrule: starting-style', (t) => {
    t.transform('starting-style');
    t.end();
});

test('happy-style: parser: atrule: container', (t) => {
    t.transform('container');
    t.end();
});

test('happy-style: parser: atrule: container-unnamed', (t) => {
    t.transform('container-unnamed');
    t.end();
});

test('happy-style: parser: atrule: view-transition', (t) => {
    t.transform('view-transition');
    t.end();
});

test('happy-style: parser: atrule: font-palette-values', (t) => {
    t.transform('font-palette-values');
    t.end();
});

test('happy-style: parser: atrule: import-raw', (t) => {
    t.transform('import-raw');
    t.end();
});

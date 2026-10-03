import {createTest} from '#parser/test';

const {test} = createTest(import.meta.url);

test('happy-style: parser: value: number-negative', (t) => {
    t.transform('number-negative');
    t.end();
});

test('happy-style: parser: value: number-positive', (t) => {
    t.transform('number-positive');
    t.end();
});

test('happy-style: parser: value: percentage-positive', (t) => {
    t.transform('percentage-positive');
    t.end();
});

test('happy-style: parser: value: percentage-negative', (t) => {
    t.transform('percentage-negative');
    t.end();
});

test('happy-style: parser: value: number-bare-negative', (t) => {
    t.transform('number-bare-negative');
    t.end();
});

test('happy-style: parser: value: function-calc', (t) => {
    t.transform('function-calc');
    t.end();
});

test('happy-style: parser: value: string', (t) => {
    t.transform('string');
    t.end();
});

test('happy-style: parser: value: string-function', (t) => {
    t.transform('string-function');
    t.end();
});

test('happy-style: parser: value: string-backslash', (t) => {
    t.transform('string-backslash');
    t.end();
});

test('happy-style: parser: value: url-quoted', (t) => {
    t.transform('url-quoted');
    t.end();
});

test('happy-style: parser: value: function-space', (t) => {
    t.transform('function-space');
    t.end();
});

test('happy-style: parser: value: function-mixed', (t) => {
    t.transform('function-mixed');
    t.end();
});

test('happy-style: parser: value: function-mixed-color-mix', (t) => {
    t.transform('function-mixed-color-mix');
    t.end();
});

/**
 * The three value node types that had no convertor and fell through to
 * `createStringLiteral(csstree.generate(node))` — a bare, opaque string.
 *
 * They round-tripped, which is exactly why they went unnoticed: the printer emitted
 * the same text back. What was lost is that a rule cannot see **inside** them, so
 * `grid-template-columns: [full-start] …` was one string to anything matching on it,
 * and a rename of a line name was not expressible.
 */
test('happy-style: parser: value: brackets', (t) => {
    t.transform('brackets');
    t.end();
});

test('happy-style: parser: value: parentheses', (t) => {
    t.transform('parentheses');
    t.end();
});

test('happy-style: parser: value: unicode-range', (t) => {
    t.transform('unicode-range');
    t.end();
});

/**
 * The fallback for a node type with no convertor, which is the **only** thing
 * still reaching it.
 *
 * Worth its own fixture because the three types above were its last everyday
 * callers: once `Brackets`, `Parentheses` and `UnicodeRange` stopped falling
 * through, the generic `createStringLiteral(csstree.generate(node))` had no case
 * left in the corpus and would have read as dead code. It is not — `var(--gap, )`
 * puts a bare `Raw` inside a function argument, and a rule that meets one still
 * gets a string.
 */
test('happy-style: parser: value: function-raw-fallback', (t) => {
    t.transform('function-raw-fallback');
    t.end();
});

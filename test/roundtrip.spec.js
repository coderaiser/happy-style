import {createTest} from './create-roundtrip-test.js';

const {test} = createTest(import.meta.url);

test(`happy-style: roundtrip: rule`, (t) => {
    t.transform('rule');
    t.end();
});

test(`happy-style: roundtrip: rule-list`, (t) => {
    t.transform('rule-list');
    t.end();
});

test(`happy-style: roundtrip: value-list`, (t) => {
    t.transform('value-list');
    t.end();
});

test(`happy-style: roundtrip: percentage`, (t) => {
    t.transform('percentage');
    t.end();
});

test(`happy-style: roundtrip: color-hash`, (t) => {
    t.transform('color-hash');
    t.end();
});

test(`happy-style: roundtrip: important`, (t) => {
    t.transform('important');
    t.end();
});

test(`happy-style: roundtrip: calc`, (t) => {
    t.transform('calc');
    t.end();
});

test(`happy-style: roundtrip: url-data`, (t) => {
    t.transform('url-data');
    t.end();
});

test(`happy-style: roundtrip: font-face`, (t) => {
    t.transform('font-face');
    t.end();
});

test(`happy-style: roundtrip: charset`, (t) => {
    t.transform('charset');
    t.end();
});

test(`happy-style: roundtrip: media`, (t) => {
    t.transform('media');
    t.end();
});

test(`happy-style: roundtrip: supports`, (t) => {
    t.transform('supports');
    t.end();
});

test(`happy-style: roundtrip: layer`, (t) => {
    t.transform('layer');
    t.end();
});

test(`happy-style: roundtrip: keyframes`, (t) => {
    t.transform('keyframes');
    t.end();
});

test(`happy-style: roundtrip: keyframes-percentage`, (t) => {
    t.transform('keyframes-percentage');
    t.end();
});

test(`happy-style: roundtrip: grid-areas`, (t) => {
    t.transform('grid-areas');
    t.end();
});

test(`happy-style: roundtrip: unicode-range`, (t) => {
    t.transform('unicode-range');
    t.end();
});

test(`happy-style: roundtrip: attribute`, (t) => {
    t.transform('attribute');
    t.end();
});

test(`happy-style: roundtrip: pseudo-element`, (t) => {
    t.transform('pseudo-element');
    t.end();
});

test(`happy-style: roundtrip: custom-property`, (t) => {
    t.transform('custom-property');
    t.end();
});

test(`happy-style: roundtrip: string`, (t) => {
    t.transform('string');
    t.end();
});

test(`happy-style: roundtrip: vendor-prefixed-property`, (t) => {
    t.transform('vendor-prefixed-property');
    t.end();
});

test(`happy-style: roundtrip: negative-dimension`, (t) => {
    t.transform('negative-dimension');
    t.end();
});

test(`happy-style: roundtrip: negative-percentage`, (t) => {
    t.transform('negative-percentage');
    t.end();
});

test(`happy-style: roundtrip: negative-dimension-list`, (t) => {
    t.transform('negative-dimension-list');
    t.end();
});

test(`happy-style: roundtrip: negative-dimension-in-function`, (t) => {
    t.transform('negative-dimension-in-function');
    t.end();
});

test(`happy-style: roundtrip: nesting-selector`, (t) => {
    t.transform('nesting-selector');
    t.end();
});

test(`happy-style: roundtrip: pseudo-class-nth`, (t) => {
    t.transform('pseudo-class-nth');
    t.end();
});

test(`happy-style: roundtrip: pseudo-class-nth-keyword`, (t) => {
    t.transform('pseudo-class-nth-keyword');
    t.end();
});

test(`happy-style: roundtrip: pseudo-class-identifier`, (t) => {
    t.transform('pseudo-class-identifier');
    t.end();
});

test(`happy-style: roundtrip: pseudo-class-empty`, (t) => {
    t.transform('pseudo-class-empty');
    t.end();
});

test(`happy-style: roundtrip: function-space`, (t) => {
    t.transform('function-space');
    t.end();
});

test(`happy-style: roundtrip: function-comma`, (t) => {
    t.transform('function-comma');
    t.end();
});

test(`happy-style: roundtrip: function-space-in-value-list`, (t) => {
    t.transform('function-space-in-value-list');
    t.end();
});

test(`happy-style: roundtrip: function-mixed`, (t) => {
    t.transform('function-mixed');
    t.end();
});

test(`happy-style: roundtrip: function-mixed-color-mix`, (t) => {
    t.transform('function-mixed-color-mix');
    t.end();
});

test(`happy-style: roundtrip: function-mixed-conic`, (t) => {
    t.transform('function-mixed-conic');
    t.end();
});

test(`happy-style: roundtrip: value-list-comma`, (t) => {
    t.transform('value-list-comma');
    t.end();
});

test(`happy-style: roundtrip: value-list-operator`, (t) => {
    t.transform('value-list-operator');
    t.end();
});

test(`happy-style: roundtrip: container`, (t) => {
    t.transform('container');
    t.end();
});

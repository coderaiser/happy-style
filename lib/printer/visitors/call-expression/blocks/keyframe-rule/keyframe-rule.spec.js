import {createTest} from '#printer/test';

const {test} = createTest(import.meta.url);

test('happy-style: printer: keyframe-rule: keyframe-percentage', (t) => {
    t.transform('keyframe-percentage');
    t.end();
});

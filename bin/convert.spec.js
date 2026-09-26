import {test} from 'supertape';
import {montag} from 'montag';
import {__css_name, toJS} from '@putout/operator-json';
import {createTest as createParserTest} from '#convert/test/parser';
import {createTest as createPrinterTest} from '#convert/test/printer';
import {convert} from './convert.js';

const parserTest = createParserTest(import.meta.url);
const printerTest = createPrinterTest(import.meta.url);

parserTest.test('happy-style: bin: convert: css -> js', (t) => {
    t.transform('convert');
    t.end();
});

printerTest.test('happy-style: bin: convert: js -> css', (t) => {
    t.transform('convert-js');
    t.end();
});

test('happy-style: bin: convert: json -> css', (t) => {
    const source = toJS(montag`
        [
            rule(
                selector([classSelector('button')]),
                [declaration('color', 'red')],
            ),
        ];
    `, __css_name);
    
    const expected = montag`
        .button {
            color: red;
        }
    `;
    
    const result = convert(source);
    
    t.equal(result, `${expected}\n`);
    t.end();
});

test('happy-style: bin: convert: empty -> empty array', (t) => {
    const result = convert('');
    
    t.equal(result, '[];\n');
    t.end();
});

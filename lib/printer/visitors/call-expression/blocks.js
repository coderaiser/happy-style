import {rule} from './blocks/rule.js';
import {selector} from './blocks/selector.js';
import {selectorList} from './blocks/selector-list.js';
import {classSelector} from './blocks/class-selector.js';
import {idSelector} from './blocks/id-selector.js';
import {typeSelector} from './blocks/type-selector.js';
import {universalSelector} from './blocks/universal-selector.js';
import {pseudoClassSelector} from './blocks/pseudo-class-selector.js';
import {pseudoElementSelector} from './blocks/pseudo-element-selector.js';
import {attributeSelector} from './blocks/attribute-selector.js';
import {combinator} from './blocks/combinator.js';
import {nestingSelector} from './blocks/nesting-selector.js';
import {declaration} from './blocks/declaration.js';
import {dimension} from './blocks/dimension.js';
import {percentage} from './blocks/percentage.js';
import {color} from './blocks/color.js';
import {valueList} from './blocks/value-list.js';
import {functionValue} from './blocks/function-value.js';
import {operator} from './blocks/operator.js';
import {string} from './blocks/string.js';
import {cssImport} from './blocks/css-import.js';
import {charset} from './blocks/charset.js';
import {media} from './blocks/media.js';
import {supports} from './blocks/supports.js';
import {layer} from './blocks/layer.js';
import {layerStatement} from './blocks/layer-statement.js';
import {counterStyle} from './blocks/counter-style.js';
import {cssProperty} from './blocks/css-property.js';
import {scope} from './blocks/scope.js';
import {startingStyle} from './blocks/starting-style.js';
import {container} from './blocks/container.js';
import {viewTransition} from './blocks/view-transition.js';
import {fontPaletteValues} from './blocks/font-palette-values.js';
import {colorProfile} from './blocks/color-profile.js';
import {namespace} from './blocks/namespace.js';
import {page} from './blocks/page.js';
import {marginBox} from './blocks/margin-box.js';
import {fontFace} from './blocks/font-face.js';
import {keyframes} from './blocks/keyframes.js';
import {keyframeRule} from './blocks/keyframe-rule.js';
import {raw} from './blocks/raw.js';
import {brackets} from './blocks/brackets.js';
import {parentheses} from './blocks/parentheses.js';
import {unicodeRange} from './blocks/unicode-range.js';

export const blocks = {
    rule,
    selector,
    selectorList,
    classSelector,
    idSelector,
    typeSelector,
    universalSelector,
    pseudoClassSelector,
    pseudoElementSelector,
    attributeSelector,
    combinator,
    nestingSelector,
    declaration,
    dimension,
    percentage,
    color,
    valueList,
    functionValue,
    operator,
    string,
    cssImport,
    charset,
    media,
    supports,
    layer,
    layerStatement,
    counterStyle,
    cssProperty,
    scope,
    startingStyle,
    container,
    viewTransition,
    fontPaletteValues,
    colorProfile,
    namespace,
    page,
    marginBox,
    fontFace,
    keyframes,
    keyframeRule,
    raw,
    brackets,
    parentheses,
    unicodeRange,
};

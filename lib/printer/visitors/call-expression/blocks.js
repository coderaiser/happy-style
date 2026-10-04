import {rule} from './blocks/rule/rule.js';
import {selector} from './blocks/selector/selector.js';
import {selectorList} from './blocks/selector-list/selector-list.js';
import {classSelector} from './blocks/class-selector/class-selector.js';
import {idSelector} from './blocks/id-selector/id-selector.js';
import {typeSelector} from './blocks/type-selector/type-selector.js';
import {universalSelector} from './blocks/universal-selector/universal-selector.js';
import {pseudoClassSelector} from './blocks/pseudo-class-selector/pseudo-class-selector.js';
import {pseudoElementSelector} from './blocks/pseudo-element-selector/pseudo-element-selector.js';
import {attributeSelector} from './blocks/attribute-selector/attribute-selector.js';
import {combinator} from './blocks/combinator/combinator.js';
import {nestingSelector} from './blocks/nesting-selector/nesting-selector.js';
import {declaration} from './blocks/declaration/declaration.js';
import {dimension} from './blocks/dimension/dimension.js';
import {percentage} from './blocks/percentage/percentage.js';
import {color} from './blocks/color/color.js';
import {valueList} from './blocks/value-list/value-list.js';
import {functionValue} from './blocks/function-value/function-value.js';
import {operator} from './blocks/operator/operator.js';
import {string} from './blocks/string/string.js';
import {cssImport} from './blocks/css-import/css-import.js';
import {charset} from './blocks/charset/charset.js';
import {media} from './blocks/media/media.js';
import {supports} from './blocks/supports/supports.js';
import {layer} from './blocks/layer/layer.js';
import {layerStatement} from './blocks/layer-statement/layer-statement.js';
import {counterStyle} from './blocks/counter-style/counter-style.js';
import {cssProperty} from './blocks/css-property/css-property.js';
import {scope} from './blocks/scope/scope.js';
import {startingStyle} from './blocks/starting-style/starting-style.js';
import {container} from './blocks/container/container.js';
import {viewTransition} from './blocks/view-transition/view-transition.js';
import {fontPaletteValues} from './blocks/font-palette-values/font-palette-values.js';
import {colorProfile} from './blocks/color-profile/color-profile.js';
import {namespace} from './blocks/namespace/namespace.js';
import {page} from './blocks/page/page.js';
import {marginBox} from './blocks/margin-box/margin-box.js';
import {fontFace} from './blocks/font-face/font-face.js';
import {keyframes} from './blocks/keyframes/keyframes.js';
import {keyframeRule} from './blocks/keyframe-rule/keyframe-rule.js';
import {raw} from './blocks/raw/raw.js';
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

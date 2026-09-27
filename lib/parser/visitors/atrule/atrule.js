import {getLeadingComment} from '#parser/leading-comment';
import {convertImport} from './import.js';
import {convertCharset} from './charset.js';
import {convertMedia} from './media.js';
import {convertSupports} from './supports.js';
import {convertLayer} from './layer.js';
import {convertCounterStyle} from './counter-style.js';
import {convertProperty} from './property.js';
import {convertScope} from './scope.js';
import {convertStartingStyle} from './starting-style.js';
import {convertContainer} from './container.js';
import {convertViewTransition} from './view-transition.js';
import {convertFontPaletteValues} from './font-palette-values.js';
import {convertColorProfile} from './color-profile.js';
import {convertKeyframes} from './keyframes.js';
import {convertFontFace} from './font-face.js';

const atruleConvertors = {
    'import': convertImport,
    'charset': convertCharset,
    'media': convertMedia,
    'supports': convertSupports,
    'layer': convertLayer,
    'counter-style': convertCounterStyle,
    'property': convertProperty,
    'scope': convertScope,
    'starting-style': convertStartingStyle,
    'container': convertContainer,
    'view-transition': convertViewTransition,
    'font-palette-values': convertFontPaletteValues,
    'color-profile': convertColorProfile,
    'keyframes': convertKeyframes,
    'font-face': convertFontFace,
};

const buildLeadingComments = (comment) => [{
    type: 'CommentBlock',
    value: ` ${comment.value} `,
}];

export function convertAtrule(node, comments) {
    const {name} = node;
    
    if (!atruleConvertors[name])
        throw Error(`@${name} not supported yet`);
    
    const expr = atruleConvertors[name](node, comments);
    const comment = getLeadingComment(comments, node.loc.start.offset);
    
    if (comment) {
        const callNode = expr.expression;
        callNode.leadingComments = buildLeadingComments(comment);
    }
    
    return expr;
}

/**
 * Created by zyg on 15/12/24.
 */
var R = require('../resource');
var sprite = require('../../sprite');

var endBg = sprite.getIm({
    img: R.endSign,
    'position.set':[320,0],
    'anchor.set':[0.5,0]
});

module.exports = endBg;
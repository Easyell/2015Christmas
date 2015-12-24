/**
 * Created by zyg on 15/12/24.
 */
var R = require('../resource');
var sprite = require('../../sprite');

var endBg = sprite.getIm({
    img: R.endBg,
    'position.set':[0,1004],
    'anchor.set':[0,1]
});

module.exports = endBg;
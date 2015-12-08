/**
 * Created by zyg on 15/12/3.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var oldman = sprite.getIm({
    img: R.oldman,
    'position.set':[220,909],
    'scale.x': 0.3,
    'scale.y': 0.3,
    'anchor.set': [0, 1]
});


module.exports = oldman;
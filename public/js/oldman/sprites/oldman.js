/**
 * Created by zyg on 15/12/3.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var oldman = sprite.getIm({
    img: R.oldman,
    'position.set':[100,200],
    'scale.x': 0.3,
    'scale.y': 0.3,
    'anchor.set': [0.5, 0.5]
});


module.exports = oldman;
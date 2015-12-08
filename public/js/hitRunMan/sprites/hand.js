/**
 * Created by zyg on 15/12/8.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var hand = sprite.getIm({
    img: R.hand,
    'position.set':[640,450],
    'scale.x': 0.5,
    'scale.y': 0.5,
    'anchor.set': [1, 0.5]
});


module.exports = hand;
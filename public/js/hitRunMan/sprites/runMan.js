/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var runMan = sprite.getMc({
    maxFrame:4,
    preFix:'runMan',
    'position.set':[320,400],
    'scale.x': 0.5,
    'scale.y': 0.5,
    'anchor.set': [0.5, 0.5],
    'animationSpeed':0.15,
    'loop':true
});


module.exports = runMan;
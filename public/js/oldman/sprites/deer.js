/**
 * Created by zyg on 15/12/3.
 */
var sprite = require('./../../sprite');

var deer = sprite.getMc({
    maxFrame: 4,
    preFix: 'deer',
    'position.set': [130, 450],
    'animationSpeed':0.1,
    'loop': true,
    'scale.x': 0.3,
    'scale.y': 0.3
});

module.exports = deer;
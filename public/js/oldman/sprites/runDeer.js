/**
 * Created by zyg on 15/12/7.
 */
var sprite = require('../../sprite');

var deer = sprite.getMc({
    maxFrame: 3,
    preFix: 'runDeer',
    'position.set': [330, 150],
    'animationSpeed':0.1,
    'loop': true,
    'scale.x': 0.3,
    'scale.y': 0.3
});

module.exports = deer;
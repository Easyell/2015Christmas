/**
 * Created by zyg on 15/12/20.
 */
var sprite = require('../../sprite');

var gold = sprite.getMc({
    maxFrame:4,
    preFix:'gold',
    'position.set':[535,400],
    'anchor.set':[0.5,0.5],
    'scale.set':[0.5,0.5],
    'animationSpeed':0.1
});

gold.play();

gold.visible = false;
gold.interactive = true;
gold.init = function () {
    this.visible = false;
}
module.exports = gold;
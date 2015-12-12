/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');
var R = require('../resource');


var foot = require('./foot');

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
runMan.play();
//固定数值
runMan.speed = 1.5;

runMan.distance = 10;

runMan.render = function () {
    this.distance = (this.speed - foot.speed ) * foot.renderMaxNum;
};

module.exports = runMan;
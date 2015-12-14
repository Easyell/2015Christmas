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
runMan.speed = 10;

var initialY = 400;

//根据距离差，近大远小
runMan.setMode = function (distance) {
    if(distance>=600) {
        distance = 600;
    }
    var s = 0.9-distance /1000;
    this.scale.set(s,s);
    this.y = initialY - distance/10;
};

runMan.render = function () {
};

module.exports = runMan;
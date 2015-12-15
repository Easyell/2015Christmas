/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');

var hitLevel = require('./hitLevel');

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

runMan.canHit = false;


var initialY = 400;

var touchDurationStamp = 0;
var touchOn = false;

runMan.interactive = true;
runMan.on('touchstart', function () {
    touchDurationStamp = Date.now();
    touchOn = true;
    hitLevel.hitScore = 0;
});
runMan.on('touchend', function () {
    touchDurationStamp = Date.now() - touchDurationStamp;
    touchOn = false;
    hitLevel.hitScore = 0;
});

//根据距离差，近大远小
runMan.setMode = function (distance) {
    distance = distance * 10;

    if(distance>=600) {
        distance = 600;
    }
    var s = 0.9-distance /1000;
    this.scale.set(s,s);
    this.y = initialY - distance/10;
};

runMan.render = function () {
    if(this.canHit && touchOn){
        hitLevel.visible = true;

        runMan.parent.addChild(hitLevel);
        hitLevel.x = this.x - hitLevel.radius * hitLevel.scale.x;
        hitLevel.y = this.y - hitLevel.radius * hitLevel.scale.y / 2;

        hitLevel.hitScore++;
        hitLevel.score =
        hitLevel.scale.x = 1 + hitLevel.hitScore * 0.05;
        hitLevel.scale.y = 1 + hitLevel.hitScore * 0.05;
    }else{
        hitLevel.visible = false;
    }
};

module.exports = runMan;
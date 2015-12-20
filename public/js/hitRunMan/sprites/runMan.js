/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');
var spriteTools = require('./../../spriteTools');

var flyFist = require('./flyFist');
var fist = require('./fist');

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

    console.log('score:',hitLevel.hitScore);
    if(!hitLevel.visible){
    }else{
        fist();
        runMan.flyToSkyBefore();
    }

    hitLevel.hitScore = 0;


});

runMan.fly = false;
runMan.flyToSkyBefore = function () {
    this.direction = spriteTools.makeIdentity([this.x,this.y]);
    console.log(this.direction);
    runMan.speed = 20;
    runMan.fly = true;
}
runMan.flyToSky = function () {

    this.x -= this.direction[0] * this.speed;
    this.y -= this.direction[1] * this.speed;
    this.rotation += 0.1;
    this.scale.x -= 0.015;
    this.scale.y -= 0.015;

    //游戏结束
    if(this.x < 0 && this.y <0){
        runMan.out = true;

    }
}

//根据距离差，近大远小
//最后消失在地平线上
runMan.setMode = function (distance) {
    if(this.fly){
        return ;
    }

    distance = distance * 10;

    if(distance>=1000) {
        distance = 1000;
    }
    var s = 1-distance /1000;
    this.scale.set(s,s);
    this.y = initialY - distance/8;

};

runMan.render = function () {
    if(this.canHit && touchOn){
        hitLevel.visible = true;

        runMan.parent.addChild(hitLevel);
        hitLevel.x = this.x - hitLevel.radius * hitLevel.scale.x;
        hitLevel.y = this.y - hitLevel.radius * hitLevel.scale.y / 2;

        hitLevel.hitScore++;
        hitLevel.scale.x = 1 + hitLevel.hitScore * 0.05;
        hitLevel.scale.y = 1 + hitLevel.hitScore * 0.05;
    }else{
        hitLevel.visible = false;
    }

    if(this.fly){
        this.flyToSky();
    }
};

module.exports = runMan;
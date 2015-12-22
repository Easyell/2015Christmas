/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');
var spriteTools = require('./../../spriteTools');

var gold = require('./gold');

var flyFist = require('./flyFist');
var fist = require('./fist');

var pa = require('./pa');

var hitLevel = require('./hitLevel');

var loading = require('../../../components/loading');

var initialY = 930;
var initialX = 330

var runMan = sprite.getMc({
    maxFrame:4,
    preFix:'runMan',
    'position.set':[initialX,initialY],
    'scale.x': 0.5,
    'scale.y': 0.5,
    'anchor.set': [0.5, 0.5],
    'animationSpeed':0.15,
    'loop':true
});
runMan.play();
//固定数值
runMan.speed = 1.5;
//血量
runMan.maxHp = 200;
runMan.hp = 200;

runMan.canHit = false;


var load = loading('10%','20px','80%','25px','red','#fff',0,true);

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

    if(!hitLevel.visible){

    }else{

        this.removeFist = fist();

        runMan.hitted(hitLevel.hitScore);
    }

    hitLevel.hitScore = 0;
});

runMan.fly = false;
runMan.flyToSkyBefore = function () {
    this.direction = spriteTools.makeIdentity([this.x,this.y]);
    console.log(this.direction);
    runMan.speed = 20;
    runMan.fly = true;

    gold.visible = true;
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
        this.removeFist();
    }
}

runMan.hitted = function (score) {
    this.hp -= score;

    var p = 1 - this.hp/this.maxHp

    load(p*100+'%');

    var paX = runMan.x + 40 * Math.random();
    var paY = runMan.y + 40 * Math.random();

    var removePa = pa(paX,paY,runMan.scale);

    setTimeout(removePa,500);

    if(this.hp<0){
        this.flyToSkyBefore();
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
    var s = 1-distance /1100;

    this.scale.set(s,s);
    this.x += 3.5;
    this.y = initialY - distance;

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
        hitLevel.scale.set(0,0)
    }

    if(this.fly){
        this.flyToSky();
    }
};

module.exports = runMan;
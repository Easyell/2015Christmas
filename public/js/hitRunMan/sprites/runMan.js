/**
 * Created by zyg on 15/12/10.
 */
var sprite = require('./../../sprite');
var spriteTools = require('./../../spriteTools');

var gold = require('./gold');

var pa = require('./pa');

var hitLevel = require('./hitLevel');

var loading = require('../../../components/loading');

var initialY = 930;
var initialX = 310

var runMan = sprite.getMc({
    maxFrame:4,
    preFix:'runMan',
    'position.set':[initialX,initialY],
    'scale.set': [0.5,0.5],
    'anchor.set': [0.5, 0.5],
    'animationSpeed':0.15,
    'loop':true
});
runMan.play();
//固定数值
runMan.speed = 3.0;
//血量
runMan.maxHp = 200;
runMan.hp = 200;

runMan.canHit = false;


var touchDurationStamp = 0;
var touchOn = false;

runMan.interactive = true;
runMan.on('touchstart', function () {
    touchDurationStamp = Date.now();
    touchOn = true;
    hitLevel.hitScore = 0;
});
document.querySelector('body').addEventListener('touchend', function () {
    touchDurationStamp = Date.now() - touchDurationStamp;
    touchOn = false;

    if(!hitLevel.visible){

    }else{

        runMan.hitted(hitLevel.hitScore);
    }

    hitLevel.hitScore = 0;
});



runMan.fly = false;
runMan.flyToSkyBefore = function () {
    this.direction = spriteTools.makeIdentity([this.x,this.y]);
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
    }
}

runMan.hitted = function (score) {
    this.hp -= score;

    var p = 1 - this.hp/this.maxHp;

    var remove = this.load(p*100+'%');

    var paX = runMan.x + 40 * Math.random();
    var paY = runMan.y + 40 * Math.random();

    var removePa = pa(this.parent,paX,paY,runMan.scale);

    setTimeout(removePa,500);

    if(this.hp<0){
        this.flyToSkyBefore();
        remove();
    }
}

//根据距离差，近大远小
//最后消失在地平线上
runMan.setMode = function (distance) {
    if(this.fly){
        return ;
    }

    distance = distance * 15;

    if(distance>=1000) {
        distance = 1000;
    }
    var s = 1-distance /1000;

    if(s<0){
        s = 0;
    }

    this.scale.set(s,s);
    this.x = initialX + distance/2.2;
    this.y = initialY - distance;

    this.visible = this.y >= 280;
};

runMan.init = function () {
    this.speed = 3.0;
    this.hp = this.maxHp;
    this.x = initialX;
    this.y = initialY;
    this.fly = false;
    this.scale.set(0.5,0.5);
    this.rotation = 0;
    this.out = false;

    this.load = loading({
        x:'10%',
        y:'20px',
        width:'80%',
        height:'25px',
        bg:'red',
        loadColor:'#fff'
    },0);

}

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
        hitLevel.scale.set(0,0);
    }

    if(this.fly){
        this.flyToSky();
    }
};

module.exports = runMan;
/**
 * Created by zyg on 15/12/8.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var foot = new PIXI.Container();

var leftFoot = sprite.getMc({
    maxFrame:2,
    preFix:'leftFoot',
    'position.set':[0,1004],
    'scale.x': 1,
    'scale.y': 1,
    'anchor.set': [0, 1]
});

var rightFoot = sprite.getMc({
    maxFrame:2,
    preFix:'rightFoot',
    'position.set':[320,1004],
    'scale.x': 1,
    'scale.y': 1,
    'anchor.set': [0, 1]
});

var l=true,r=true;


//foot.interactive = true;
leftFoot.interactive = true;
rightFoot.interactive = true;


//分别点击左右脚，加步数和计算速度。
leftFoot.on('touchstart', function () {
    if(l){
        l = false;
        r = true;
        foot.footNum++
        leftFoot.gotoAndStop(1);
        rightFoot.gotoAndStop(0);
    }
});
rightFoot.on('touchstart', function () {
    if(r){
        l = true;
        r = false;
        foot.footNum++
        rightFoot.gotoAndStop(1);
        leftFoot.gotoAndStop(0);
    }
    //@FOR TEST
    foot.footNum++
});

//initial speed
foot.speed = 1;
//步数
foot.footNum = 0;
//计算每10帧的速度
foot.renderMaxNum = 10;


foot.addChild(leftFoot);
foot.addChild(rightFoot);

var renderCount = foot.renderMaxNum;

foot.render = function () {
    if(!(--renderCount)){
        renderCount = foot.renderMaxNum
        //移动速度，基本0.2,要非常快才有0.3。
        this.speed = foot.footNum/renderCount * 10;//20;
        foot.footNum = 0;
    }
};



module.exports = foot;
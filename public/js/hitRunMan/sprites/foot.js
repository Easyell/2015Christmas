/**
 * Created by zyg on 15/12/8.
 */
var sprite = require('./../../sprite');
var R = require('../resource');

var foot = new PIXI.Container();

var leftFoot = sprite.getIm({
    img: R.leftFoot,
    'position.set':[0,1004],
    'scale.x': 1,
    'scale.y': 1,
    'anchor.set': [0, 1]
});

var rightFoot = sprite.getIm({
    img: R.rightFoot,
    'position.set':[320,1004],
    'scale.x': 1,
    'scale.y': 1,
    'anchor.set': [0, 1]
});

var l=true,r=true;

leftFoot.interactive = true;
rightFoot.interactive = true;

leftFoot.on('touchstart', function () {
    console.log('l');
    if(l){
        l = false;
        r = true;
        foot.footNum++
    }
});
rightFoot.on('touchstart', function () {
    console.log('r');
    if(r){
        l = true;
        r = false;
        foot.footNum++
    }
});

//步数
foot.footNum = 0;
//计算每10帧的速度
foot.renderNum = 10;

foot.addChild(leftFoot);
foot.addChild(rightFoot);

foot.render = function () {
    if(!--this.renderNum){
        this.renderNum = 10;

        //console.log(this.footNum/this.renderNum);

        this.footNum = 0;
    }
};

module.exports = foot;
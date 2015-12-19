/**
 * Created by zyg on 15/12/19.
 */
var sprite = require('../../sprite');
var spriteTools = require('../../spriteTools');

var R = require('../resource');

var runMan = require('./runMan');
var flyFistContainer = require('./flyFistContainer');

var remove = null;

var fistTrance = function (num,tx,ty) {

    var d = num%2 === 0 ?1:-1;

    var myX = 320 + Math.ceil(num/2)*90  * d;
    var myY = 600;

    var myRotation = -Math.tanh((myX-tx)/(myY-ty));

    return {
        x: myX,
        y: myY,
        rotation: myRotation
    }
};

var flyFistSpeed = 25;

var creator = function (config,tx,ty) {

    var flyFist = sprite.getIm({
        img: R.flyFist,
        'anchor.set': [0.5, 0.5],
        'scale.set':[0.25,0.25]
    });


    var direction = null;
    var gapX = config.x-tx;
    var gapY = config.y-ty;

    direction = spriteTools.makeIdentity([gapX,gapY]);

    console.log(direction,config.x,tx);


    flyFist.init = function () {;

    }

    flyFist.render = function () {

        this.x -= flyFistSpeed * direction[0];
        this.y -= flyFistSpeed * direction[1];


        if(this.y - 100 > ty){


        }else{
            //flyFist.parent.removeChild(this);
        }
    };

    flyFist.position.set(config.x, config.y);
    flyFist.rotation = config.rotation;


    flyFistContainer.addChild(flyFist);

    return function () {
        flyFistContainer.removeChild(flyFist);
    }
};


module.exports = function (num,targetX,targetY) {

    var arr = [];
    var i = 0;

    for (; i < num; i++) {
        arr.push(creator(fistTrance(i,targetX,targetY),targetX,targetY));
    }

    return function () {

        arr.forEach(function(remove){
            remove();
        });
    }
};
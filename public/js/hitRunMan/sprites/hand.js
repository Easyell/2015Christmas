/**
 * Created by zyg on 15/12/8.
 */
var sprite = require('./../../sprite');
var R = require('../resource');


var basicHand = sprite.getIm({
    img: R.hand,
    'position.set':[640,500],
    'scale.x': 0.5,
    'scale.y': 0.5,
    'anchor.set': [1, 1]
});


//291,目测300最大
//不同的level对应不同的hit动画
var scoreLevel = function (score) {
    if(score < 50){
        return 0;
    }

    return 0;
}

var getHand = function(level){

    switch(level){
        case 0:
            return basicHand;
    }
}

var hitAnimation = {
    '0': function (hand) {

        var c = function(n){
            return n - 35;
        };
        var count = 40;

        var si = setInterval(function(){
            if(count>0){
                hand.rotation = c(--count)/180 * Math.PI;
            }else{
                hand.rotation = 0;
                clearInterval(si);
            }
        },50);
    }
}

module.exports = function (score) {

    var level = scoreLevel(score);

    var createdHand = getHand(level);

    createdHand.hitFail = function () {
        console.log('hit fail');
    }

    createdHand.hit = function () {
        console.log(score);
        hitAnimation[level](createdHand);
    }

    return createdHand;
};
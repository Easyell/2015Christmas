/**
 * Created by zyg on 15/12/24.
 */

var R = require('./resource');
var isReady = false;
module.exports = function (render, success, score) {
    var readyFn = function () {
        isReady = true;

        if(!score){
            score = '0';
        }else{
            score += parseInt(Math.random * 20)
        }

        var container = new PIXI.Container();
        var sign = require('./sprites/sign');
        var share = require('./sprites/share')
        var playAgain = require('./sprites/playAgain');
        var result = require('./sprites/result')(!!success)
        var text = new PIXI.Text(score, {
            font: '60px Arial',
            fill: 0xffffff,
            align: 'center'
        });
        text.x = 180;
        text.y = 230;

        playAgain.interactive=true;
        playAgain.on('touchstart', function () {
            require('./game')(render);
            playAgain.off('touchstart');
        });

        container.addChild(sign)
        container.addChild(playAgain)
        container.addChild(share);
        container.addChild(text)
        container.addChild(result)
        render(container);
    }


    if(isReady){
        readyFn();
    }else{
        var ready = require('./../loader');
        ready(R.end,readyFn);
    }
};
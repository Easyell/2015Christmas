/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');

var isReady = false;

var bgm = document.querySelector('#bgm');

module.exports = function (render) {
    bgm.src = R.gameBgm;
    bgm.play();

    var readyFn = function () {
        isReady = true;
        var mainStage = new PIXI.Container();

        var foot = require('./sprites/foot');
        var runMan = require('./sprites/runMan');
        var distance = require('./sprites/distanceDisplay');

        var gold = require('./sprites/gold');
        var backgroundContainer = require('./sprites/backgroundContainer');
        var hitLevel = require('./sprites/hitLevel');
      var text = new PIXI.Text('点击左右脚追上圣诞老贼抢回礼物，\n' +
      '追上后点击圣诞老人就可以打他，\n顶部有血条', {
        font: '30px Arial',
        fill: 0x666666,
        align: 'left'
      })
      text.x = 0;
      text.y = 90;
        gold.off('touchstart');
        gold.on('touchstart', function () {
            mainStage.end(true);
        });
      text.alpha = 0.8

        runMan.init();
        gold.init();
        distance.init();
        foot.init();

        mainStage.end = function (r) {
            require('./gameover')(render, r, foot.getCountRate());
            bgm.pause();
        }

        mainStage.addChild(backgroundContainer);
        mainStage.addChild(gold);
        mainStage.addChild(runMan);
        mainStage.addChild(distance);
        mainStage.addChild(hitLevel);
        mainStage.addChild(foot);
        mainStage.addChild(text);
        render(mainStage);
    }


    if(isReady){
        readyFn();
    }else{
        var ready = require('./../loader');
        ready(R.game,readyFn);
    }

}

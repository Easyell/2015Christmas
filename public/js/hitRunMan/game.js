/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');

var isReady = false;

module.exports = function (render) {
    document.querySelector('#bgm').src = R.gameBgm;

    var readyFn = function () {
        isReady = true;
        var mainStage = new PIXI.Container();

        var foot = require('./sprites/foot');
        var runMan = require('./sprites/runMan');
        var distance = require('./sprites/distanceDisplay');

        var gold = require('./sprites/gold');
        var backgroundContainer = require('./sprites/backgroundContainer');
        var hitLevel = require('./sprites/hitLevel');

        var flyFistContainer = require('./sprites/flyFistContainer');

        mainStage.addChild(backgroundContainer);
        mainStage.addChild(gold);
        mainStage.addChild(runMan);
        mainStage.addChild(distance);
        mainStage.addChild(hitLevel);
        mainStage.addChild(flyFistContainer);
        mainStage.addChild(foot);

        render(mainStage);
    }


    if(isReady){
        readyFn();
    }else{
        var ready = require('./../loader');
        ready(R.game,readyFn);
    }

}

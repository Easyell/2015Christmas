/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');

module.exports = function (render) {
    document.querySelector('#bgm').src = R.gameBgm;

    var ready = require('./../loader');
    ready(R.game,function (com) {
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

        setTimeout(function () {

            //var p = require('../../components/progress');
            //p({
            //    background:'blue'
            //})

        },3000)
    });

}

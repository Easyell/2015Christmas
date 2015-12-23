/**
 * Created by zyg on 15/12/23.
 */
module.exports = function(render){
  var ready = require('./../loader');
  ready(require('./resource'),function (com) {
    var startStage = new PIXI.Container();

    var startSnowMan = require('./sprites/startSnowMan')

    var christmasTree = require('./sprites/christmasTree');


    startStage.addChild(christmasTree)
    startStage.addChild(startSnowMan)


    render(startStage);
  })
}
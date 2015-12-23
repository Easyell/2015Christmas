/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');
module.exports = function(render){
  var ready = require('./../loader');
  ready(R,function (com) {
    var startStage = new PIXI.Container();
    var sprite = require('../sprite');
    var title = sprite.getIm({
      img: R.startTitle,
      'position.set': [320, 26],
      'anchor.set': [0.5, 0],
    })
    var startSnowMan = require('./sprites/startSnowMan')

    var christmasTree = require('./sprites/christmasTree');


    startStage.addChild(christmasTree)
    startStage.addChild(title)
    startStage.addChild(startSnowMan)
    startStage.addChild(title)
    render(startStage);
  })
}
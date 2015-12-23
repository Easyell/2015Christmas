/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');
module.exports = function(render){
  var ready = require('./../loader');
  ready(R,function (com) {
    var startStage = new PIXI.Container();
    var sprite = require('../sprite');
    var background = sprite.getIm({
      img: R.startBackground,
      'position.set': [320, 0],
      'anchor.set': [0.5, 0],
    });
    var startSnowMan = require('./sprites/startSnowMan')
    startStage.addChild(background)
    startStage.addChild(startSnowMan)
    render(startStage);
  })
}
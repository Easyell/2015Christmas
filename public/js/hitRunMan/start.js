/**
 * Created by zyg on 15/12/23.
 */

var R = require('./resource');

var isReady = false;

module.exports = function(render){
  document.querySelector('#bgm').src = R.startBgm;

  var readyFn = function (com) {
    isReady = true;

    var startStage = new PIXI.Container();
    startStage.customTimer = 0;
    var sprite = require('../sprite');
    var background = sprite.getIm({
      img: R.startBackground,
      'position.set': [320, 0],
      'anchor.set': [0.5, 0],
    });
    var gift = require('./sprites/gift');
    gift.down();
    var snowmanhand = require('./sprites/snowmanhand')
    var startSnowMan = require('./sprites/startSnowMan')

    startStage.addChild(background)
    startStage.addChild(startSnowMan)
    startStage.addChild(snowmanhand)
    startStage.addChild(gift)

    startStage.render = function() {
      if (startStage.customTimer <= 240) {
        startStage.customTimer ++
      } else if(snowmanhand.status == 0) {
        snowmanhand.handdown()
      }
      if(snowmanhand.status == 2) {
        snowmanhand.handup();
        gift.up()
      }
      if(snowmanhand.status == 4) {
        require('./game')(render)
        snowmanhand.status = 5;
      }
    }
    render(startStage);
  }

  if(isReady){
    readyFn();
  }else{
    var ready = require('./../loader');
    ready(R.start,readyFn);
  }

}
/**
 * Created by guoshencheng on 15/12/21.
 */

var sprite = require('../../sprite');
var houseGen = require('./house')
var R = require('../resource')
var backgroundContainer = new PIXI.Container();

var playBG = sprite.getIm({
  img: R.playBg,
  'anchor.set':[0, 0],
  'position.set': [0,0],
  'scale.x': 1,
  'scale.y': 1
});

var count = 0;

backgroundContainer.configure = function() {
  count = 0;
  backgroundContainer.addChild(playBG)
  for(var i = 0; i < 7; i ++) {
    var house = houseGen(i);
    backgroundContainer.addChild(house);
    house.updateWithProgress(0.2 + i * 0.2);
  }
}

backgroundContainer.addNewHouse = function() {
  var house = houseGen(parseInt(Math.random() * 3));
  backgroundContainer.addChildAt(house, 1);
  house.updateWithProgress(0.2);
}

backgroundContainer.configure();
backgroundContainer.render = function () {
    this.children.forEach(function(child){
      if(child.progress >= 1.49) {
        backgroundContainer.addNewHouse();
      }
        if(child.render){
            child.render();
        }
    })
}

module.exports = backgroundContainer;
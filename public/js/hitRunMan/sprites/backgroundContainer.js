/**
 * Created by guoshencheng on 15/12/21.
 */

var sprite = require('../../sprite');
var houseGen = require('./house')
var backgroundContainer = new PIXI.Container();

var count = 0;

backgroundContainer.configure = function() {
  count = 0;
  for(var i = 0; i < 4; i ++) {
    var house = houseGen(i);
    backgroundContainer.addChild(house);
    house.updateWithProgress((i + 1) * 0.3);
  }
}

backgroundContainer.addNewHouse = function() {
  var house = houseGen(parseInt(Math.random() * 3));
  backgroundContainer.addChildAt(house, 0);
  house.updateWithProgress(0.3);
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
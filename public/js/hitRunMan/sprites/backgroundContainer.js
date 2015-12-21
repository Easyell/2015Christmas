/**
 * Created by guoshencheng on 15/12/21.
 */

var sprite = require('../../sprite');

var backgroundContainer = new PIXI.Container();


backgroundContainer.configure = function() {
  for(var i = 0; i < 3; i ++) {
    var house = require('./house')(i);
    backgroundContainer.addChild(house);
    house.updateWithProgress((i + 1) * 0.3);
  }
}

backgroundContainer.configure();
backgroundContainer.render = function () {
    this.children.forEach(function(child){
        if(child.render){
            child.render();
        }
    })
}

module.exports = backgroundContainer;
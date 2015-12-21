/**
 * Created by guoshencheng on 12/21/15.
 */

var sprite = require('../../sprite');
var R = require('../resource');

var houseGenerator = function(random) {
  var house = sprite.getIm({
    img: map[random],
    'anchor.set':[0.5, 0.5],
    'position.set': [100,100],
    'scale.x': 1,
    'scale.y': 1
  });
  house.progress = 0;
  house.render = function () {
    this.progress += 0.01;
    house.x = 300 - 200 * this.progress * this.progress;
    house.y = 100 + 300 * this.progress * this.progress;
    house.scale.x = this.progress
    house.scale.y = this.progress
    if (this.progress >= 1.5) {
      this.parent.removeChild(this);
    }
  }
  house.updateWithProgress = function(progress) {
    this.progress = progress
    house.x = 250 - 200 * progress;
    house.y = 100 + 300 * progress;
    house.scale.x = progress
    house.scale.y = progress
  }
  return house;
}



var map = [R.house1, R.house2, R.house3, R.house2];

module.exports = houseGenerator;

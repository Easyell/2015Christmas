/**
 * Created by guoshencheng on 12/21/15.
 */

var sprite = require('../../sprite');
var R = require('../resource');
var foot = require('./foot')

var houseGenerator = function(random) {
  var house = sprite.getIm({
    img: map[random],
    'anchor.set':[1, 1],
    'position.set': [100,100],
    'scale.x': 1,
    'scale.y': 1
  });
  house.progress = 0;
  house.render = function () {
    this.progress += 0.01 * (foot.speed / 3);
    house.updateWithProgress(this.progress)
    if (this.progress >= 1.5) {
      this.parent.removeChild(this);
    }
  }
  house.updateWithProgress = function(progress) {
    this.progress = progress
    house.x = 580 - 400 * this.progress * this.progress;
    house.y = 360 + 400 * (1.2 - 0.05 * this.progress) * this.progress * this.progress;
    house.scale.x = this.progress * 1.1
    house.scale.y = this.progress
  }
  return house;
}


var map = [R.house1, R.house2, R.house3, R.house2, R.house1, R.house3, R.house2, R.house1, R.house3];

module.exports = houseGenerator;

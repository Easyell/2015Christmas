/**
 * Created by guoshencheng on 12/24/15.
 */


var sprite = require('./../../sprite');
var R = require('../resource');

var gift = sprite.getMc({
  maxFrame:2,
  preFix:'gift',
  'position.set':[46,800],
  'scale.x': 1,
  'scale.y': 1,
  'anchor.set': [0, 0]
});

gift.status = 0

gift.up = function() {
  gift.gotoAndStop(1)
  gift.status = 1
}

gift.down = function() {
  gift.gotoAndStop(2)
}

gift.render = function() {
  if(gift.status == 1) {
    gift.y -=2
    var a = (gift.y - 650) * 0.04
    gift.x = 10 + a * a
    if(gift.y < 500) {
      gift.status = 2
    }
  }
}

module.exports = gift
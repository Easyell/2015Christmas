/**
 * Created by guoshencheng on 12/24/15.
 */
var sprite = require('../../sprite')
var R = require('../resource')

var snowmanhand = sprite.getIm({
  img: R.snowmanhand,
  'anchor.set':[1, 1],
  'position.set': [250,700],
  'scale.x': 1,
  'scale.y': 1,
  'rotation':0,
})

snowmanhand.status = 0

snowmanhand.handdown = function() {
  snowmanhand.status = 1
}

snowmanhand.handup = function() {
  snowmanhand.status = 3
}

snowmanhand.render = function() {
  if(snowmanhand.status == 1) {
    snowmanhand.rotation -= 0.01
    if(snowmanhand.rotation <= -1.5) {
      snowmanhand.rotation = -1.5
      snowmanhand.status = 2
    }
  } else if (snowmanhand.status == 3) {
    snowmanhand.rotation += 0.01
    if (snowmanhand.rotation >= 0) {
      snowmanhand.rotation = 0
      snowmanhand.status = 4
    }
  }
}

module.exports = snowmanhand
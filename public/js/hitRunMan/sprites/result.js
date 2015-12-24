/**
 * Created by guoshencheng on 12/25/15.
 */

var sprite = require('../../sprite')
var R = require('../resource')

module.exports = function(success) {
  var result = sprite.getIm({
    img: success ? R.resultSuccess : R.resultFail,
    'position.set':[140, 100],
    'anchor.set':[0.5, 0.5],
    'rotation':-0.6
  });
  return result
}
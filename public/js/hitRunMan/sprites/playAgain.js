/**
 * Created by guoshencheng on 12/24/15.
 */
var R = require('../resource');
var sprite = require('../../sprite');

var playAgain = sprite.getIm({
  img: R.playAgain,
  'position.set':[320,502],
  'anchor.set':[0.5,0.5]
});

module.exports = playAgain;
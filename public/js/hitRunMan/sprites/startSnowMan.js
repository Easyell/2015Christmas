/**
 * Created by guoshencheng on 12/23/15.
 */
var sprite = require('../../sprite');

var startSnowMan = sprite.getMc({
  maxFrame:5,
  preFix:'start_snowman',
  'position.set':[320,600],
  'anchor.set':[0.5,0.5],
  'scale.set':[0.8,0.8],
  'animationSpeed':0.08
});
startSnowMan.play();

module.exports = startSnowMan;
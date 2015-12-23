/**
 * Created by guoshencheng on 12/23/15.
 */
var sprite = require('../../sprite');

var startSnowMan = sprite.getMc({
  maxFrame:8,
  preFix:'start_snowman',
  'position.set':[320,400],
  'anchor.set':[0.5,0.5],
  'scale.set':[0.5,0.5],
  'animationSpeed':0.1
});
startSnowMan.play();

module.exports = startSnowMan;
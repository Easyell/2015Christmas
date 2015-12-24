var R = require('../resource');
var sprite = require('../../sprite');

var share = sprite.getIm({
  img: R.shareButton,
  'position.set':[640,0],
  'anchor.set':[1,0]
});

module.exports = share;

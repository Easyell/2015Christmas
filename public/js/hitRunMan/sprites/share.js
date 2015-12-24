var R = require('../resource');
var sprite = require('../../sprite');

var shareTips = require('../../../components/tipsToShare');

var share = sprite.getIm({
  img: R.shareButton,
  'position.set':[640,0],
  'anchor.set':[1,0]
});

share.interactive = true;
share.on('touchstart', function () {

    var remove = shareTips(R.howToShare);

});




module.exports = share;
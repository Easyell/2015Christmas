/**
 * Created by zyg on 15/12/21.
 */
var sprite = require('../../sprite');
var spriteTools = require('../../spriteTools');

var flyFistContainer = require('./flyFistContainer');

var R = require('../resource');

var pa = sprite.getIm({
    img: R.pa,
    'anchor.set':[1,0.5],
    'scale.set':[0.25,0.25]
})

pa.render = function () {

}


module.exports = function (x,y,scale) {

    pa.x = x;
    pa.y = y;
    pa.scale.set(scale.x,scale.y);

    flyFistContainer.addChild(pa);

    return function () {
        flyFistContainer.removeChild(pa);
    }
};
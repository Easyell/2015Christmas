/**
 * Created by zyg on 15/12/20.
 */
var sprite = require('../../sprite');
var spriteTools = require('../../spriteTools');

var flyFistContainer = require('./flyFistContainer');

var R = require('../resource');

var fist = sprite.getIm({
    img: R.fist,
    'position.set':[660,400],
    'anchor.set':[1,0.5],
    'scale.set':[0.25,0.25]
})

fist.render = function () {

}


module.exports = function () {

    flyFistContainer.addChild(fist);

    return function () {
        flyFistContainer.removeChild(fist);
    }
}
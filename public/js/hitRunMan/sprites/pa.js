/**
 * Created by zyg on 15/12/21.
 */
var sprite = require('../../sprite');

var R = require('../resource');

var pa = sprite.getIm({
    img: R.pa,
    'anchor.set':[1,0.5],
    'scale.set':[0.25,0.25]
})

pa.render = function () {

}

module.exports = function (container,x,y,scale) {

    pa.x = x;
    pa.y = y;
    pa.scale.set(scale.x,scale.y);

    container.addChild(pa);

    return function () {
        container.removeChild(pa);
    }
};
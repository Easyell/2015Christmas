/**
 * Created by zyg on 15/12/24.
 */

var R = require('./resource');

module.exports = function (render) {

    var container = new PIXI.Container();

    var sign = require('./sprites/sign');

    var endBgBuild = require('./sprites/overText');

    var end = endBgBuild(0);

    container.addChild(end);
    container.addChild(sign);

    var share = require('../../components/tipsToShare');

    var remove = share(R.howToShare);

    render(container);
};
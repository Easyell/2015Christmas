/**
 * Created by zyg on 15/12/23.

 */

var sprite = require('../../sprite');
var R = require('../resource');

var create = function (x, y) {
    var christmasTree = sprite.getIm({
        img: R.christmasTree,
        'position.set':[x,y],
        'anchor.set':[0.5,1],
        'scale.set':[0.5,0.5]
    });

    return christmasTree;
}

var treeContainer = new PIXI.Container();

treeContainer.addChild(create(120,390));
treeContainer.addChild(create(340,350));
treeContainer.addChild(create(550,390));
treeContainer.addChild(create(10 ,600));
treeContainer.addChild(create(220,600));
treeContainer.addChild(create(430,600));
treeContainer.addChild(create(620,600));

module.exports = treeContainer;
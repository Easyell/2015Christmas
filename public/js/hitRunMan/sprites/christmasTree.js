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

treeContainer.addChild(create(10,400));
treeContainer.addChild(create(180,500));
treeContainer.addChild(create(110,700));
treeContainer.addChild(create(320,440));
treeContainer.addChild(create(320,640));
treeContainer.addChild(create(430,520));
treeContainer.addChild(create(620,440));

module.exports = treeContainer;
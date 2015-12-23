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

treeContainer.addChild(create(110,580));
treeContainer.addChild(create(340,450));
treeContainer.addChild(create(550,580));
treeContainer.addChild(create(10 ,800));
treeContainer.addChild(create(180,800));
treeContainer.addChild(create(460,800));
treeContainer.addChild(create(620,800));

module.exports = treeContainer;
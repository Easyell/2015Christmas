/**
 * Created by zyg on 15/12/19.
 */
var sprite = require('../../sprite');

var flyingContainer = new PIXI.Container();

flyingContainer.render = function () {
    this.children.forEach(function(child){
        if(child.render){
            child.render();
        }
    })
}

module.exports = flyingContainer;
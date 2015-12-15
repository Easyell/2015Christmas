/**
 * Created by zyg on 15/12/15.
 */

var hitLevel = new PIXI.Graphics();

var initialR = 160;

hitLevel.lineStyle(0);
hitLevel.beginFill(0x999999, 0.5);
hitLevel.drawCircle(160, 90,60);
hitLevel.endFill();

hitLevel.radius = initialR;

hitLevel.hitScore = 0;

hitLevel.visible = false;

module.exports = hitLevel;
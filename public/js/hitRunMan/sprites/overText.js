/**
 * Created by zyg on 15/12/24.
 */
var R = require('../resource');
var sprite = require('../../sprite');

module.exports = function (score) {

    var panel = new PIXI.Container();

    var levelText = '惊了！';

    var level = new PIXI.Text(levelText,{
        font: '50px Arial',
        fill: 0xffffff,
        align: 'center'
    })
    level.x = 110;
    level.y = 220;

    var text = new PIXI.Text('你的手速每分钟：'+score+'下', {
        font: '40px Arial',
        fill: 0xffffff,
        align: 'center'
    });

    text.x = 110;
    text.y = 300;

    panel.addChild(text);
    panel.addChild(level);


    return panel;
};
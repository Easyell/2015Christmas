/**
 * Created by zyg on 15/12/12.
 */
var runMan = require('./runMan');

var text = new PIXI.Text('距离米', {
        font: '32px Arial',
        fill: 0x999999,
        align: 'center'
    });

text.x = 220;
text.y = 730;

text.render = function () {

    this.text = '距离'+runMan.distance+'米';
};



module.exports = text;

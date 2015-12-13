/**
 * Created by zyg on 15/12/12.
 */
var runMan = require('./runMan');
var foot = require('./foot');

var text = new PIXI.Text('距离米', {
        font: '32px Arial',
        fill: 0x999999,
        align: 'center'
    });

text.x = 220;
text.y = 730;

var renderMaxCount = foot.renderMaxNum;
var renderCount = renderMaxCount;
var distance = 10;

var calculateDistance = function(distance,speed,footSpeed){
    var gap = (speed - footSpeed ) * 2;

    distance = parseFloat(distance);

    distance += distance <= 1000 ?gap:
        gap<0?gap:1;

    distance = distance <= 0 ? 0:distance;

    distance = distance.toFixed(1);

    return distance;
};

text.render = function () {

    if(!--renderCount){

        distance = calculateDistance(distance,runMan.speed,foot.speed);

        runMan.setMode(distance);


        renderCount = renderMaxCount;
    }


    this.text = '距离'+distance+'米';
};


module.exports = text;

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

var canHitMaxDistance = 100;

var renderMaxCount = foot.renderMaxNum;
//计数器，每X帧计算一次
var renderCount = renderMaxCount;
var distance = 10;

var calculateDistance = function(distance,speed,footSpeed){
    var gap = (speed - footSpeed ) ;

    distance = parseFloat(distance);

    distance += distance <= 1000 ?gap:
        gap<0?gap:1;

    distance = distance <= 0 ? 0:distance;

    distance = distance.toFixed(1);

    return distance;
};

text.render = function () {

    if(!--renderCount && ! runMan.out){

        distance = calculateDistance(distance,runMan.speed,foot.speed);

        runMan.setMode(distance);

        renderCount = renderMaxCount;

    }

    runMan.canHit = distance <= canHitMaxDistance;

    this.text = '距离'+distance+'米';
};


module.exports = text;

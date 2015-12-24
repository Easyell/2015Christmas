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


text.calculateDistance = function(distance,speed,footSpeed){
    var gap = (speed - footSpeed ) ;

    distance = parseFloat(distance);


    distance += distance <= 1000 ?gap:
        gap<0?gap:1;

    distance = distance <= 0 ? 0:distance;

    if(distance > 40 && distance < 300){
        this.style.fill = '#FFC200';
        this.style.font =  "40px Arial";
    }else if(distance >= 300){
        this.style.fill = '#FF0000';
        this.style.font =  "48px Arial";
    }

    distance = distance.toFixed(1);

    return distance;
};

text.init = function () {
    distance = 10;
    this.style.fill = '#999999';
    this.fontSize = '32px';
    this.failing = false;
}

text.gameFail = function () {
    if(!this.failing){
        this.failing = true;
        setTimeout(function () {
            this.parent.end(false);
        },1500);
    }
}

text.render = function () {

    if(!--renderCount && ! runMan.out){

        distance = this.calculateDistance(distance,runMan.speed,foot.speed);

        runMan.setMode(distance);
    }
    if(renderCount === 0){
        renderCount = renderMaxCount;
    }

    runMan.canHit = distance <= canHitMaxDistance;

    if(distance > 1000){
        this.text = '圣诞老贼逃走了！'
        this.gameFail();
    }else{
        this.text = '距离'+distance+'米';
    }
};


module.exports = text;

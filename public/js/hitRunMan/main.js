var common = require('./../common');
var sprite = require('./../sprite');

var renderer;
var r = common.isSupportWebGL();
if(r){
    renderer= new PIXI.WebGLRenderer(640, 1004, {
            transparent:true
        }
    );
}else{
    renderer= new PIXI.CanvasRenderer(640, 1004, {
            transparent:true
        }
    );
}
document.body.appendChild(renderer.view);

var ready = require('./../loader');
ready(require('./resource'),function (com) {
    var mainStage = new PIXI.Container();

    var hand = require('./sprites/hand')(0);
    var foot = require('./sprites/foot');
    var runMan = require('./sprites/runMan');
    var distance = require('./sprites/distanceDisplay');

    var hitLevel = require('./sprites/hitLevel');

    mainStage.addChild(hand);
    mainStage.addChild(foot);
    mainStage.addChild(runMan);
    mainStage.addChild(distance);
    mainStage.addChild(hitLevel);

    render(mainStage);
});

var render = function(stage){

    function animate() {

        stage.children.forEach((function(child){
            if(child.render){
                child.render();
            }
        }));

        // render the stage container
        renderer.render(stage);

        requestAnimationFrame(animate);
    }
    animate();
};
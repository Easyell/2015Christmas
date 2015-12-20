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

    var foot = require('./sprites/foot');
    var runMan = require('./sprites/runMan');
    var distance = require('./sprites/distanceDisplay');

    var gold = require('./sprites/gold');

    var hitLevel = require('./sprites/hitLevel');

    var flyFistContainer = require('./sprites/flyFistContainer');

    mainStage.addChild(gold);
    mainStage.addChild(foot);
    mainStage.addChild(runMan);
    mainStage.addChild(distance);
    mainStage.addChild(hitLevel);
    mainStage.addChild(flyFistContainer);

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
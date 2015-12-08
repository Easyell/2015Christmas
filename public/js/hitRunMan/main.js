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
ready(function (com) {
    var mainStage = new PIXI.Container();

    //var deer = require('./sprites/deer');
    //deer.play();

    var hand = require('./sprites/hand');
    var foot = require('./sprites/foot');

    mainStage.addChild(hand);
    mainStage.addChild(foot);

    console.log(mainStage.children);

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
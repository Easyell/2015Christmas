var common = require('./../common');
var sprite = require('./../sprite');
var resource = require('./resource');
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

var render = function(stage){

    function animate() {
        if(stage.render) {
          stage.render()
        }
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

document.body.appendChild(renderer.view);

require('./start')(render)
//require('./game')(render);


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

require('./start')(render)
//require('./game')(render);

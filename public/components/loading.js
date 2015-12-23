/**
 * Created by zyg on 15/12/21.
 */

var count = 0;

var setStyle = function (node,style) {
    for(var k in style){
        node.style[k] = style[k];
    }
    return node;
};

var body = document.querySelector('body');

module.exports = function (config,initialPercent,container) {
    if(!container){
        container = body;
    }


    var loadingBox = document.createElement('div');
    var loading = document.createElement('div');

    loadingBox.id = 'loadingBox';
    loadingBox.className = 'loadingBox' + (++count);

    loadingBox = setStyle(loadingBox,{
        position:'absolute',
        left:config.x,
        top:config.y,
        width:config.width,
        height:config.height,
        backgroundColor:config.bg,
        overflow:'hidden',
        border:'1px solid #f0f0f0',
        borderRadius:parseInt(config.height)/2 + 'px'
    });

    loading = setStyle(loading,{
        width:initialPercent,
        height:'100%',
        transition:'all 0.3s',
        backgroundColor:config.loadColor
    });

    loadingBox.appendChild(loading);

    container.appendChild(loadingBox);

    return function (percent) {

        loading = setStyle(loading,{
            width:percent
        })

        return function () {
            loadingBox.remove();
        }
    }
};
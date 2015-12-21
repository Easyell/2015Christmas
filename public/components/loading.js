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

module.exports = function (x, y, width,height,bg,color,initialPercent) {

    var loadingBox = document.createElement('div');
    var loading = document.createElement('div');

    loadingBox.id = 'loadingBox';
    loadingBox.className = 'loadingBox' + (++count);

    loadingBox = setStyle(loadingBox,{
        position:'absolute',
        left:x,
        top:y,
        width:width,
        height:height,
        backgroundColor:bg,
        overflow:'hidden',
        border:'1px solid #f0f0f0',
        borderRadius:parseInt(height)/2 + 'px'
    });

    loading = setStyle(loading,{
        width:initialPercent,
        height:'100%',
        transition:'all 0.3s',
        backgroundColor:color
    });

    loadingBox.appendChild(loading);

    body.appendChild(loadingBox);

    return function (percent) {

        loading = setStyle(loading,{
            width:percent
        })

        return function () {
            loadingBox.remove();
        }
    }
};
/**
 * Created by zyg on 15/12/24.
 */

var utils = require('./utils');
var body = document.querySelector('body');

module.exports = function (imgSrc) {

    var img = new Image();
    img.src = imgSrc;

    img = utils.setStyle(img,{
        width:'65%',
        position:'absolute',
        top:'20px',
        right:'20px'
    })

    var blackBg = document.createElement('div');

    blackBg = utils.setStyle(blackBg,{
        backgroundColor:'#000',
        opacity:0.8,
        zIndex:10,
        width:'100%',
        height:'100%',
        position:'fixed',
        top:0,
        left:0
    })

    var container = document.createElement('div');

    container = utils.setStyle(container,{
        zIndex:100,
        width:'100%',
        height:'100%',
        position:'fixed',
        top:0,
        left:0
    });

    container.appendChild(img);

    body.appendChild(blackBg);
    body.appendChild(container);

    container.onclick = function () {
        blackBg.remove();
        container.remove();
    }

    return function () {
        blackBg.remove();
        container.remove();
    }
};
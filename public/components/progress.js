/**
 * Created by zyg on 15/12/23.
 */
var utils = require('./utils');
var loading = require('./loading');

body = document.querySelector('body');

module.exports = function (config,container) {
    if(!container || container instanceof HTMLElement){
        container = body;
    }

    var progressBg = document.createElement('div');

    progressBg = utils.setStyle(progressBg,{
        background:config.background,
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        zIndex:100
    })

    var load = loading({
        x:'10%',
        y:'90%',
        width:'80%',
        height:'25px',
        bg:'red',
        loadColor:'#fff'
    },'0%',progressBg);


    container.appendChild(progressBg);

    return {
        load: function (percent) {
            return load(percent);
        },
        remove: function () {
            progressBg.remove();
        }
    }

};
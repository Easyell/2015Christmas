/**
 * Created by zyg on 15/11/7.
 */

var loadOthers = function (loader,next) {
    if(next && next.length>1){
        next = next.slice(1).forEach(function (source) {
            for(var k in source){
                loader.add(k,source[k]);
            }
        });

        loader.load();
    }
}

module.exports = function (source,cb) {

    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.

    var k = 0;

    if(source.next){

        var firstSource = source.next[0];

        for(k in firstSource){
            loader.add(k, firstSource[k]);
        }

    }else{
        for (k in source) {
            loader.add(k, source[k]);
        }
    }

    loader.on('progress', function (a, b) {
        //console.log.apply(console, arguments);
    });

    loader.once('complete', function(){
        console.log('load done');
        cb();
        setTimeout(function () {
            loadOthers(loader,source.next);
        },5000);
    });

    loader.load();
};
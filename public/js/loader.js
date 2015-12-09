/**
 * Created by zyg on 15/11/7.
 */

module.exports = function (source,cb) {

    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.

    for (var k in source) {
        loader.add(k, source[k]);
    }

    loader.on('progress', function (a, b) {
        //console.log.apply(console, arguments);
    });

    loader.once('complete', function(){
        console.log('load done');
        cb();
    });

    loader.load();
};
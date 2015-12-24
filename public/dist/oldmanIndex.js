/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://192.168.1.100:7301/public/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/6.
	 */
	var common = __webpack_require__(1);
	var sprite = __webpack_require__(2);
	
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
	
	var ready = __webpack_require__(7);
	ready(function (com) {
	    var mainStage = new PIXI.Container();
	
	    //var deer = require('./sprites/deer');
	    //deer.play();
	
	    var runDeer = __webpack_require__(8);
	    runDeer.play();
	
	    var oldman = __webpack_require__(9);
	
	    mainStage.addChild(runDeer);
	    mainStage.addChild(oldman);
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/10.
	 */
	module.exports = {
	  isSupportWebGL: function () {
	    if (!!window.WebGLRenderingContext) {
	      var canvas = document.createElement("canvas"),
	        names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
	        context = false;
	
	      for (var i = 0; i < 4; i++) {
	        try {
	          context = canvas.getContext(names[i]);
	          if (context && typeof context.getParameter == "function") {
	            // else, return just true
	            return true;
	          }
	        } catch (e) {
	        }
	      }
	
	      // WebGL is supported, but disabled
	      return false;
	    }
	
	    // WebGL not supported
	    return false;
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var setValue = function(obj,key,value){
	    if(key.length === 1){
	        var k0 = key[0];
	        if(typeof obj[k0] === 'function'){
	            obj[k0].apply(obj,[].concat(value));
	        }else{
	            obj[k0] = value;
	        }
	    }else{
	        setValue(obj[key.shift()],key,value);
	    }
	    return obj;
	};
	
	var setConfig = function(object,config){
	    for(var k in config){
	        setValue(object, k.split('.'),config[k]);
	    }
	    return object;
	};
	
	module.exports = {
	    getMc:function(config){
	        var maxFrame = config.maxFrame;
	        var preFix = config.preFix;
	        var         frames = [];
	
	        delete config.maxFrame;
	        delete config.preFix;
	
	        for(var i=1;i<=maxFrame;i++){
	            frames.push(PIXI.Texture.fromFrame(preFix + i + '.png'))
	        }
	
	        var mc = new PIXI.extras.MovieClip(frames);
	        mc.maxFrame = config.maxFrame
	        return setConfig(mc,config);
	    },
	    getIm:function(config){
	        var img = config.img;
	
	        delete config.img;
	
	        var texture = PIXI.Texture.fromImage(img);
	        var sp = new PIXI.Sprite(texture);
	
	        return setConfig(sp,config);
	    }
	};

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/7.
	 */
	var sprite = __webpack_require__(2);
	
	var deer = sprite.getMc({
	    maxFrame: 3,
	    preFix: 'runDeer',
	    'position.set': [100, 904],
	    'anchor.set':[0,1],
	    'animationSpeed':0.1,
	    'loop': true,
	    'scale.x': 0.3,
	    'scale.y': 0.3
	});
	
	module.exports = deer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/3.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(10);
	
	var oldman = sprite.getIm({
	    img: R.oldman,
	    'position.set':[220,909],
	    'scale.x': 0.3,
	    'scale.y': 0.3,
	    'anchor.set': [0, 1]
	});
	
	
	module.exports = oldman;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var localResource = {
	  deer:'/images/deer/deer.json',
	  runDeer:'/images/runDeer/runDeer.json',
	  oldman:'/images/oldman/oldman.png'
	};
	
	var resourceMap = {
	  local:localResource,
	};
	
	module.exports = resourceMap[resourcePosition] || resourceMap['local'];

/***/ }
/******/ ]);
//# sourceMappingURL=oldmanIndex.js.map
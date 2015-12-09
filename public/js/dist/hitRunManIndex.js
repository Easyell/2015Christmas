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
/******/ 	__webpack_require__.p = "http://localhost:7301/public/js/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var ready = __webpack_require__(3);
	ready(function (com) {
	    var mainStage = new PIXI.Container();
	
	    //var deer = require('./sprites/deer');
	    //deer.play();
	
	    var hand = __webpack_require__(5);
	    var foot = __webpack_require__(7);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var r = __webpack_require__(4);
	
	module.exports = function (cb) {
	
	    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.
	
	    for (var k in r) {
	        loader.add(k, r[k]);
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

/***/ },
/* 4 */
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/8.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(6);
	
	var hand = sprite.getIm({
	    img: R.hand,
	    'position.set':[640,450],
	    'scale.x': 0.5,
	    'scale.y': 0.5,
	    'anchor.set': [1, 0.5]
	});
	
	
	module.exports = hand;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var localResource = {
	  hand:'/images/hitRunMan/hand/hand.png',
	  leftFoot:'/images/hitRunMan/foot/leftFoot.png',
	  rightFoot:'/images/hitRunMan/foot/rightFoot.png',
	};
	
	var resourceMap = {
	  local:localResource,
	};
	
	module.exports = resourceMap[resourcePosition] || resourceMap['local'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/8.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(6);
	
	var foot = new PIXI.Container();
	
	var leftFoot = sprite.getIm({
	    img: R.leftFoot,
	    'position.set':[0,1004],
	    'scale.x': 1,
	    'scale.y': 1,
	    'anchor.set': [0, 1]
	});
	
	var rightFoot = sprite.getIm({
	    img: R.rightFoot,
	    'position.set':[320,1004],
	    'scale.x': 1,
	    'scale.y': 1,
	    'anchor.set': [0, 1]
	});
	
	var l=true,r=true;
	
	
	//foot.interactive = true;
	leftFoot.interactive = true;
	rightFoot.interactive = true;
	
	leftFoot.on('touchstart', function () {
	    console.log('l');
	    if(l){
	        l = false;
	        r = true;
	        foot.footNum++
	    }
	});
	rightFoot.on('touchstart', function () {
	    console.log('r');
	    if(r){
	        l = true;
	        r = false;
	        foot.footNum++
	    }
	});
	
	//步数
	foot.footNum = 0;
	//计算每10帧的速度
	foot.renderNum = 10;
	
	foot.addChild(leftFoot);
	foot.addChild(rightFoot);
	
	foot.render = function () {
	    if(!--this.renderNum){
	        this.renderNum = 10;
	
	        console.log(this.footNum/this.renderNum);
	        this.footNum = 0;
	    }
	};
	
	console.log('foot');
	
	module.exports = foot;

/***/ }
/******/ ]);
//# sourceMappingURL=hitRunManIndex.js.map
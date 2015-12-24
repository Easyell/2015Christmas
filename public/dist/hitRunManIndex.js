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

	var common = __webpack_require__(1);
	var sprite = __webpack_require__(2);
	var resource = __webpack_require__(3);
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
	
	//require('./start')(render)
	//require('./game')(render);
	__webpack_require__(4)(render);
	


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
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var localResource = {
	  leftFoot:'/images/hitRunMan/foot/leftFoot.json',
	  rightFoot:'/images/hitRunMan/foot/rightFoot.json',
	  runMan:'/images/hitRunMan/runMan/runMan.json',
	  fist:'/images/hitRunMan/fist/fist.png',
	  flyFist:'/images/hitRunMan/flyFist/flyFist.png',
	  gold:'/images/hitRunMan/gold/gold.json',
	  pa:'/images/hitRunMan/pa/pa.png',
	  house1:'/images/hitRunMan/house/house1.png',
	  house2:'/images/hitRunMan/house/house2.png',
	  house3:'/images/hitRunMan/house/house3.png',
	  playBg:'/images/hitRunMan/background/playBackground.png',
	  start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
	  startTitle:'/images/hitRunMan/startTitle.png',
	  christmasTree:'/images/hitRunMan/christmasTree/christmasTree.png',
	  startBackground:'/images/hitRunMan/startBackground/startBackground.png',
	  gift:'/images/hitRunMan/gift/gift.json',
	  snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
	  endBg:'/images/hitRunMan/background/endSign.png',
	  game:{
	    leftFoot:'/images/hitRunMan/foot/leftFoot.json',
	    rightFoot:'/images/hitRunMan/foot/rightFoot.json',
	    runMan:'/images/hitRunMan/runMan/runMan.json',
	    fist:'/images/hitRunMan/fist/fist.png',
	    flyFist:'/images/hitRunMan/flyFist/flyFist.png',
	    gold:'/images/hitRunMan/gold/gold.json',
	    pa:'/images/hitRunMan/pa/pa.png',
	    house1:'/images/hitRunMan/house/house1.png',
	    house2:'/images/hitRunMan/house/house2.png',
	    house3:'/images/hitRunMan/house/house3.png',
	    playBg:'/images/hitRunMan/background/playBackground.png',
	  },
	  start:{
	    start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
	    startTitle:'/images/hitRunMan/startTitle.png',
	    christmasTree:'/images/hitRunMan/christmasTree/christmasTree.png',
	    startBackground:'/images/hitRunMan/startBackground/startBackground.png',
	    gift:'/images/hitRunMan/gift/gift.json',
	    snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
	  },
	  end:{
	    endBg:'/images/hitRunMan/background/endSign.png',
	  }
	};
	
	//有next则加载next里的内容。
	//先加载第0个，等第0个都完了，加载剩余的
	//Object.defineProperty(localResource,'next',{
	//  enumerable:false,
	//  value:[{
	//    hand:localResource.hand,
	//    ttt:localResource.ttt,
	//    leftFoot:localResource.leftFoot,
	//    rightFoot:localResource.rightFoot,
	//    runMan:localResource.runMan,
	//    fist:localResource.fist,
	//    gold:localResource.gold,
	//    pa:localResource.pa,
	//    house1:localResource.house1,
	//    house2:localResource.house2,
	//    house3:localResource.house3,
	//    start_snowman:localResource.start_snowman,
	//    startTitle:localResource.startTitle,
	//    christmasTree:localResource.christmasTree,
	//    startBackground:localResource.startBackground,
	//    gift:localResource.gift,
	//    snowmanhand:localResource.snowmanhand
	//  },{
	//    flyFist:localResource.flyFist,
	//  }]
	//})
	
	Object.defineProperty(localResource,'startBgm',{
	  enumerable:false,
	  value:'/audio/start_bgm.mp3'
	})
	
	Object.defineProperty(localResource,'gameBgm',{
	  enumerable:false,
	  value:'/audio/hot_run.mp3'
	})
	
	
	
	
	
	var resourceMap = {
	  local:localResource,
	};
	
	module.exports = resourceMap[resourcePosition] || resourceMap['local'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	
	var R = __webpack_require__(3);
	
	module.exports = function (render) {
	
	    var container = new PIXI.Container();
	
	    var sign = __webpack_require__(5);
	
	    var endBgBuild = __webpack_require__(6);
	
	    var end = endBgBuild(0);
	
	    container.addChild(end);
	    container.addChild(sign);
	
	    render(container);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	var R = __webpack_require__(3);
	var sprite = __webpack_require__(2);
	
	var endBg = sprite.getIm({
	    img: R.endBg,
	    'position.set':[0,1004],
	    'anchor.set':[0,1]
	});
	
	module.exports = endBg;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	var R = __webpack_require__(3);
	var sprite = __webpack_require__(2);
	
	module.exports = function (score) {
	
	    var panel = new PIXI.Container();
	
	    var levelText = '惊了！';
	
	    var level = new PIXI.Text(levelText,{
	        font: '50px Arial',
	        fill: 0xffffff,
	        align: 'center'
	    })
	    level.x = 110;
	    level.y = 220;
	
	    var text = new PIXI.Text('你的手速每分钟：'+score+'下', {
	        font: '40px Arial',
	        fill: 0xffffff,
	        align: 'center'
	    });
	
	    text.x = 110;
	    text.y = 300;
	
	    panel.addChild(text);
	    panel.addChild(level);
	
	
	    return panel;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=hitRunManIndex.js.map
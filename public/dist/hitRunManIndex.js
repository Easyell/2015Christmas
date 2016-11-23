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
/******/ 	__webpack_require__.p = "http://localhost:7301/public/dist";
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
	
	
	__webpack_require__(4)(render)
	//require('./game')(render);
	//require('./gameover')(render);
	
	


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
	
	var localResource = {
	  leftFoot:'/images/hitRunMan/foot/leftFoot.json',
	  rightFoot:'/images/hitRunMan/foot/rightFoot.json',
	  gold:'/images/hitRunMan/gold/gold.json',
	  playBg:'/images/hitRunMan/background/playBackground.png',
	  gift:'/images/hitRunMan/gift/gift.json',
	  runMan:'/images/hitRunMan/runMan/runMan.json',
	  pa:'/images/hitRunMan/pa/pa.png',
	  house1:'/images/hitRunMan/house/house1.png',
	  house2:'/images/hitRunMan/house/house2.png',
	  house3:'/images/hitRunMan/house/house3.png',
	  start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
	  startTitle:'/images/hitRunMan/background/startTitle.png',
	  startBackground:'/images/hitRunMan/startBackground/startBackground.png',
	  snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
	  howToShare:'/images/hitRunMan/background/howToShare.png',
	  playAgain:'/images/hitRunMan/playAgain/playAgain.png',
	  shareButton:'/images/hitRunMan/playAgain/share.png',
	  resultSuccess:'/images/hitRunMan/playAgain/resultSuccess.png',
	  resultFail:'/images/hitRunMan/playAgain/resultFail.png',
	  endSign:'/images/hitRunMan/background/endSign.png',
	  startBgm:'/audio/start_bgm.mp3',
	  gameBgm:'/audio/hot_run.mp3',
	
	  start:{
	    start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
	    startTitle:'/images/hitRunMan/background/startTitle.png',
	    startBackground:'/images/hitRunMan/startBackground/startBackground.png',
	    gift:'/images/hitRunMan/gift/gift.json',
	    snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
	  },
	  game:{
	    leftFoot:'/images/hitRunMan/foot/leftFoot.json',
	    rightFoot:'/images/hitRunMan/foot/rightFoot.json',
	    runMan:'/images/hitRunMan/runMan/runMan.json',
	    gold:'/images/hitRunMan/gold/gold.json',
	    pa:'/images/hitRunMan/pa/pa.png',
	    house1:'/images/hitRunMan/house/house1.png',
	    house2:'/images/hitRunMan/house/house2.png',
	    house3:'/images/hitRunMan/house/house3.png',
	    playBg:'/images/hitRunMan/background/playBackground.png',
	  },
	  end:{
	    resultSuccess:'/images/hitRunMan/playAgain/resultSuccess.png',
	    resultFail:'/images/hitRunMan/playAgain/resultFail.png',
	    endSign:'/images/hitRunMan/background/endSign.png',
	    howToShare:'/images/hitRunMan/background/howToShare.png',
	  }
	};
	
	
	var cdn1Resource = {
	  leftFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/foot/leftFoot.json',
	  rightFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/foot/rightFoot.json',
	  gold:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/gold/gold.json',
	  playBg:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/playBackground.png',
	  gift:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/gift/gift.json',
	
	  runMan:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/runMan/runMan.json',
	  pa:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/pa/pa.png',
	  house1:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house1.png',
	  house2:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house2.png',
	  house3:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house3.png',
	  start_snowman:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/start_snowman/start_snowman.json',
	  startTitle:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250150/startTitle.png',
	  startBackground:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/startBackground/startBackground.png',
	  snowmanhand:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/snowmanhand/snowmanhand.png',
	  howToShare:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/howToShare.png',
	  playAgain:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/playAgain.png',
	  shareButton:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/share.png',
	  resultSuccess:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/resultSuccess.png',
	  resultFail:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/resultFail.png',
	  endSign:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/endSign.png',
	
	  startBgm:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/start_bgm.mp3',
	  gameBgm:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/hot_run.mp3',
	
	  start:{
	    start_snowman:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/start_snowman/start_snowman.json',
	    startTitle:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250150/startTitle.png',
	    startBackground:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/startBackground/startBackground.png',
	    gift:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/gift/gift.json',
	    snowmanhand:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/snowmanhand/snowmanhand.png',
	  },
	  game:{
	    leftFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/foot/leftFoot.json',
	    rightFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/foot/rightFoot.json',
	    runMan:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/runMan/runMan.json',
	    gold:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/gold/gold.json',
	    pa:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/pa/pa.png',
	    house1:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house1.png',
	    house2:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house2.png',
	    house3:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/house/house3.png',
	    playBg:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/playBackground.png',
	  },
	  end:{
	    resultSuccess:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/resultSuccess.png',
	    resultFail:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/playAgain/resultFail.png',
	    howToShare:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/howToShare.png',
	    endSign:'http://7u2min.com1.z0.glb.clouddn.com/Users/zyg/Documents/2015Christmas/uploadDir/1512250131/background/endSign.png',
	  }
	};
	
	
	var resourceMap = {
	  local:localResource,
	  cdn1:cdn1Resource
	};
	
	if(true){
	  resourcePosition = 'local';
	}
	
	module.exports = resourceMap[resourcePosition] || resourceMap['local'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/23.
	 */
	
	var R = __webpack_require__(3);
	
	var isReady = false;
	
	module.exports = function(render){
	
	  document.querySelector('#bgm').src = R.startBgm;
	
	  var readyFn = function (com) {
	    isReady = true;
	
	    var startStage = new PIXI.Container();
	    startStage.customTimer = 0;
	    var sprite = __webpack_require__(2);
	    var background = sprite.getIm({
	      img: R.startBackground,
	      'position.set': [320, 0],
	      'anchor.set': [0.5, 0],
	    });
	    var gift = __webpack_require__(5);
	    gift.down();
	    var snowmanhand = __webpack_require__(6)
	    var startSnowMan = __webpack_require__(7)
	
	    startStage.addChild(background)
	    startStage.addChild(startSnowMan)
	    startStage.addChild(snowmanhand)
	    startStage.addChild(gift)
	
	    startStage.render = function() {
	      //-----
	
	      if (startStage.customTimer <= 240) {
	        startStage.customTimer ++
	      } else if(snowmanhand.status == 0) {
	        snowmanhand.handdown()
	      }
	      if(snowmanhand.status == 2) {
	        snowmanhand.handup();
	        gift.up()
	      }
	      if(snowmanhand.status == 4) {
	        __webpack_require__(8)(render)
	        snowmanhand.status = 5;
	      }
	
	      //-----
	    }
	    render(startStage);
	  }
	
	  if(isReady){
	    readyFn();
	  }else{
	    var ready = __webpack_require__(26);
	    ready(R.start,readyFn);
	  }
	
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/24/15.
	 */
	
	
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(3);
	
	var gift = sprite.getMc({
	  maxFrame:2,
	  preFix:'gift',
	  'position.set':[46,800],
	  'scale.x': 1,
	  'scale.y': 1,
	  'anchor.set': [0, 0]
	});
	
	gift.status = 0
	
	gift.up = function() {
	  gift.gotoAndStop(1)
	  gift.status = 1
	}
	
	gift.down = function() {
	  gift.gotoAndStop(2)
	}
	
	gift.render = function() {
	  if(gift.status == 1) {
	    gift.y -=2
	    var a = (gift.y - 650) * 0.04
	    gift.x = 10 + a * a
	    if(gift.y < 500) {
	      gift.status = 2
	    }
	  }
	}
	
	module.exports = gift

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/24/15.
	 */
	var sprite = __webpack_require__(2)
	var R = __webpack_require__(3)
	
	var snowmanhand = sprite.getIm({
	  img: R.snowmanhand,
	  'anchor.set':[1, 1],
	  'position.set': [250,700],
	  'scale.x': 1,
	  'scale.y': 1,
	  'rotation':0,
	})
	
	snowmanhand.status = 0
	
	snowmanhand.handdown = function() {
	  snowmanhand.status = 1
	}
	
	snowmanhand.handup = function() {
	  snowmanhand.status = 3
	}
	
	snowmanhand.render = function() {
	  if(snowmanhand.status == 1) {
	    snowmanhand.rotation -= 0.01
	    if(snowmanhand.rotation <= -1.5) {
	      snowmanhand.rotation = -1.5
	      snowmanhand.status = 2
	    }
	  } else if (snowmanhand.status == 3) {
	    snowmanhand.rotation += 0.01
	    if (snowmanhand.rotation >= 0) {
	      snowmanhand.rotation = 0
	      snowmanhand.status = 4
	    }
	  }
	}
	
	module.exports = snowmanhand

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/23/15.
	 */
	var sprite = __webpack_require__(2);
	
	var startSnowMan = sprite.getMc({
	  maxFrame:5,
	  preFix:'start_snowman',
	  'position.set':[400,600],
	  'anchor.set':[0.5,0.5],
	  'scale.set':[1,1],
	  'animationSpeed':0.08
	});
	startSnowMan.play();
	
	module.exports = startSnowMan;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/23.
	 */
	
	var R = __webpack_require__(3);
	
	var isReady = false;
	
	var bgm = document.querySelector('#bgm');
	
	module.exports = function (render) {
	
	    var readyFn = function () {
	        bgm.src = R.gameBgm;
	        bgm.play();
	
	        isReady = true;
	        var mainStage = new PIXI.Container();
	
	        var foot = __webpack_require__(9);
	        var runMan = __webpack_require__(10);
	        var distance = __webpack_require__(16);
	
	        var gold = __webpack_require__(12);
	        var backgroundContainer = __webpack_require__(17);
	        var hitLevel = __webpack_require__(14);
	      var text = new PIXI.Text('点击左右脚追上圣诞老贼抢回礼物，\n' +
	      '追上后点击圣诞老人就可以打他，\n顶部有血条', {
	        font: '30px Arial',
	        fill: 0x666666,
	        align: 'left'
	      })
	      text.x = 0;
	      text.y = 90;
	        gold.off('touchstart');
	        gold.on('touchstart', function () {
	            mainStage.end(true);
	        });
	      text.alpha = 0.8
	
	        runMan.init();
	        gold.init();
	        distance.init();
	        foot.init();
	
	        mainStage.end = function (r) {
	            __webpack_require__(19)(render, r, foot.getCountRate());
	            bgm.pause();
	        }
	
	        mainStage.addChild(backgroundContainer);
	        mainStage.addChild(gold);
	        mainStage.addChild(runMan);
	        mainStage.addChild(distance);
	        mainStage.addChild(hitLevel);
	        mainStage.addChild(foot);
	        mainStage.addChild(text);
	        render(mainStage);
	    }
	
	
	    if(isReady){
	        readyFn();
	    }else{
	        var ready = __webpack_require__(26);
	        ready(R.game,readyFn);
	    }
	
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/8.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(3);
	
	var foot = new PIXI.Container();
	
	var leftFoot = sprite.getMc({
	    maxFrame:2,
	    preFix:'leftFoot',
	    'position.set':[0,1004],
	    'scale.x': 1,
	    'scale.y': 1,
	    'anchor.set': [0, 1]
	});
	
	var rightFoot = sprite.getMc({
	    maxFrame:2,
	    preFix:'rightFoot',
	    'position.set':[320,1004],
	    'scale.x': 1,
	    'scale.y': 1,
	    'anchor.set': [0, 1]
	});
	
	var l=true,r=true;
	
	
	//foot.interactive = true;
	leftFoot.interactive = true;
	rightFoot.interactive = true;
	
	
	//分别点击左右脚，加步数和计算速度。
	leftFoot.on('touchstart', function () {
	    if(l){
	        l = false;
	        r = true;
	        foot.footNum++;
	        foot.allCount++;
	        leftFoot.gotoAndStop(1);
	        rightFoot.gotoAndStop(0);
	    }
	});
	rightFoot.on('touchstart', function () {
	    if(r){
	        l = true;
	        r = false;
	        foot.footNum++;
	        foot.allCount++;
	        rightFoot.gotoAndStop(1);
	        leftFoot.gotoAndStop(0);
	    }
	    //@FOR TEST
	    //foot.footNum++
	});
	
	//initial speed
	foot.speed = 1;
	//步数
	foot.footNum = 0;
	//总步数
	foot.allCount = 0;
	//计算每10帧的速度
	foot.renderMaxNum = 10;
	
	
	foot.addChild(leftFoot);
	foot.addChild(rightFoot);
	
	var renderCount = foot.renderMaxNum;
	
	foot.getCountRate = function () {
	    return this.allCount/((+new Date) - this.startTime)*1000;
	}
	foot.init = function () {
	    this.allCount = 0;
	    this.startTime = +new Date();
	}
	
	foot.render = function () {
	  if(this.footNum >= 0.1) {
	    this.footNum -= 0.13;
	  } else {
	    this.footNum = 0
	  }
	    if(!(--renderCount)){
	        renderCount = foot.renderMaxNum
	        //移动速度，基本0.2,要非常快才有0.3。
	        if(true){
	            this.speed = foot.footNum/renderCount * 1000;//10;
	        }else{
	            this.speed = foot.footNum/renderCount * 5;//10;
	        }
	    }
	};
	
	module.exports = foot;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/10.
	 */
	var sprite = __webpack_require__(2);
	var spriteTools = __webpack_require__(11);
	
	var gold = __webpack_require__(12);
	
	var pa = __webpack_require__(13);
	
	var hitLevel = __webpack_require__(14);
	
	var loading = __webpack_require__(15);
	
	var initialY = 750;
	var initialX = 310;
	
	var runMan = sprite.getMc({
	    maxFrame:4,
	    preFix:'runMan',
	    'position.set':[initialX,initialY],
	    'scale.set': [0.5,0.5],
	    'anchor.set': [0.5, 0.5],
	    'animationSpeed':0.15,
	    'loop':true
	});
	runMan.play();
	//固定数值
	runMan.speed = 3.0;
	//血量
	runMan.maxHp = 200;
	runMan.hp = 200;
	
	runMan.canHit = false;
	
	
	var touchDurationStamp = 0;
	var touchOn = false;
	
	runMan.interactive = true;
	runMan.on('touchstart', function () {
	    touchDurationStamp = Date.now();
	    touchOn = true;
	    hitLevel.hitScore = 0;
	});
	document.querySelector('body').addEventListener('touchend', function () {
	    touchDurationStamp = Date.now() - touchDurationStamp;
	    touchOn = false;
	
	    if(!hitLevel.visible){
	
	    }else{
	
	        runMan.hitted(hitLevel.hitScore);
	    }
	
	    hitLevel.hitScore = 0;
	});
	
	
	
	runMan.fly = false;
	runMan.flyToSkyBefore = function () {
	    this.direction = spriteTools.makeIdentity([this.x,this.y]);
	    runMan.speed = 20;
	    runMan.fly = true;
	
	    gold.visible = true;
	}
	
	runMan.flyToSky = function () {
	
	    this.x -= this.direction[0] * this.speed;
	    this.y -= this.direction[1] * this.speed;
	    this.rotation += 0.1;
	    this.scale.x -= 0.015;
	    this.scale.y -= 0.015;
	
	    //游戏结束
	    if(this.x < 0 && this.y <0){
	
	        runMan.out = true;
	
	        if(!runMan.st){
	            runMan.st = true;
	            setTimeout(function () {
	                runMan.parent.end(true);
	            },2000)
	        }
	    }
	}
	
	runMan.hitted = function (score) {
	    this.hp -= score;
	
	    var p = 1 - this.hp/this.maxHp;
	
	    var remove = this.load(p*100+'%');
	
	    var paX = runMan.x + 40 * Math.random();
	    var paY = runMan.y + 40 * Math.random();
	
	    var removePa = pa(this.parent,paX,paY,runMan.scale);
	
	    setTimeout(removePa,500);
	
	    if(this.hp<0){
	        this.flyToSkyBefore();
	        remove();
	    }
	}
	
	//根据距离差，近大远小
	//最后消失在地平线上
	runMan.setMode = function (distance) {
	    if(this.fly){
	        return ;
	    }
	
	    distance = distance * 15;
	
	    if(distance>=1000) {
	        distance = 1000;
	    }
	    var s = 1-distance /1000;
	
	    if(s<0){
	        s = 0;
	    }
	
	    this.scale.set(s,s);
	    this.x = initialX + distance/2.2;
	    this.y = initialY - distance;
	
	    this.visible = this.y >= 280;
	};
	
	runMan.init = function () {
	    this.speed = 5.0;
	    this.hp = this.maxHp;
	    this.x = initialX;
	    this.y = initialY;
	    this.fly = false;
	    this.scale.set(0.5,0.5);
	    this.rotation = 0;
	    this.out = false;
	    this.st = false;
	
	    this.load = loading({
	        x:'10%',
	        y:'10px',
	        width:'80%',
	        height:'25px',
	        bg:'red',
	        loadColor:'#fff'
	    },0);
	
	}
	
	runMan.render = function () {
	    if(this.canHit && touchOn){
	        hitLevel.visible = true;
	
	        runMan.parent.addChild(hitLevel);
	
	        hitLevel.x = this.x - hitLevel.radius * hitLevel.scale.x;
	        hitLevel.y = this.y - hitLevel.radius * hitLevel.scale.y / 2;
	
	        hitLevel.hitScore++;
	        hitLevel.scale.x = 1 + hitLevel.hitScore * 0.05;
	        hitLevel.scale.y = 1 + hitLevel.hitScore * 0.05;
	    }else{
	        hitLevel.visible = false;
	        hitLevel.scale.set(0,0);
	    }
	
	    if(this.fly){
	        this.flyToSky();
	    }
	};
	
	module.exports = runMan;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var makeIdentity = function(a) {
	    if(a[0] == 0 && a[1] == 0) {
	        return [0, 0]
	    }
	    var b = Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
	    return [a[0] / b , a[1] / b]
	};
	
	var distance = function(x1, y1, x2, y2) {
	    return Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)), 0.5);
	}
	
	var extend = function(){
	    arguments = [].slice.call(arguments);
	    var l = arguments.length;
	    if(arguments.length>1){
	        var from = arguments[l-1],
	          target = arguments[l-2];
	
	        for(var k in from){
	            target[k] = from[k];
	        }
	        arguments.pop();
	
	        return extend.apply(null,arguments);
	    }else{
	        return arguments[0];
	    }
	};
	
	module.exports = {
	    makeIdentity:makeIdentity,
	    distance: distance,
	    extend:extend
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/20.
	 */
	var sprite = __webpack_require__(2);
	
	var gold = sprite.getMc({
	    maxFrame:4,
	    preFix:'gold',
	    'position.set':[535,400],
	    'anchor.set':[0.5,0.5],
	    'scale.set':[0.5,0.5],
	    'animationSpeed':0.1
	});
	
	gold.play();
	
	gold.visible = false;
	gold.interactive = true;
	gold.init = function () {
	    this.visible = false;
	}
	
	module.exports = gold;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/21.
	 */
	var sprite = __webpack_require__(2);
	
	var R = __webpack_require__(3);
	
	
	var pa = sprite.getIm({
	    img: R.pa,
	    'anchor.set':[1,0.5],
	    'scale.set':[0.25,0.25]
	})
	
	
	
	pa.render = function () {
	
	}
	
	module.exports = function (container,x,y,scale) {
	
	    pa.x = x;
	    pa.y = y;
	    pa.scale.set(scale.x,scale.y);
	
	    container.addChild(pa);
	
	    return function () {
	        container.removeChild(pa);
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/12/15.
	 */
	
	var hitLevel = new PIXI.Graphics();
	
	var initialR = 160;
	
	hitLevel.lineStyle(0);
	hitLevel.beginFill(0x999999, 0.5);
	hitLevel.drawCircle(160, 90,60);
	hitLevel.endFill();
	
	hitLevel.radius = initialR;
	
	hitLevel.hitScore = 0;
	
	hitLevel.visible = false;
	
	module.exports = hitLevel;

/***/ },
/* 15 */
/***/ function(module, exports) {

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/12.
	 */
	var runMan = __webpack_require__(10);
	var foot = __webpack_require__(9);
	
	var text = new PIXI.Text('距离米', {
	        font: '32px Arial',
	        fill: 0x999999,
	        align: 'center'
	    });
	
	text.x = 220;
	text.y = 730;
	
	var canHitMaxDistance = 100;
	
	var renderMaxCount = foot.renderMaxNum;
	//计数器，每X帧计算一次
	var renderCount = renderMaxCount;
	var distance = 10;
	
	
	text.calculateDistance = function(distance,speed,footSpeed){
	    var gap = (speed - footSpeed ) ;
	
	    distance = parseFloat(distance);
	
	
	    distance += distance <= 1000 ?gap:
	        gap<0?gap:1;
	
	    distance = distance <= 0 ? 0:distance;
	
	    if(distance<=40){
	        this.style.fill = '#999999';
	        this.style.font =  "32px Arial";
	    }
	    if(distance > 40 && distance < 300){
	        this.style.fill = '#FFC200';
	        this.style.font =  "40px Arial";
	    }else if(distance >= 300){
	        this.style.fill = '#FF0000';
	        this.style.font =  "48px Arial";
	    }
	
	    distance = distance.toFixed(1);
	
	    return distance;
	};
	
	text.init = function () {
	    distance = 10;
	    this.style.fill = '#999999';
	    this.fontSize = '32px';
	    this.failing = false;
	}
	
	text.gameFail = function () {
	    if(!this.failing){
	        this.failing = true;
	        setTimeout(function () {
	            text.parent.end(false);
	        },1500);
	    }
	}
	
	text.render = function () {
	
	    if(!--renderCount && ! runMan.out){
	
	        distance = this.calculateDistance(distance,runMan.speed,foot.speed);
	
	        runMan.setMode(distance);
	    }
	    if(renderCount === 0){
	        renderCount = renderMaxCount;
	    }
	
	    runMan.canHit = distance <= canHitMaxDistance;
	
	    if(distance > 500){
	        this.text = '圣诞老贼逃走了！'
	        this.gameFail();
	    }else{
	        this.text = '距离'+distance+'米';
	    }
	};
	
	
	module.exports = text;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 15/12/21.
	 */
	
	var sprite = __webpack_require__(2);
	var houseGen = __webpack_require__(18)
	var R = __webpack_require__(3)
	var backgroundContainer = new PIXI.Container();
	
	var playBG = sprite.getIm({
	  img: R.playBg,
	  'anchor.set':[0, 0],
	  'position.set': [0,0],
	  'scale.x': 1,
	  'scale.y': 1
	});
	
	var count = 0;
	
	backgroundContainer.configure = function() {
	  count = 0;
	  backgroundContainer.addChild(playBG)
	  for(var i = 0; i < 3; i ++) {
	    var house = houseGen(i);
	    backgroundContainer.addChild(house);
	    house.updateWithProgress(0.3 + i * 0.4);
	  }
	}
	
	backgroundContainer.addNewHouse = function() {
	  var house = houseGen(parseInt(Math.random() * 3));
	  backgroundContainer.addChildAt(house, 1);
	  house.updateWithProgress(0.2);
	}
	
	backgroundContainer.configure();
	backgroundContainer.render = function () {
	  if(this.children.length < 4) {
	    backgroundContainer.addNewHouse();
	  }
	    this.children.forEach(function(child){
	        if(child.render){
	            child.render();
	        }
	    })
	}
	
	module.exports = backgroundContainer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/21/15.
	 */
	
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(3);
	var foot = __webpack_require__(9)
	
	var houseGenerator = function(random) {
	
	  var house = sprite.getIm({
	    img: map[random],
	    'anchor.set':[1, 1],
	    'position.set': [100,100],
	    'scale.x': 1,
	    'scale.y': 1
	  });
	  house.progress = 0;
	  house.render = function () {
	    this.progress += 0.01 * (foot.speed / 3);
	    house.updateWithProgress(this.progress)
	    if (this.progress >= 1.5) {
	      this.parent.removeChild(this);
	    }
	  }
	  house.updateWithProgress = function(progress) {
	    this.progress = progress
	    house.x = 580 - 400 * this.progress * this.progress;
	    house.y = 360 + 400 * (1.2 - 0.05 * this.progress) * this.progress * this.progress;
	    house.scale.x = this.progress * 1.1
	    house.scale.y = this.progress
	  }
	  return house;
	}
	
	
	var map = [R.house1, R.house2, R.house3, R.house2, R.house1, R.house3, R.house2, R.house1, R.house3];
	
	module.exports = houseGenerator;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	
	var R = __webpack_require__(3);
	var isReady = false;
	module.exports = function (render, success, score) {
	    var loadBox = document.querySelector('#loadingBox');
	    if(loadBox){
	        loadBox.remove();
	    }
	
	    var readyFn = function () {
	        isReady = true;
	
	        if(!score){
	            score = 0;
	        }
	        score = score.toFixed(2);
	      document.title = '在和圣诞老贼的搏斗中，我的手速竟以达到 ' + score + ' 每秒的境地！谁来与我一战！'
	      var container = new PIXI.Container();
	        var sign = __webpack_require__(20);
	        var share = __webpack_require__(21)
	        var playAgain = __webpack_require__(24);
	        var result = __webpack_require__(25)(!!success)
	        var text = new PIXI.Text(score, {
	            font: '60px Arial',
	            fill: 0xffffff,
	            align: 'center'
	        })
	        text.x = 140;
	        text.y = 225;
	
	        playAgain.interactive=true;
	        playAgain.on('touchstart', function () {
	            __webpack_require__(8)(render);
	            playAgain.off('touchstart');
	        });
	
	        container.addChild(sign)
	        container.addChild(playAgain)
	        container.addChild(share);
	        container.addChild(text)
	        container.addChild(result)
	        render(container);
	    }
	
	
	    if(isReady){
	        readyFn();
	    }else{
	        var ready = __webpack_require__(26);
	        ready(R.end,readyFn);
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	var R = __webpack_require__(3);
	var sprite = __webpack_require__(2);
	
	var endBg = sprite.getIm({
	    img: R.endSign,
	    'position.set':[320,0],
	    'anchor.set':[0.5,0]
	});
	
	module.exports = endBg;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var R = __webpack_require__(3);
	var sprite = __webpack_require__(2);
	
	var shareTips = __webpack_require__(22);
	
	var share = sprite.getIm({
	  img: R.shareButton,
	  'position.set':[640,0],
	  'anchor.set':[1,0]
	});
	
	share.interactive = true;
	share.on('touchstart', function () {
	
	    var remove = shareTips(R.howToShare);
	
	});
	
	
	
	
	module.exports = share;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/24.
	 */
	
	var utils = __webpack_require__(23);
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

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/12/23.
	 */
	module.exports = {
	    setStyle: function (node, style) {
	        for (var k in style) {
	            node.style[k] = style[k];
	        }
	        return node;
	    }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/24/15.
	 */
	var R = __webpack_require__(3);
	var sprite = __webpack_require__(2);
	
	var playAgain = sprite.getIm({
	  img: R.playAgain,
	  'position.set':[320,502],
	  'anchor.set':[0.5,0.5]
	});
	
	module.exports = playAgain;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 12/25/15.
	 */
	
	var sprite = __webpack_require__(2)
	var R = __webpack_require__(3)
	
	module.exports = function(success) {
	  var result = sprite.getIm({
	    img: success ? R.resultSuccess : R.resultFail,
	    'position.set':[140, 100],
	    'anchor.set':[0.5, 0.5],
	    'rotation':-0.6
	  });
	  return result
	}

/***/ },
/* 26 */
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
	            if(source.hasOwnProperty(k)){
	                loader.add(k, source[k]);
	            }
	        }
	    }
	
	    loader.on('progress', function (a, b) {
	        //console.log.apply(console, arguments);
	    });
	
	    loader.once('complete', function(){
	        console.log('load done');
	        cb();
	        loadOthers(loader,source.next);
	    });
	
	    loader.load();
	};

/***/ }
/******/ ]);
//# sourceMappingURL=hitRunManIndex.js.map
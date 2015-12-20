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
	ready(__webpack_require__(4),function (com) {
	    var mainStage = new PIXI.Container();
	
	    var foot = __webpack_require__(5);
	    var runMan = __webpack_require__(6);
	    var distance = __webpack_require__(12);
	
	    var hitLevel = __webpack_require__(11);
	
	    var flyFistContainer = __webpack_require__(9);
	    var flyFistBuild = __webpack_require__(8);
	
	    mainStage.addChild(foot);
	    mainStage.addChild(runMan);
	    mainStage.addChild(distance);
	    mainStage.addChild(hitLevel);
	    mainStage.addChild(flyFistContainer);
	
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
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var localResource = {
	  hand:'/images/hitRunMan/hand/hand.png',
	  ttt:'/images/hitRunMan/hand/ttt.png',
	  leftFoot:'/images/hitRunMan/foot/leftFoot.png',
	  rightFoot:'/images/hitRunMan/foot/rightFoot.png',
	  runMan:'/images/hitRunMan/runMan/runMan.json',
	  fist:'/images/hitRunMan/fist/fist.png',
	  flyFist:'/images/hitRunMan/flyFist/flyFist.png',
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
	var R = __webpack_require__(4);
	
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
	
	
	//分别点击左右脚，加步数和计算速度。
	leftFoot.on('touchstart', function () {
	    if(l){
	        l = false;
	        r = true;
	        foot.footNum++
	    }
	});
	rightFoot.on('touchstart', function () {
	    if(r){
	        l = true;
	        r = false;
	        foot.footNum++
	    }
	    //@FOR TEST
	    //foot.footNum++
	});
	
	//initial speed
	foot.speed = 1;
	//步数
	foot.footNum = 0;
	//计算每10帧的速度
	foot.renderMaxNum = 10;
	
	
	foot.addChild(leftFoot);
	foot.addChild(rightFoot);
	
	var renderCount = foot.renderMaxNum;
	
	foot.render = function () {
	    if(!(--renderCount)){
	        renderCount = foot.renderMaxNum
	        //移动速度，基本0.2,要非常快才有0.3。
	        this.speed = foot.footNum/renderCount * 20;
	        console.log(this.speed);
	        foot.footNum = 0;
	    }
	};
	
	
	
	module.exports = foot;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/10.
	 */
	var sprite = __webpack_require__(2);
	var spriteTools = __webpack_require__(7);
	
	var flyFist = __webpack_require__(8);
	var fist = __webpack_require__(10);
	
	var hitLevel = __webpack_require__(11);
	
	var runMan = sprite.getMc({
	    maxFrame:4,
	    preFix:'runMan',
	    'position.set':[320,400],
	    'scale.x': 0.5,
	    'scale.y': 0.5,
	    'anchor.set': [0.5, 0.5],
	    'animationSpeed':0.15,
	    'loop':true
	});
	runMan.play();
	//固定数值
	runMan.speed = 1.5;
	
	runMan.canHit = false;
	
	
	var initialY = 400;
	
	var touchDurationStamp = 0;
	var touchOn = false;
	
	runMan.interactive = true;
	runMan.on('touchstart', function () {
	    touchDurationStamp = Date.now();
	    touchOn = true;
	    hitLevel.hitScore = 0;
	});
	runMan.on('touchend', function () {
	    touchDurationStamp = Date.now() - touchDurationStamp;
	    touchOn = false;
	
	    console.log('score:',hitLevel.hitScore);
	    if(!hitLevel.visible){
	    }else{
	        fist();
	        runMan.flyToSkyBefore();
	    }
	
	    hitLevel.hitScore = 0;
	
	
	});
	
	runMan.fly = false;
	runMan.flyToSkyBefore = function () {
	    this.direction = spriteTools.makeIdentity([this.x,this.y]);
	    console.log(this.direction);
	    runMan.speed = 20;
	    runMan.fly = true;
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
	
	    }
	}
	
	//根据距离差，近大远小
	//最后消失在地平线上
	runMan.setMode = function (distance) {
	    if(this.fly){
	        return ;
	    }
	
	    distance = distance * 10;
	
	    if(distance>=1000) {
	        distance = 1000;
	    }
	    var s = 1-distance /1000;
	    this.scale.set(s,s);
	    this.y = initialY - distance/8;
	
	};
	
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
	    }
	
	    if(this.fly){
	        this.flyToSky();
	    }
	};
	
	module.exports = runMan;

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/19.
	 */
	var sprite = __webpack_require__(2);
	var spriteTools = __webpack_require__(7);
	
	var R = __webpack_require__(4);
	
	var runMan = __webpack_require__(6);
	var flyFistContainer = __webpack_require__(9);
	
	var remove = null;
	
	var fistTrance = function (num,tx,ty) {
	
	    var d = num%2 === 0 ?1:-1;
	
	    var myX = 320 + Math.ceil(num/2)*90  * d;
	    var myY = 600;
	
	    var myRotation = -Math.tanh((myX-tx)/(myY-ty));
	
	    return {
	        x: myX,
	        y: myY,
	        rotation: myRotation
	    }
	};
	
	var flyFistSpeed = 25;
	
	var creator = function (config,tx,ty) {
	
	    var flyFist = sprite.getIm({
	        img: R.flyFist,
	        'anchor.set': [0.5, 0.5],
	        'scale.set':[0.25,0.25]
	    });
	
	
	    var direction = null;
	    var gapX = config.x-tx;
	    var gapY = config.y-ty;
	
	    direction = spriteTools.makeIdentity([gapX,gapY]);
	
	    console.log(direction,config.x,tx);
	
	
	    flyFist.init = function () {;
	
	    }
	
	    flyFist.render = function () {
	
	        this.x -= flyFistSpeed * direction[0];
	        this.y -= flyFistSpeed * direction[1];
	
	
	        if(this.y - 100 > ty){
	
	
	        }else{
	            //flyFist.parent.removeChild(this);
	        }
	    };
	
	    flyFist.position.set(config.x, config.y);
	    flyFist.rotation = config.rotation;
	
	
	    flyFistContainer.addChild(flyFist);
	
	    return function () {
	        flyFistContainer.removeChild(flyFist);
	    }
	};
	
	
	module.exports = function (num,targetX,targetY) {
	
	    var arr = [];
	    var i = 0;
	
	    for (; i < num; i++) {
	        arr.push(creator(fistTrance(i,targetX,targetY),targetX,targetY));
	    }
	
	    return function () {
	
	        arr.forEach(function(remove){
	            remove();
	        });
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/19.
	 */
	var sprite = __webpack_require__(2);
	
	var flyingContainer = new PIXI.Container();
	
	flyingContainer.render = function () {
	    this.children.forEach(function(child){
	        if(child.render){
	            child.render();
	        }
	    })
	}
	
	module.exports = flyingContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/20.
	 */
	var sprite = __webpack_require__(2);
	var spriteTools = __webpack_require__(7);
	
	var flyFistContainer = __webpack_require__(9);
	
	var R = __webpack_require__(4);
	
	var fist = sprite.getIm({
	    img: R.fist,
	    'position.set':[660,400],
	    'anchor.set':[1,0.5],
	    'scale.set':[0.25,0.25]
	})
	
	fist.render = function () {
	
	}
	
	
	module.exports = function () {
	
	    flyFistContainer.addChild(fist);
	
	    return function () {
	        flyFistContainer.removeChild(fist);
	    }
	};

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/12/12.
	 */
	var runMan = __webpack_require__(6);
	var foot = __webpack_require__(5);
	
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
	
	var calculateDistance = function(distance,speed,footSpeed){
	    var gap = (speed - footSpeed ) * 2;
	
	    distance = parseFloat(distance);
	
	    distance += distance <= 1000 ?gap:
	        gap<0?gap:1;
	
	    distance = distance <= 0 ? 0:distance;
	
	    distance = distance.toFixed(1);
	
	    return distance;
	};
	
	text.render = function () {
	
	    if(!--renderCount && ! runMan.out){
	
	        distance = calculateDistance(distance,runMan.speed,foot.speed);
	
	        runMan.setMode(distance);
	
	        renderCount = renderMaxCount;
	
	    }
	
	    runMan.canHit = distance <= canHitMaxDistance;
	
	    this.text = '距离'+distance+'米';
	};
	
	
	module.exports = text;


/***/ }
/******/ ]);
//# sourceMappingURL=hitRunManIndex.js.map
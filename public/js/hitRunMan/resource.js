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
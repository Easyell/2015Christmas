/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  leftFoot:'/images/hitRunMan/foot/leftFoot.json',
  rightFoot:'/images/hitRunMan/foot/rightFoot.json',
  runMan:'/images/hitRunMan/runMan/runMan.json',
  gold:'/images/hitRunMan/gold/gold.json',
  pa:'/images/hitRunMan/pa/pa.png',
  house1:'/images/hitRunMan/house/house1.png',
  house2:'/images/hitRunMan/house/house2.png',
  house3:'/images/hitRunMan/house/house3.png',
  playBg:'/images/hitRunMan/background/playBackground.png',
  start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
  startTitle:'/images/hitRunMan/startTitle.png',
  startBackground:'/images/hitRunMan/startBackground/startBackground.png',
  gift:'/images/hitRunMan/gift/gift.json',
  snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
  howToShare:'/images/hitRunMan/background/howToShare.png',
  playAgain:'/images/hitRunMan/playAgain/playAgain.png',
  shareButton:'/images/hitRunMan/playAgain/share.png',
  resultSuccess:'/images/hitRunMan/playAgain/resultSuccess.png',
  resultFail:'/images/hitRunMan/playAgain/resultFail.png',

  startBgm:'audio/start_bgm.mp3',
  gameBgm:'/audio/hot_run.mp3',

  start:{
    start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
    startTitle:'/images/hitRunMan/startTitle.png',
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
    howToShare:'/images/hitRunMan/background/howToShare.png',
  }
};


var cdn1Resource = {

};




var resourceMap = {
  local:localResource,
  cdn1:cdn1Resource
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];
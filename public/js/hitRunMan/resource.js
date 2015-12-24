/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  leftFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Ffoot%2FleftFoot.json',
  rightFoot:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Ffoot%2FrightFoot.json',
  runMan:'/images/hitRunMan/runMan/runMan.json',
  gold:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fgold%2Fgold.json',
  pa:'/images/hitRunMan/pa/pa.png',
  house1:'/images/hitRunMan/house/house1.png',
  house2:'/images/hitRunMan/house/house2.png',
  house3:'/images/hitRunMan/house/house3.png',
  playBg:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fbackground%2FplayBackground.png',
  start_snowman:'/images/hitRunMan/start_snowman/start_snowman.json',
  startTitle:'/images/hitRunMan/startTitle.png',
  startBackground:'/images/hitRunMan/startBackground/startBackground.png',
  gift:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fgift%2Fgift.json',
  snowmanhand:'/images/hitRunMan/snowmanhand/snowmanhand.png',
  howToShare:'/images/hitRunMan/background/howToShare.png',
  playAgain:'/images/hitRunMan/playAgain/playAgain.png',
  shareButton:'/images/hitRunMan/playAgain/share.png',
  resultSuccess:'/images/hitRunMan/playAgain/resultSuccess.png',
  resultFail:'/images/hitRunMan/playAgain/resultFail.png',
  endSign:'//images/hitRunMan/background/endSign.png',
  startBgm:'/audio/start_bgm.mp3',
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
    howToShare:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fbackground%2FhowToShare.png',
  }
};


var cdn1Resource = {
  leftFoot:'/images/hitRunMan/foot/leftFoot.json',
  rightFoot:'/images/hitRunMan/foot/rightFoot.json',
  runMan:'/images/hitRunMan/runMan/runMan.json',
  gold:'/images/hitRunMan/gold/gold.json',
  pa:'/images/hitRunMan/pa/pa.png',
  endSign:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fbackground%2FendSign.png',
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

  startBgm:'/audio/start_bgm.mp3',
  gameBgm:'http://7u2min.com1.z0.glb.clouddn.com/Users%2Fzyg%2FDocuments%2F2015Christmas%2FuploadDir%2F1512250131%2Fhot_run.mp3',

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




var resourceMap = {
  local:localResource,
  cdn1:cdn1Resource
};

module.exports = resourceMap['local'] || resourceMap['local'];
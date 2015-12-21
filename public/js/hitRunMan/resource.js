/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  hand:'/images/hitRunMan/hand/hand.png',
  ttt:'/images/hitRunMan/hand/ttt.png',
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
};

var resourceMap = {
  local:localResource,
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];
/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  hand:'/images/hitRunMan/hand/hand.png',
  ttt:'/images/hitRunMan/hand/ttt.png',
  leftFoot:'/images/hitRunMan/foot/leftFoot.png',
  rightFoot:'/images/hitRunMan/foot/rightFoot.png',
  runMan:'/images/hitRunMan/runMan/runMan.json',
  fist:'/images/hitRunMan/fist/fist.json',
  flyFist:'/images/hitRunMan/flyFist/flyFist.png',
};

var resourceMap = {
  local:localResource,
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];
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
};

var resourceMap = {
  local:localResource,
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];
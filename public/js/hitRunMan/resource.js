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
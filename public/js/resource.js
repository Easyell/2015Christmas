/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  deer:'/images/deer/deer.json',
  oldman:'/images/oldman/oldman.png'
};

var resourceMap = {
  local:localResource,
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];
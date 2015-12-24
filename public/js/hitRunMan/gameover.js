/**
 * Created by zyg on 15/12/24.
 */

var R = require('./resource');

module.exports = function (render) {

    var container = new PIXI.Container();

  var  score = 0
    var sign = require('./sprites/sign');
    var share = require('./sprites/share')
    var playAgain = require('./sprites/playAgain')
    var text = new PIXI.Text(score, {
      font: '60px Arial',
      fill: 0xffffff,
      align: 'center'
    });
  text.x = 180;
  text.y = 230;
  container.addChild(sign)
  container.addChild(playAgain)
  container.addChild(share);
  container.addChild(text)

    render(container);
};
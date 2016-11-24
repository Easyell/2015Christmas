/**
 * Created by zyg on 15/11/10.
 */
var path = require('path');
var qnUpload = require('gulp-qiniu');

var src = path.resolve(__dirname,'../public/images/hitRunMan/*/*.png');
// var src = path.resolve(__dirname,'../public/audio/*');

var optionDir = '/runman/1/'

module.exports = function(gulp){
  gulp.task('qiniu',function(){
    gulp.src(src).pipe(qnUpload({
      accessKey: "EyEwm6Bjadr4ojSFxpKWt6k-PoyT99D5l_qMCEaL",
      secretKey: "xOUHlBygVg_dIxPcgWmEVu7GG5jl_XVQ57mrV7o0",
      bucket: "pixigame",
      private: false
    },{
      dir:optionDir,
      versioning: false,
      versionFile: './cdn.json'
    }))
  });
};

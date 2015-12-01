/**
 * Created by zyg on 15/11/10.
 */
var path = require('path');
var qnUpload = require('gulp-qiniu');

var src = path.resolve(__dirname,'../public/assets/**/**');

var optionDir = path.resolve(__dirname,'../uploadDir/');
module.exports = function(gulp){
  gulp.task('qiniu',function(){
    gulp.src(src).pipe(qnUpload({
      accessKey: "Your_Access_Key",
      secretKey: "Your_Secret_key",
      bucket: "Your_Bucket_Name",
      private: false
    },{
      dir:optionDir,
      versioning: true,
      versionFile: './cdn.json'
    }))
  });
};
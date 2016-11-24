var path = require('path');
var fs = require('fs');
// 引入 gulp
var gulp = require('gulp');
var gutil = require('gulp-util');


var tasksPath = path.resolve(__dirname,'./tasks/');
var taskList = fs.readdirSync(tasksPath).filter(function(taskName) {
  return taskName != 'cdn.json'
}).forEach(function(taskName){
        var taskFn = require(path.resolve(tasksPath,taskName));
        taskFn(gulp);
    });

//默认任务
gulp.task('development', function(){
  //gulp.start('webpack');
  gulp.start('webpackDevServer');
  //gulp.start(['webpack','webpackDevServer']);
});

gulp.task('product',function(){
  gulp.start('webpack');
});

module.exports = gulp;

// Generated by CoffeeScript 1.8.0
var fs = require('fs');
var path = require('path');

var webpack = require('webpack');

var webpackDevPort = 7301;

var entry = {};

//获取到所有的js入口
var jsMainDir = './public/js/';
var list = fs.readdirSync(jsMainDir);

list.filter(function(name){
  return !/\./.test(name);
}).map(function(name){
  return [
      name + 'Index',
      path.resolve(__dirname,jsMainDir,name,'main.js')
  ]
}).forEach(function(kvArr){
  entry[kvArr[0]] = kvArr[1];
});



var uglify = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});

var definePlugin = new webpack.DefinePlugin({
  env:{
    isDevelopment:process.env.NODE_ENV !== 'product'
  }

});

var plugins = [definePlugin];


if(process.env.NODE_ENV === 'product'){
  plugins.push(uglify);
}

module.exports = {
  webpackDevPort: webpackDevPort,
  plugins:plugins,
  resolve: {
    extensions: ['', '.js']
  },
  entry: entry,
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: "http://localhost:" + webpackDevPort + "/public/dist",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      }
    ]
  },
  devtool: 'source-map'
};

//# sourceMappingURL=webpack.config.js.map

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var clean= require("gulp-clean");
var webpackConfig = require("./webpack.config.js");
var tinylr = require('tiny-lr');

var server; // cache livereload server

gulp.task("default", ["build"], function() {});

gulp.task("watch", ["webpack:build-dev"], function() {
  server = tinylr();
  server.listen(35729, function(err) {
    if(err) {
      gutil.log("[livereload]", err);
      return;
    }
    gutil.log("[livereload]", 'Listening on port: ' + 35729);
  })


  gulp.watch(["client/**"], function(event) {
    gulp.run("livereload");
  });
});

gulp.task("livereload", ["webpack:build-dev"], function() {
  gutil.log("[livereload]", 'Livereload bundle.js');
  server.changed({
    body: {
      files: ["main.js"]
    }
  });
})

gulp.task("build", ["clean", "webpack:build"], function() {});

gulp.task("webpack:build", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("clean", function() {
  gulp.src('./dist', {read: false})
    .pipe(clean());
});
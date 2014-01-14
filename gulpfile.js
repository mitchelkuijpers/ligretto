var gulp = require("gulp");
var gutil = require("gulp-util");
var clean = require('gulp-clean');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});


gulp.task('watch', function() {
    gulp.run('webpack');
    gulp.watch('client/**', function(event) {
        gulp.run('webpack');
    });
});

gulp.task('clean', function() {
    gulp.src('build')
        .pipe(clean());
});

gulp.task('default', function() {
    gulp.run('clean', 'webpack');
});
var gulp = require("gulp");
var gutil = require("gulp-util");
var clean = require('gulp-clean');
var webpack = require("webpack");
var tinylr = require('tiny-lr'); // Live reload!
var webpackConfig = require("./webpack.config.js");

var server;

gulp.task("webpack", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) {
            throw new gutil.log("[webpack]", err);
            callback();
        } else {
            gutil.log("[webpack]", stats.toString({
                colors: true
            }));
        }

        callback();
    });
});

gulp.task('liveReload', ['webpack'], function() {
    gutil.log("[livereload]", 'Livereload bundle.js');
    server.changed({
        body: {
            files: ["bundle.js"]
        }
    });
});


gulp.task('watch', function() {
    server = tinylr();
    server.listen(35729, function(err) {
        if(err) {
            gutil.log("[livereload]", err);
            return;
        }
        gutil.log("[livereload]", 'Listening on port: ' + 35729);
    })


    gulp.run('webpack');
    gulp.watch('client/**', function(event) {
        gulp.run('liveReload');
    });
});

gulp.task('clean', function() {
    gulp.src('build')
        .pipe(clean());
});

gulp.task('default', function() {
    gulp.run('clean', 'webpack');
});
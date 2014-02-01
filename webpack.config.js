var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry : "./client/app.js",
  output : {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module : {
    loaders : [
      { test : /\.js$/, loader : "jsx-loader" },
      { test : /\.css$/, loader : "style-loader!css-loader" },
      { test : /\.less$/, loader : "style-loader!css-loader!less-loader" },
      { test : /\.png$/, loader : "url-loader?mimetype=image/png"},
      { test : /\.gif$/, loader : "url-loader?mimetype=image/gif"},
      { test : /\.woff$/, loader : "url-loader?limit=10000&minetype=application/font-woff" },
      { test : /\.ttf$/, loader : "file-loader" },
      { test : /\.eot$/, loader : "file-loader" },
      { test : /\.svg$/, loader : "file-loader" }
    ]
  },
  plugins : [],
  cache : true
}
var webpack = require("webpack");

module.exports = {
    entry: "./client/app.js",
    output: {
        path: './build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: "jsx-loader" },
            { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" }
        ]
    },
    debug: true,
    cache: true,
    devtool: 'source-map',
    stats: {
        colors: true,
        reasons: true
    }
//    plugins: [
//        new webpack.optimize.UglifyJsPlugin()
//    ]
}
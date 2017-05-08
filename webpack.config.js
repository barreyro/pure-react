var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
      }
    ]
  }
}

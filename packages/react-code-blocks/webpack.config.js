var BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`)
  .BundleAnalyzerPlugin
var CompressionPlugin = require(`compression-webpack-plugin`)

var UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
var webpack = require(`webpack`)

var path = require(`path`)

module.exports = {
  entry: `./src/index.js`,
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `index.js`,
    libraryTarget: `commonjs2`,
  },
  mode: `production`,
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`production`),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      algorithm: `gzip`,
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        extractComments: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, `src`),
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`env`],
          },
        },
      },
    ],
  },
  externals: {
    react: `commonjs react`,
  },
}

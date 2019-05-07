var BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`)
  .BundleAnalyzerPlugin
var CompressionPlugin = require(`compression-webpack-plugin`)

var UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
var webpack = require(`webpack`)

var path = require(`path`)

module.exports = {
  entry: {
    index: `./src/index.js`,
    a11yDark: `./src/themes/a11y-dark.js`,
    a11yLight: `./src/themes/a11y-light.js`,
    anOldHope: `./src/themes/an-old-hope.js`,
    androidstudio: `./src/themes/androidstudio.js`,
    arta: `./src/themes/arta.js`,
    atomOneDark: `./src/themes/atom-one-dark.js`,
    atomOneLight: `./src/themes/atom-one-light.js`,
    codepen: `./src/themes/codepen.js`,
    defaultTheme: `./src/themes/defaultTheme.js`,
    dracula: `./src/themes/dracula.js`,
    far: `./src/themes/far.js`,
    github: `./src/themes/github.js`,
    googlecode: `./src/themes/googlecode.js`,
    hopscotch: `./src/themes/hopscotch.js`,
    hybrid: `./src/themes/hybrid.js`,
    irBlack: `./src/themes/ir-black.js`,
    monoBlue: `./src/themes/mono-blue.js`,
    monokaiSublime: `./src/themes/monokai-sublime.js`,
    monokai: `./src/themes/monokai.js`,
    nord: `./src/themes/nord.js`,
    obsidian: `./src/themes/obsidian.js`,
    ocean: `./src/themes/ocean.js`,
    paraisoDark: `./src/themes/paraiso-dark.js`,
    paraisoLight: `./src/themes/paraiso-light.js`,
    pojoaque: `./src/themes/pojoaque.js`,
    purebasic: `./src/themes/purebasic.js`,
    railscast: `./src/themes/railscast.js`,
    rainbow: `./src/themes/rainbow.js`,
    shadesOfPurple: `./src/themes/shades-of-purple.js`,
    solarizedDark: `./src/themes/solarized-dark.js`,
    solarizedLight: `./src/themes/solarized-light.js`,
    sunburst: `./src/themes/sunburst.js`,
    themeBuilder: `./src/themes/themeBuilder.js`,
    tomorrowNightBlue: `./src/themes/tomorrow-night-blue.js`,
    tomorrowNightBright: `./src/themes/tomorrow-night-bright.js`,
    tomorrowNightEighties: `./src/themes/tomorrow-night-eighties.js`,
    tomorrowNight: `./src/themes/tomorrow-night.js`,
    tomorrow: `./src/themes/tomorrow.js`,
    vs2015: `./src/themes/vs2015.js`,
    xt256: `./src/themes/xt256.js`,
    zenburn: `./src/themes/zenburn.js`,
    Code: `./src/components/Code.js`,
    CodeBlock: `./src/components/CodeBlock.js`,
  },
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `[name].js`,
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

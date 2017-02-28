const path = require('path');
const ngtools = require('@ngtools/webpack');
const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "angular": "angular/angular.js"
    }
  },
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    main: './src/main.ts'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "[name].js"
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: "./src/main.ts"
    }),
    // new CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor', 'main'].reverse(),
      minChunks: Infinity
    })
    // new CommonsChunkPlugin({
    //   async: true
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
	  {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'raw-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
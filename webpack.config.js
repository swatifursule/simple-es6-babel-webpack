 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
    	app: './main.js',
    	ratefinder: './ratefinder.js'
     },
     mode: 'development',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].bundle.js'
     },
     module: {
     rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }
    ],
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };

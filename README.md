npm install http-server --save-dev

===================================================================<br>
<b>Babel setup using:</b><br>

npm init
npm install babel-cli babel-core --save-dev
npm install babel-preset-es2015 --save-dev

Inside package.json
"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server"
},

Run application using:
npm run babel && npm start

====================================================================<br>
<b>Webpack setup </b><br>
npm install babel-loader webpack --save-dev

package.json
"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server",
    "webpack": "webpack"
},

new file webpack.config.js

var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [  -----> use rules here
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };

Run app using

npm run webpack && npm start

====================================================================

ES6 features:

let,
Destructuring,
Arrow functions,
modules,
classes,
promises

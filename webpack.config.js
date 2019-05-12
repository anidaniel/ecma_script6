// module.exports = {
//     //mode: 'development'
//     mode: 'production',
//     entry: ['./app/index.js'],
//     output: {
//         path: "./build",
//         filename: 'bundle.js'
//     }
// }

const path = require('path');

module.exports = {
  mode: 'none',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
      loaders: [
          {
              loader: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/
          }
      ]
  },
  
  devServer: {
      port: 3000,
      contentBase: './build',
      inline: true
  }
};
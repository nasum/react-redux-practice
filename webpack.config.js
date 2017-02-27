const path = require('path');

module.exports = {
  entry: './js/src/index.js',
  output: {
    path: path.resolve(__dirname, 'js/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  }
};

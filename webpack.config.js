const path = require('path');

module.exports = () => {
  return {
    entry: ['@babel/polyfill', './src/index.js'],

    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }],
    },

    mode: 'development',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};

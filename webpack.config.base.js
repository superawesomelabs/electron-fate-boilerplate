var path = require('path');
const constants = require('fate-core')();

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ],
  postcss: [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-constants')({
      defaults: constants
    }),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: 'last 2 versions'
    }),
    require('lost')
  ]
};

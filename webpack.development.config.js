const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
});

const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
});

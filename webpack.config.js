const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log(process.env.NODE_ENV);
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: './src/app.js',
	mode: devMode ? 'development' : 'production',
	output: {
		path: path.join(__dirname, 'public', 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				},
				test: /\.jsx?$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devtool: devMode ? 'inline-source-map' : 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'styles.css'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		publicPath: '/dist/'
	}
};

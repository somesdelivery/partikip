// Libs
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

// CSS Extractor
const StyleTextPlugin = new ExtractTextPlugin("styles.css");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: './src/index.hbs'
});

module.exports = {

	// Main app file
	entry: './src/index.js',

	// Path to output JS bundle
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},

	// Define how to load resources
	module: {
		rules: [

			// Load JS/JSX modules with Babel
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react'],
					plugins: ['transform-object-rest-spread']
				}
			},

			// Bundle CSS resources into external CSS file
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},

			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},

	// Disable Webpack source maps
	devtool: false,

	// For extracting CSS
	plugins: [
		StyleTextPlugin,
		HTMLWebpackPluginConfig
	],

	// Enable HTML5 History API capabilities in Webpack Dev Server
	devServer: {
		historyApiFallback: true
	}
};
const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const dotenv = require("dotenv").config();

// Multiple CSS output
const extractApp = new MiniCSSExtractPlugin({
	filename: "css/[name].css"
});

module.exports = {
	devtool: "inline-source-map",
	mode: "development",

	// TODO: solve the problem with the output, remove app.js & editor-style.js
	entry: {
		scripts: "./src/js/main.js",
		app: "./src/sass/app.scss",
		"editor-style": "./src/sass/editor-style.scss"
	},

	output: {
		path: path.resolve(__dirname, "assets"),
		filename: "js/[name].js"
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		}),
		new DashboardPlugin(),
		new BrowserSyncPlugin({
			open: true,
			reloadDelay: 500,
			host: "localhost",
			port: 3000,
			files: ["*.php", "*.js", "*.css"],
			proxy: {
				target: dotenv.parsed.DEVURL
			}
		}),
		extractApp
	],

	externals: {
		jquery: "jQuery",
		underscore: "_",
		backbone: "Backbone",
		wp: "wp"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			},
			{
				test: /(app|editor-style)\.scss$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
						options: {}
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "resolve-url-loader",
						options: {
							sourceMap: true,
							engine: "postcss",
							debug: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							plugins: [require("autoprefixer")]
						}
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "file-loader",
						options: {
							limit: "10000",
							outputPath: "images",
							name: "[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							publicPath: "../fonts",
							outputPath: "fonts",
							name: "[name].[ext]"
						}
					}
				]
			}
		]
	},

	stats: {
		// Colored output
		colors: true
	}
}

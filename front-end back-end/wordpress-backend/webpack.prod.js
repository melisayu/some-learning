const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

// Multiple CSS output
const extractApp = new MiniCSSExtractPlugin({
	filename: "css/[name].min.css"
});

module.exports = {
	mode: "production",

	// TODO: solve the problem with the output, remove app.js & editor-style.js
	entry: {
		scripts: "./src/js/main.js",
		app: "./src/sass/app.scss",
		"editor-style": "./src/sass/editor-style.scss"
	},

	output: {
		path: path.resolve(__dirname, "assets"),
		filename: "js/[name].min.js"
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
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
						plugins: [
							"@babel/plugin-transform-runtime",
							"@babel/plugin-proposal-class-properties"
						]
					}
				}
			},
			{
				test: /(app|editor-style)\.scss$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					{
						loader: "css-loader"
					},
					{
						loader: "resolve-url-loader",
						options: {
							engine: "postcss"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [
								require("autoprefixer"),
								require("cssnano")({
									preset: "default"
								})
							]
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
};

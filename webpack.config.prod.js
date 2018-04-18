const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './app.ts',
	output: {
		filename: 'app.bundle.prod.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ 
				test: /\.ts$/, exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			
		]
	},
	resolve:{
		extensions: ['.ts', '.js', '.json'],
		alias:{
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	externals:{
		vue: "Vue"
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify("production")
		  }),
		new UglifyJsPlugin({}),
	]
};

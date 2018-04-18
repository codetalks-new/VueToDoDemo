const webpack = require('webpack');
const path = require('path');
module.exports = {
	mode: 'development',
	entry: './app.ts',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, '.')
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
	}
};

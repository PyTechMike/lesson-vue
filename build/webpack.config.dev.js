const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
	mode: 'development',
	entry: [
		'./src/index.js'
	],
	module: {
		rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader'
			]
		}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
		vue: 'vue/dist/vue.js'
		}
	}
}
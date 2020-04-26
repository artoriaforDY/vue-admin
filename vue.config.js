'use strict'
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		port: 8089,
		open: true,
		overlay: {
			warnings: false,
			errors: true
		}
		//before: require('./mock/mock-server.js')
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		resolve: {
			alias: {
				'@': resolve('./src')
			}
		}
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, "src/assets/styles/publicVar.less")] // 引入全局样式变量
		}
	}
}
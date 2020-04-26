//exports.cssLoaders = function(options) {
//	options = options || {}
//
//	const cssLoader = {
//		loader: 'css-loader',
//		options: {
//			sourceMap: options.sourceMap
//		}
//	}
//
//	const postcssLoader = {
//		loader: 'postcss-loader',
//		options: {
//			sourceMap: options.sourceMap
//		}
//	}
//
//	// 此处添加配置
//
//	// generate loader string to be used with extract text plugin
//	function generateLoaders(loader, loaderOptions) {
//		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
//
//		if(loader) {
//			loaders.push({
//				loader: loader + '-loader',
//				options: Object.assign({}, loaderOptions, {
//					sourceMap: options.sourceMap
//				})
//			})
//		}
//
//		// Extract CSS when that option is specified
//		// (which is the case during production build)
//		if(options.extract) {
//			return ExtractTextPlugin.extract({
//				use: loaders,
//				fallback: 'vue-style-loader'
//			})
//		} else {
//			return ['vue-style-loader'].concat(loaders)
//		}
//	}
//
//	function lessResourceLoader() {
//		var loaders = [
//			cssLoader,
//			'less-loader',
//			{
//				loader: 'sass-resources-loader',
//				options: {
//					resources: [
//						path.resolve(__dirname, '../src/assets/styles/publicVar.less'), // ../src/assets/style/var.less为你的全局less变量的文件目录
//					]
//				}
//			}
//		]
//		if(options.extract) {
//			return ExtractTextPlugin.extract({
//				use: loaders,
//				fallback: 'vue-style-loader'
//			})
//		} else {
//			return ['vue-style-loader'].concat(loaders)
//		}
//	}
//
//	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
//	return {
//		css: generateLoaders(),
//		postcss: generateLoaders(),
//		less: lessResourceLoader('less'), // 第二步更改这里
//		sass: generateLoaders('sass', {
//			indentedSyntax: true
//		}),
//		scss: generateLoaders('sass'),
//		stylus: generateLoaders('stylus'),
//		styl: generateLoaders('stylus')
//	}
//}
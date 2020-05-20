import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /My[A-Z]\w+\.(vue)$/
)
console.log('requireComponent',requireComponent.keys())
requireComponent.keys().forEach(key=>{
	//获取组件模块
	let local = requireComponent(key)
	//获取组件名
	let name = key.split('/').pop().replace(/\.\w+$/, '')
	Vue.component(name,local.default || local)
})
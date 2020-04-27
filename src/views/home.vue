<template>
	<div id="mainBody">
		<aside-nav></aside-nav>
		<article-content></article-content>
	</div>
</template>
<script>
	import asideNav from './layout/asideNav'
	import articleContent from './layout/articleContent'
	export default {
		components:{
			asideNav,articleContent
		},
		data(){
			return {}
		},
		methods: {}
	}
</script>
<style scoped lang="less">
	#mainBody {
		height: 100%;
	}
</style>
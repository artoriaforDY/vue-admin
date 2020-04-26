<template>
	<div id="mainBody">
		<aside id="asideWrap">
			<nav>
				<el-col>
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item index="1-2">选项5</el-menu-item>
							<el-submenu index="1-1">
								<template slot="title">选项4</template>
								<el-menu-item index="1-1-1">选项1</el-menu-item>
								<el-menu-item index="1-1-2">选项2</el-menu-item>
								<el-menu-item index="1-1-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-col>
				</el-row>
			</nav>
		</aside>
		<article id="contentWrap">
			<div class="header">
				<div class="signBox">
					<ul>
						<li>
							<el-dropdown>
								<div class="memberBox el-dropdown-link">
									<img src="../assets/images/shuiguo.jpg" alt="member" />
									<i class="icon-arrow-down"></i>
								</div>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>黄金糕</el-dropdown-item>
									<el-dropdown-item>狮子头</el-dropdown-item>
									<el-dropdown-item>螺蛳粉</el-dropdown-item>
									<el-dropdown-item disabled>双皮奶</el-dropdown-item>
									<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</li>
					</ul>
				</div>
				<div class="hiddenMenuBox">
					<i class="icon-menu-arrow"></i>
				</div>
				<div class="locationBox">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>
							<a href="/">活动管理</a>
						</el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style scoped lang="less">
	@hoverColor: #263445;
	@backColor: #f8f8f8;
	#mainBody {
		height: 100%;
		#asideWrap {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			width: 210px;
			z-index: 1001;
			overflow: hidden;
			background-color: #304156;
			font-size: 0;
			transition: width 0.3s;
			li {
				font-size: 14px;
				a {
					display: block;
					padding: 0 20px;
					color: @navColor;
					i {
						display: inline-block;
						vertical-align: bottom;
						font-size: 18px;
					}
					span {
						margin-left: 15px;
					}
					&:hover {
						background-color: @hoverColor;
					}
					&.router-link-active {
						// background-color: @hoverColor;
						color: #7f80ff;
					}
				}
			}
		}
		#contentWrap {
			position: relative;
			margin-left: 210px;
			transition: margin-left 0.3s;
			min-height: 100%;
			background-color: @backColor;
			.header {
				margin-bottom: 3px;
				height: 50px;
				background-color: #fff;
				.signBox {
					float: right;
					cursor: pointer;
					transition: background 0.3s;
					&:hover {
						background-color: @backColor;
					}
					li {
						float: left;
						padding: 5px 10px;
						.memberBox {
							position: relative;
							padding-right: 20px;
							img {
								width: 40px;
								height: 40px;
								border-radius: 50%;
							}
							i {
								position: absolute;
								top: 12px;
								right: -3px;
							}
						}
					}
				}
				.hiddenMenuBox {
					float: left;
					width: 50px;
					text-align: center;
					line-height: 50px;
					margin-right: 10px;
					cursor: pointer;
					transition: background 0.3s;
					i {
						font-size: 20px;
					}
					&:hover {
						background-color: @backColor;
					}
				}
				.locationBox {
					float: left;
					.el-breadcrumb {
						line-height: 50px;
					}
				}
			}
		}
	}
</style>
<template>
	<article id="contentWrap" :class="{ hiddenSide: collapse }">
		<div class="header" :class="{ hiddenSide: collapse }">
			<div class="signBox">
				<ul>
					<li>
						<el-badge is-dot class="msgBox">
							<div class="msgTips">
								<i class="icon-bell"></i>
								<!-- <el-button class="share-button" icon="icon-bell" type="primary"></el-button> -->
							</div>
						</el-badge>
					</li>
					<li>
						<el-dropdown>
							<div class="memberBox el-dropdown-link">
								<img src="../../assets/images/shuiguo.jpg" alt="member" />
								<i class="icon-arrow-down"></i>
							</div>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>个人中心</el-dropdown-item>
								<el-dropdown-item>我的设置</el-dropdown-item>
								<el-dropdown-item divided @click.native="signout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
				</ul>
			</div>
			<div class="hiddenMenuBox" :class="{ hiddenSide: collapse }" @click="toggleMenu"><i class="icon-menu-arrow"></i></div>
			<div class="locationBox">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div id="mainBody">
			<el-scrollbar style="height:100%">
				<transition name="fade-transform" mode="out-in"><router-view :key="key" /></transition>
			</el-scrollbar>
		</div>
	</article>
</template>
<script>
// import asideNav from './layout/asideNav'
export default {
	name: 'articleContent',
	components: {},
	props: {
		collapse: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		key() {
			return this.$route.path;
		}
	},
	methods: {
		toggleMenu() {
			this.collapse = !this.collapse;
			this.$store.commit('toggleCollapse', this.collapse);
		},
		signout() {
			this.$confirm('是否退出登录？', '提示', {
				type: 'warning'
			})
				.then(() => {
					this.$router.push({
						path: '/login'
					});
					localStorage.clear();
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消登出'
					});
				});
		}
	}
};
</script>
<style scoped lang="less">
@backColor: #f8f8f8;

#contentWrap {
	position: relative;
	margin-left: 210px;
	min-height: 100%;
	background-color: @backColor;
	transition: margin-left 0.3s;

	&.hiddenSide {
		margin-left: 58px;
	}

	.header {
		position: fixed; left: 210px;top: 0; right: 0; z-index: 9999;
		margin-bottom: 3px;
		height: 50px;
		background-color: #fff;
		box-shadow: 0 0 5px rgba(48, 65, 85, 0.2);
		transition: left 0.3s;
		&.hiddenSide {
			left: 58px;
		}
		.signBox {
			float: right;
			cursor: pointer;
			transition: background 0.3s;

			li {
				height: 50px;
				float: left;
				padding: 5px 10px;
				margin-left: 5px;

				&:hover {
					background-color: @backColor;
				}

				.msgBox {
					margin-top: 10px;

					.msgTips {
						width: 20px;
						height: 24px;
						line-height: 24px;
						text-align: center;

						.icon-bell {
							font-size: 20px;
							color: #333;
						}
					}
				}

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

			&.hiddenSide {
				i {
					display: inline-block;
					transform: rotate(180deg);
				}
			}

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

	#mainBody {
		padding: 16px;
		position: absolute;
		width: 100%;
		bottom: 0;
		top: 50px;
		left: 0;
	}
}
</style>

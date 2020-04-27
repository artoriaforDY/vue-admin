<template>
  <aside id="asideWrap" :class="{hiddenSide:collapse}">
    <nav id="menus" class="infinite-list-wrapper">
      <!-- <el-row class="tac">
        <el-col> -->
          <el-menu
            :default-active="$route.path"
			class="el-menu-transition"
            :class="{'el-menu-vertical-hidden':collapse}"
            @open="handleOpen"
            @close="handleClose"
            background-color="#304156"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="collapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="icon-home"></i>
                <span v-show="!collapse">首页</span>
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
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
			<el-menu-item index="2">
              <i class="icon-bar-chart"></i>
              <span slot="title" v-show="!collapse">表格</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="icon-browser"></i>
              <span slot="title" v-show="!collapse">日期选择权</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="icon-options-"></i>
              <span slot="title" v-show="!collapse">分页</span>
            </el-menu-item>
          </el-menu>
        <!-- </el-col>
      </el-row> -->
    </nav>
  </aside>
</template>
<script>
export default {
  name: "asideNav",
  computed:{
	  collapse(){
		  return this.$store.state.collapse
	  }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
	},
  }
};
</script>
<style scoped lang="less">
@hoverColor: #263445;
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
  transition: width .3s ease 0s;
  .el-menu-vertical-hidden{
	  transition: width .3s;
  }
  /deep/ .el-menu-transition {
	border: none;transition: width .3s;
	&.el-menu--collapse{
		width: 58px;
	}
	.el-menu-item { 
		/deep/ [class^=icon-]{
			vertical-align: middle;
			margin-right: 20px;
			width: 24px;
			text-align: center;
			font-size: 18px;
		}
	}
	.el-submenu {
		// width: 58px;
		/deep/ [class^=icon-]{
			vertical-align: middle;
			margin-right: 20px;
			width: 24px;
			text-align: center;
			font-size: 18px;
		}
	}
  }
  &.hiddenSide {
    width: 58px;
  }
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
</style>
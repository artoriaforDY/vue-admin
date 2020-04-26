<template>
  <div id="mainBody">
    <aside id="asideWrap">
      <nav>
        <ul>
          <li>
            <router-link to="{path:'/home'}" class="router-link-active">
              <i class="icon-home"></i>
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/table'}">
              <i class="icon-bar-chart"></i>
              <span>表格</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/button'}">
              <i class="icon-color-palette"></i>
              <span>按钮</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/table'}">
              <i class="icon-checkmark-circle-"></i>
              <span>单选框</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/button'}">
              <i class="icon-checkmark-square-"></i>
              <span>复选框</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/table'}">
              <i class="icon-browser"></i>
              <span>日期选择器</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/button'}">
              <i class="icon-email"></i>
              <span>消息提示</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/table'}">
              <i class="icon-layers"></i>
              <span>Dialog</span>
            </router-link>
          </li>
          <li>
            <router-link to="{path:'/button'}">
              <i class="icon-map"></i>
              <span>无限滚动</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <article id="contentWrap">
      <div class="header">
        <div class="signBox">
          <ul>
            <li>
              <div class="memberBox">
                <img src="../assets/images/shuiguo.jpg" alt="member" />
                <i class="icon-arrow-down"></i>
              </div>
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
<style scoped lang="less">
@hoverColor: #263445;
#mainBody {
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
      line-height: 56px;
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
  }
}
</style>
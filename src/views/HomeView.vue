<template>
  <div class="home">
    <div class="homes">
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu background-color="rgb(50, 64, 87)" text-color="#fff">
          <el-menu-item>
            <template class="item-next"> Element后台管理 </template>
          </el-menu-item>

          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>文章管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="2-0">文章列表</el-menu-item>
              <el-menu-item index="2-1">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <!-- 面包屑 -->

          <div>
            <el-breadcrumb separator="/">
              <i class="el-icon-menu"></i>
            </el-breadcrumb>
          </div>

          <!-- 图像下拉 -->
         
        </el-header>

        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.homes {
  display: flex;
  justify-content: space-between;
}
.aside .item {
  background-color: rgb(50, 64, 87);
  color: #bfcbd9;
}
.aside .item span {
  color: #bfcbd9;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0079d9;
}
.header i:hover {
  background: #006bc2;
}
.item-next {
  background: #006bc2;
  color: #fff;
  width: 299px;
  height: 58px;
  display: inline-block;
  line-height: 58px;
  text-align: center;
}
.el-container > div {
  margin-top: 20px;
}
</style>
<template>
  <el-container class="container">
    <el-header class="header" style="height:154px">
      <el-input placeholder="请输入搜索关键词..."  class="head-input" style="width:41vw;">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <!-- 侧边栏导航  -->
        <!-- unique-opened只展开一个 -->
        <!-- router开启路由模式 -->
        <el-menu :unique-opened="true" :router="true" class="menu"
          text-color="#212121"
          active-text-color="#4BBBFA"
          style="height:100%"
          background-color="#F7F9FD"
          >
          <el-submenu :index="item1.order" v-for="(item1) in menuData" :key="item1.path">
            <!--表示可以展开的一组 -->
            <template slot="title">
              <!--文字 -->
              <span>{{item1.name}}</span>
            </template>
            <el-menu-item
              class="menuItem"
              v-for="(item2) in item1.children"
              @click="deliverQuery(item2)"
              :key="item2.path"
              :index="item2.path"
            >
              <span>{{item2.name}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// import MainContent from './MainContent.vue'
export default {
  name: 'Home',
  data () {
    return {
      menuData: [
        {
          name: '企业信息管理',
          order: '1',
          path: 'componyinfomanage',
          children: [
            {
              path: 'componyinfomanage',
              name: '企业信息',
              query: { id: '企业信息' }
            }
          ]
        },
        {
          path: 'postinfomange',
          name: '岗位信息管理',
          order: '2',
          children: [
            {
              path: 'postinfomange',
              name: '岗位信息',
              query: { id: '岗位信息' }
            }
          ]
        },
        {
          path: 'orderinfomange',
          name: '订单信息管理',
          order: '3',
          children: [
            {
              path: 'orderinfomange',
              name: '订单信息1',
              query: { id: '订单信息1' }
            },
            {
              path: 'orderinfomange2',
              name: '订单信息2',
              query: { id: '订单信息2' }
            }
          ]
        },
        {
          path: 'datamangeinfo',
          name: '数据字典',
          order: '4',
          children: [
            {
              path: 'datamangeinfo',
              name: '岗位类型',
              query: { id: '岗位类型' }
            }
          ]
        }
      ]
    }
  },
  components: {
    // MainContent
  },
  methods: {
    deliverQuery (item) {
      this.$router.push({
        path: item.path,
        query: item.query
      })
    }
  }
}
</script>
<style lang="less">
@import url('//at.alicdn.com/t/font_2276334_ij1covw13em.css');
body,
html,
#app{
  margin: 0;
  width: 100%;
  height: 100%;
}
.container{
  height: 100%;
  /deep/.el-input__inner{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
  }
  .el-icon-search:before {
    font-family: 'iconfont';
    content: "\e61c";
    color: #fff;
  }
  /deep/.el-input-group__append {
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    background-color: #0A80C9;
    border: 0.5px solid transparent;
  }
}
.el-menu :hover{
  color: #4BBBFA;
  font-size: 16px;
}
.el-menu {
  font-size: 16px;
}
.el-menu-item * {
    vertical-align: middle;
    font-size: 16px;
}
.el-submenu__title * {
  font-size: 16px;
}
.header {
  background: #4BBBFA;
}
.el-header{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

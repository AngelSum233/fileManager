<template>
  <el-container class="container">
    <el-header class="header" style="height:154px">
      <el-input placeholder="请输入内容" value class="head-input">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-header>
    <el-container>
      <el-aside class="aside" >
        <!-- 侧边栏导航  -->
        <!-- unique-opened只展开一个 -->
        <!-- router开启路由模式 -->
        <el-menu :unique-opened="true" :router="true" class="menu"
          text-color="#212121"
          active-text-color="#4BBBFA"
          style="height:100%"
          >
          <el-submenu :index="' '+item1.order" v-for="(item1) in menuData" :key="item1.path">
            <!--表示可以展开的一组 -->
            <template slot="title" @click="clickTitle">
              <!--文字 -->
              <span>{{item1.name}}</span>
            </template>
            <el-menu-item
              class="menuItem"
              @click="clickMenuItem"
              v-for="(item2) in item1.children"
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
              name: '企业信息'
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
              name: '岗位信息'
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
              name: '订单信息'
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
              name: '岗位类型'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped >
.container{
  height: 100%;
}
.header {
  background: #4BBBFA;
}
.el-header{
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-input{
  width:516px;
  border-radius: 20%;
}
.el-aside {
  background-color: #F7F9FD;
}
.el-menu{
    border-right: none;
  }
.main {
  /* height: 100%; */
  color: #212121;
}
.menu{
  height: 100%;
}
.el-aside {
  overflow-y: scroll;
}
::v-deep .head-input .el-input-group>.el-input__inner{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
}
.el-input-group--prepend .el-input__inner, .el-input-group__append {
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    background-color: #0A80C9;
}
</style>

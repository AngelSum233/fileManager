<template>
  <div>
    <el-container class="container">
      <el-header class="header" style="height:154px">
        <el-input placeholder="请输入搜索关键词..."  v-model="search"
        class="head-input" style="width:41vw;" >
          <el-button id="btn" slot="append" icon="el-icon-search" @click="getContentQuery (search)" ></el-button>
        </el-input>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside class="aside">
          <!-- 侧边栏导航  -->
          <!-- unique-opened只展开一个 -->
          <!-- router开启路由模式 -->
          <el-menu
            :unique-opened="true" :router="true"
            text-color="#212121"
            default-active="activePath"
            active-text-color="#4BBBFA"
            style="height:100%"
            background-color="#F7F9FD">
            <!--一级菜单-->
            <template v-for="item in menuList">
              <el-submenu v-if="item.childrens && item.childrens.length" :index="item.id.toString()" :key="item.id">
                <template slot="title">
                  <span>{{item.title}}</span>
                </template>
                <!--二级菜单-->
                <template v-for="itemChild in item.childrens">
                  <el-submenu v-if="itemChild.childrens && itemChild.childrens.length"
                  :index="itemChild.id.toString()"  :key="itemChild.id">
                    <template slot="title">
                      <span>{{itemChild.title}}</span>
                    </template>
                    <!--三级菜单-->
                    <el-menu-item v-for="itemChild_child in itemChild.childrens" :index="itemChild_child.id.toString()"
                    :key="itemChild_child.id" @click="deliverQuery(itemChild_child)">
                      <span slot="title">{{itemChild_child.title}}</span>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="itemChild.id.toString()" :key="itemChild.id"
                  @click="deliverQuery(itemChild)">{{itemChild.title}}</el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item class="menu-item" v-else :index="item.id.toString()" :key="item.id"
              @click="deliverQuery(item)">
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import Bottom from '../components/Bottom'
export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      search: ''
    }
  },
  components: {
    'v-bottom': Bottom
  },
  created () {
    console.log('shauxin')
    // document.getElementById('btn').click()
    this.getmenuList()
  },
  methods: {
    deliverQuery (item) {
      this.$router.push({
        path: 'content',
        query: item
      })
    },
    // 获取所有菜单
    async getmenuList () {
      const { data: res } = await this.$http.get('/article/queryinitial')
      this.menuList = res.data
      console.log(this.menuList)
    },
    // 搜索
    async getContentQuery (title) {
      const { data: res } = await this.$http.get('/article/query', { params: { title } })
      console.log('111111111' + title)
      if (res.status !== 200 || res.msg) {
        alert('对不起 没有你要找的内容...')
      } else {
        this.$router.push({
          path: 'allArticle',
          query: res
        }
        )
        console.log(res)
      }
    },
    activePath () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }

}
</script>
<style lang="less" >
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
  font-size: 17px;
}
.el-menu {
  font-size: 16px;
}
.el-submenu .el-menu-item{
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
.bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px 0px;
    font-size: 14px;
    color: #2c3a46;
    height: 100px;
    width: 100%;
    border-top: 1px solid #dddee0;
}
</style>

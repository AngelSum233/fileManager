<template>
  <!-- data是个数组 数组里面存放内容、作者 -->
  <div>
    <div v-for="(item, index) in datalist" :key="index" class="contain">
        <div class="title">
            <h4  @click="toUrl(item.id)">{{item.title}}</h4>
        </div>
        <p v-html="item.content"></p>
        <div class="about">
            <span>更新时间：{{item.addTime}}</span>
            <span>作者：{{item.author}}</span>
        </div>
        <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentList: [],
      datalist: []
    }
  },
  watch: {
    '$route' (to, from) { this.getContentQuery(this.$route.query.title) }
  },
  mounted () {
    this.getContentQuery(this.$route.query.title)
  },
  methods: {
    toUrl (id) {
      this.$router.push({
        path: 'content',
        query: {
          id: id
        }
      })
    },
    async getContentQuery (title) {
      const { data: res } = await this.$http.get('/article/query', { params: { title } })
      this.datalist = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    p{
        color: #37474f;
        font-size: 14px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        width:100%;
    }
}
.title h4{
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 1.2;
    color: #37474f;
}
.title :hover{
    color: #4BBBFA;
    cursor: pointer;
}
.about{
    display: flex;
    color: #617288;
    font-size: 16px;
    margin-top: 10px;
    span{
        padding-right: 11px;
    }
}
.line{
    margin-top: 13px;
    margin-bottom: 18px;
    border-top: 0.1px solid #f0f2f5;
}
</style>

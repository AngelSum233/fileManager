<template>
  <div>
    <div class="contain">
        <h4 class="title">{{contentList.title}}</h4>
        <div class="about">
            <span>更新时间：{{contentList.addTime}}</span>
            <span>作者：{{contentList.author}}</span>
        </div>
        <div class="line"></div>
        <p v-html="contentList.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentList: []
    }
  },
  watch: {
    '$route' (to, from) { this.getcontentList(this.$route.query.id) }
  },
  mounted () {
    this.getcontentList(this.$route.query.id)
  },
  methods: {
    async getcontentList (id) {
      if (id !== undefined) {
        const { data: res } = await this.$http.get('/article/queryid', { params: { id } })
        this.contentList = res.data
      }
      console.log('main233' + this.contentList)
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
        line-height: 30px;
        width:100%;
    }
}
.title{
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 1.2;
    color: #37474f;
}
.about{
    display: flex;
    color: #617288;
    font-size: 13px;
    margin-top: 10px;
    span{
        padding-right: 11px;
    }
}
.line{
    margin-top: 13px;
    margin-bottom: 15px;
    border-top: 0.1px solid #f0f2f5;
}
</style>

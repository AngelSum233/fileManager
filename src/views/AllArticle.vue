<template>
  <!-- data是个数组 数组里面存放内容、作者 -->
  <div>
    <div v-for="(item, index) in datalist" :key="index" class="contain">
        <h4 class="title">{{item.title}}</h4>
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
      datalist: this.$route.query.data
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
      console.log(this.contentList)
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
        font-size: 16px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        width:100%;
    }
}
.title{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 1.2;
    color: #37474f;
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

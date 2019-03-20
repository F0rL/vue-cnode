<template>
  <div class="PostList">
    <div class="sidebar">
      <div class="panel">
        <div class="inner">
          <p>CNode：Node.js专业中文社区</p>
          <p>您可以<a>登录</a> 或 <a>注册</a> , 也可以</p>
          <button>通过 GitHub 登录</button>
        </div>
      </div>
      <div class="panel">
        <div class="inner ads">
          <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
            <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
          </a>
          <div class="sep10"></div>
          <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
            <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS">
          </a>
          <div class="sep10"></div>
          <a href="https://0x7.me/T4BdE" target="_blank" class="banner sponsor_outlink" data-label="qiniu-sidebar">
            <img src="//static.cnodejs.org/FvSQHGgGVh_tkomqIFQ0MDEH9wrg">
          </a>
          <div class="sep10"></div>
          <a href="https://jobs.aftership.com/r/cnodejs" target="_blank" class="banner sponsor_outlink" data-label="aftership">
            <img src="//static.cnodejs.org/FjpEWk5hZd8DToyHKDbJ4masolIW">
          </a>
        </div>
      </div>
    </div>
    <!--正在加载-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="">
    </div>
    <!--主体架构-->
    <div class="posts" v-else>
      <ul class="content">
        <div class="toobar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </div>
        <li v-for="list in lists" :key="list.id">
          <img :src="list.author.avatar_url" alt="">
          <span class="allcount">
            <span class="reply_count">{{list.visit_count}}/{{list.reply_count}}</span>
          </span>
          <span :class="{put_good: list.good, put_top: list.top, 'topiclist-tab': (list.good === false && list.top === false)}">
            <span>
              {{list | tabFormatter}}
            </span>
          </span>
          <router-link :to="{name:'post_content',params: {id: list.id,name: list.author.loginname}}">
            <span>{{list.title}}</span>
          </router-link>
          <span class="last_reply">{{list.last_reply_at | formatDate}}</span>
        </li>
        <li>
          <pagination @handleList="renderList"></pagination>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import pagination from './Pagination'
  export default {
    name: "PostList",
    data() {
      return {
        isLoading: false,
        lists: null,
        postpage: 1
      }
    },
    beforeMount(){
      this.isLoading = true;
      this.getData();
    },
    components: {
      pagination
    },
    methods: {
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          params: {
            page: this.postpage,
            limit: 20
          }
        }).then(res => {
          this.isLoading = false;
          this.lists = res.data.data
        }).catch(err => {
          console.log('请求数据失败:',err)
        })
      },
      renderList(value) {
        this.postpage = value
        this.getData()
      }
    }
  }
</script>

<style scoped>
  .PostList{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
    margin-right: 310px;
  }
  .sidebar {
    width: 290px;
    float: right;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
  }
  .panel .inner a {
    cursor: pointer;
  }
  .panel button {
    background: #5bc0de;
    color: #fff;
    padding: 5px 20px;
    border: 1px solid transparent;
  }
  .panel button:hover {
    background: #2f96b4;
  }

  .PostList .posts img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    padding: 3px 4px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>

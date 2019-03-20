<template>
  <div class="userinfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="">
    </div>
    <div class="userInfomation" v-else>
      <section>
        <img :src="userinfo.avatar_url" alt="">
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}} 积分</p>
        <p>注册时间{{userinfo.create_at | formatDate}}</p>
      </section>
      <div class="replies">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="list in userinfo.recent_topics" :key="list.id">
            <img :src="userinfo.avatar_url" alt="">
            <router-link :to="{name:'post_content',params:{id: list.id}}">{{list.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>最近参与的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies" :key="item.id">
            <img :src="userinfo.avatar_url" alt="">
            <router-link :to="{name:'post_content',params:{id: item.id}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: false,
        userinfo: null
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    },
    methods: {
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res=>{
            if(res.data.success === true){
              this.isLoading =false;
              this.userinfo = res.data.data;
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation img {
    width: 30px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 10px 0 10px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    margin-left: 10px;
    color: #094E99;
    text-decoration: none;
    font-size: 16px;
  }
  .userInfomation > div >ul > li > a:hover {
    color: #005580;
    border-bottom: 1px solid #005580;
  }
  section > span {
    margin-left: 10px;
  }
  section > p {
    margin-top: 10px;
  }
</style>

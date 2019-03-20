<template>
  <div class="header">
    <router-link :to="{name: 'root'}">
      <img src="../assets/cnodejs_light.svg" alt="">
    </router-link>
    <ul class="nav">
      <router-link :to="{name: 'root'}">
        <li><a href="#">首页</a></li>
      </router-link>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header{
    background-color:#444 ;
    height: 50px;
  }
  img{
    max-width: 120px;
    margin-left: 90px;
    margin-top: 10px;
  }
  ul{
    list-style: none;
    float: right;
  }
  .nav {
    margin: 5px 80px 0 0;
  }
  li{
    display: inline-block;
    padding: 10px 15px;
  }
  li>a:hover {
    color: #fff;
  }
  a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: nonr;
  }
</style>

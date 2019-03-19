import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import PostList from "./components/PostList";
import Article from "./components/Article";
import UserInfo from "./components/UserInfo";
import SlideBar from "./components/SlideBar";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/topic/id=:id&author=:name',
      name: 'post_content',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    },
  ]
})

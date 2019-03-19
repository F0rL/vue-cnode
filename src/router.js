import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import PostList from "./components/PostList";
import Article from "./components/Article";

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
      path: '/topic/:id',
      name: 'post_content',
      components: {
        main: Article
      }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',
      components: {
        main: PostList
      }
    },
  ]
})

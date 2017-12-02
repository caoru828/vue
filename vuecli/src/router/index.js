import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
import Error from '@/components/Error'
import Counter from '@/components/counter'


//变成式导航 1 a href routlink    2 button click js


Vue.use(Router)

export default new Router({
  // mode:'hash'  默认
  mode:'history'
  ,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/test',
      name:'Test',
      component:Test,
      //配置子路由，name是传参时传的哪个子路由，在app。vue里的router-link里to=“name：‘子路由name’”
      children:[
        {
          path:'test1',
          name:'test1',
          component:Test1,
          alias:'/abc'
        },{
          path:'test2',
          component:Test2
        }
      ]
    },
    {
      path:'/testUrl/:userId(\\d+)/:userName',
      name:'testUrl',
      component:TestUrl,
      //路由钩子函数1
      //   to from next 导航守卫，beforeEnter守卫
      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
        // next（）是个函数，不写next或写next(false)页面不跳转；默认next（ture）
      }
    },
    {
      path : '/home/:userId(\\d+)/:userName',
      redirect :'/testUrl/:userId(\\d+)/:userName'
    },
    {
      path:'*',
      component:Error
    },
    {
      path:'/counter',
      name:'counter',
      component:Counter
    }
  ]
})

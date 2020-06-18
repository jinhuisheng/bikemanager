import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import data from '../views/data'
import status from '../views/status'
import users from '../views/users'
import bikes from '../views/bikes'
import rider from "../views/rider";
import login from "../views/login";
import index from "../views/index";


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: login,
      component: login,
    },
    {
      path: '/',
      name: '',
      component: index,
      children: [
        {
          path: '/home',
          name: home,
          component: home,
        },
        {
          path: '/data',
          name: data,
          component: data,
          children: [
            {
              path: 'users',
              name: users,
              component: users
            }, {
              path: 'bikes',
              name: bikes,
              component: bikes
            }, {
              path: 'rider',
              name: rider,
              component: rider
            }]
        }, {
          path: '/status',
          name: status,
          component: status
        }
      ]
    }
    ,
  ]
});
export default router

import Vue from 'vue'
import Router from 'vue-router'
import City from '../components/LL/city.vue'
import CityFind from '../components/LL/cityFind.vue'
import Login from '../components/LL/login'
import setAgain from '../components/LL/setAgain'
import home from '../components/LL/home'
import search from '../components/LL/search'
import order from '../components/LL/order'
import me from '../components/LL/me'
import foodClass from '../components/LL/foodClass'
import shopDetial from '../components/LL/shopDetial'
import shopIntr from '../components/LL/shopIntr'
import safeNotice from '../components/LL/safeNotice'
import orderSure from '../components/LL/orderSure'
import orderAddress from '../components/LL/orderAddress'
import addAddress from '../components/LL/addAddress'
import orderAddMessage from '../components/LL/orderAddMessage'
import tickets from '../components/LL/tickets'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    },
    {
      path: "/cityFind",
      name: "cityFind",
      component: CityFind
    },
    {
      path: '/login',
      name: "login",
      component: Login
    }, {
      path: '/setAgain',
      name: "setAgain",
      component: setAgain
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/order",
      name: "order",
      component: order
    },{
      path: "/me",
      name: "me",
      component: me
    },{
      path:"/foodClass",
      name:"foodClass",
      component:foodClass
    },{
      path:"/shopDetial",
      name:"shopDetial",
      component:shopDetial
    },{
      path:"/shopIntr",
      name:"shopIntr",
      component:shopIntr
    },{
      path:"/safeNotice",
      name:"safeNotice",
      component:safeNotice
    },{
      path:"/orderSure",
      name:"orderSure",
      component:orderSure
    },{
      path:"/orderAddress",
      name:"orderAddress",
      component:orderAddress
    },{
      path:"/addAddress",
      name:"addAddress",
      component:addAddress
    },{
      path:"/orderAddMessage",
      name:"orderAddMessage",
      component:orderAddMessage
    },{
      path:"/tickets",
      name:"tickets",
      component:tickets
    }

  ]
})

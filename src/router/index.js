import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index.vue"
import Details from "../views/Details.vue"
import Products from "../views/Products.vue"
import NotFound from "../views/NotFound.vue"
Vue.use(VueRouter)
const router = new VueRouter({  
  routes:[
      {path:"/",      component:  Index},   
      {path:"/product/Detail/:lid",       component:  Details,props:true},   
      {path:"/product/list/:kw",props: true, component:Products},   
      {path:"*",    component:  NotFound},   
  ]
})
export default router;
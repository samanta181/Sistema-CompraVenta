import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import Categoria from '../components/Categoria.vue'
import Login from '../components/Login.vue'
import Usuario from '../components/Usuario.vue'
import Articulo from '../components/Articulo.vue'
import Cliente from '../components/Cliente.vue'
import Proveedor from '../components/Proveedor.vue'
import Ingreso from '../components/Ingreso.vue'
import Venta from '../components/Venta.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: true
      }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
     libre: true
      }
    },
   
  {
    path: '/categoria',
    name: 'categoria',
    component: Categoria,
    meta:{
      administrador: true,
      almacenero: true
      
      }
  },

  
  {
    path: '/articulo',
    name: 'articulo',
    component: Articulo,
    meta:{
      administrador: true,
      almacenero: true
      }
  },

  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente,
    meta:{
      administrador: true,
      Vendedor: true
      }
  },

  {
    path: '/proveedor',
    name: 'proveedor',
    component: Proveedor,
    meta:{
      administrador: true,
      almacenero: true
      }
  },

  {
    path: '/ingreso',
    name: 'ingreso',
    component: Ingreso,
    meta:{
      administrador: true,
      almacenero: true
      }
  },

  {
    path: '/venta',
    name: 'venta',
    component: Venta,
    meta:{
      administrador: true,
      vendedor: true
      }
  },

  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
    meta:{
      administrador: true,
     
      }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.libre)){
    next();
  } else if ( store.state.usuario && store.state.usuario.rol == 'administrador'){
    if (to.matched.some(record => record.meta.administrador)){
      next();
    }
  } else if ( store.state.usuario && store.state.usuario.rol == 'vendedor'){
    if (to.matched.some(record => record.meta.vendedor)){
      next();
    }
  } else if ( store.state.usuario && store.state.usuario.rol == 'almacenero'){
    if (to.matched.some(record => record.meta.almacenero)){
      next();
    }
  } else{
    next({name: 'login'});
  }
})

export default router

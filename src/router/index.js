// import Vue from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'


let routes = [         
    {             
        path:'/home',             
        name: 'Home',
		component: Home,       
    },        
    {             
        path:'/login',             
        name: 'Login',
		component: () => import('../views/Login.vue')        
    }
]

var router = new createRouter({     // 配置路由   
    history:createWebHashHistory(),  
    routes,
}) 

export default router
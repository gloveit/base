import Router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import first from '@/components/nestRoute/first.vue'
Vue.use(Router)

export default new Router({
	mode: "history",   //配置地址显示为history模式,默认hash模式
	routes: [
		{
			path: "/",
			name: "HelloWorld",
			// component:()=>import('@/components/HelloWorld.vue')
			component: HelloWorld
		},
		// {
		// 	path: "/Prop",
		// 	name: "Prop",
		// 	component: () => import(/* webpackChunkName: "user" */ '@/components/Prop.vue')

		// },
		{
			path: "/Detail",
			name: "Detail",
			props: true,
			component: () => import('@/components/Detail/Detail.vue'),

		},
		{
			path: "/Model",
			name: "Model",
			component: () => import('@/components/model/Index.vue')
		},
		{
			path: "/slotF",
			name: "slotF",
			component: () => import('@/components/slotF/index.vue')
		},
		{
			path: "/spike",
			name: "spike",
			component: () => import('@/components/miaosha/index.vue')
		},
		{
			path: "/derictive",
			name: "derictive",
			component: () => import('@/components/derictive/index.vue')
		},
		{
			path: "/provide",
			name: "provide",
			component: () => import('@/components/provide/provide.vue')
		},
		{
			path: "/jsx",
			name: "jsx",
			component: () => import('@/components/jsx/index.vue')
		},
		{
			path: "/tvuex",
			name: "tvuex",
			component: () => import('@/components/tvuex/index.vue')
		},
		{
			path: "/shop",
			name: "shop",
			component: () => import('@/components/shop/index.vue')
		},
		{
			path: '/nestRoute/:id',
			name: "nestRoute",
			component: () => import('@/components/nestRoute/index.vue'),
			beforeEnter:(to,form,next)=>{
				console.log(to)
				if(to.name === 'nestRoute'){
					next({name:'HelloWorld'})
				}else{
					next();
				}
			},
			children: [
				{
					path: 'first',
					name: "first",
					component:first,
					// component: () => import('@/components/nestRoute/first.vue'),
				}
		    ]
		},
	    {
			path:"/",
			redirect: '/HelloWorld'
		}
	]
})
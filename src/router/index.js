import Router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
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
		{
			path: "/Prop",
			name: "Prop",
			component: () => import(/* webpackChunkName: "user" */ '@/components/Prop.vue')

		},
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
		}
	]
})
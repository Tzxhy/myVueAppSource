import Vue from 'vue'
import Router from 'vue-router'
import Memorandum from '@/components/nav1/Memorandum'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'


Vue.use(Router)


export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: Home,
		children: [{
			path: 'memorandum',
			component: Memorandum
		}]
	}, {
		path: '*',
		name: 'any',
		redirect: {
			path: '/404'
		},
	}, {
		path: '/404',
		name: '404',
		component: NotFound
	}]
})
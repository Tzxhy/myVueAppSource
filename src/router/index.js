import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'
import Memorandum from '@/components/nav1/Memorandum'
import Calculator from '@/components/nav1/Calculator'
import BDMap from '@/components/nav1/Map'
import Json from '@/components/nav2/JSON'
import ColorPicker from '@/components/nav2/ColorPicker'
import UlTest from '@/components/nav2/UlTest'


Vue.use(Router)


export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: Home,
		children: [{
			path: 'memorandum',
			component: Memorandum
		},{
			path: 'calculator',
			component: Calculator
		},{
			path: 'map',
			component: BDMap
		},{
			path: 'json',
			component: Json
		},{
			path: 'color-picker',
			component: ColorPicker
		},{
			path: 'ul-test',
			component: UlTest
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
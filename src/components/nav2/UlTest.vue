<template>
	<ul-wrap :items="items">
		<template slot="item" scope="props">
    	<ul-li class="my-fancy-item" @click="click">{{ props.text }}</ul-li>
  	</template>
	</ul-wrap>

</template>


<script>
	import UlWrap from './UlWrap'
	import UlLi from './UlLi'
	export default {
		data(){
			return {
				items: [
					{
						text: '123'
					},
					{
						text: '321'
					}
				]
			}
		},
		methods: {
			click(){
				alert('click')
			}
		},
		components: {
			UlWrap,
			UlLi,

		}
	}

</script>
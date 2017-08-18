<template>
	<tbody>
		<template v-for="item of page">
			<slot :item="item">
				<tr>
					<td v-for="it of property">{{it?item[it.prop]:''}}</td>
				</tr>
			</slot>
		</template>
	</tbody>
</template>

<script>
	export default {
		methods: {
			clickName(){
				// this.$emit('click')
			},
			handle(d) {
				// console.log('re', d);
				this.property = d;
			}
		},
		props: {
			data: {
				type: Array,
			}
		},
		data(){
			return {
				page: this.data,
				property: []
			}
		},
		created(){
			
		},
		mounted(){
			this.$parent._bus.$on('give',this.handle);
		},
		name: 'TTbody',
		// render(h){
		// 	console.log('render', this.property);
		// 	let st = this.page.map((value, index)=>{
		// 					return (
		// 						<tr> this.property.length?this.property.map((val,index)=>{<td>{val?value[val]:''}</td>}):'' </tr>
		// 					)})
		// 	return (
		// 		<tbody>
		// 			{st}
		// 		</tbody>

		// 		)
		// }
	}

</script>


<style scoped>
	td {
		text-align: center;
	}
</style>
<!-- <template>
	<tbody>
		<template v-for="item of page">
			<slot :item="item">
				<tr>
					<slot v-for="it of property" :it="it">
						<td >{{it?item[it.prop]:''}}</td>
					</slot>
					
				</tr>
			</slot>
		</template>
	</tbody>
</template> -->

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
			},
			scope: {
				type: Function,
			}
		},
		data(){
			return {
				page: this.data,
				property: null
			}
		},
		created(){
			
		},
		mounted(){
			this.$parent._bus.$on('give',this.handle);
			console.log('scope,',this.scope);
		},
		name: 'TTbody',
		render(r){
			let self = this;
			if (!self.scope || !self.property) {
				return r('tbody', 
					[].map.call(self.page, function (item, index) {
						return r('tr','');
					})
					)
			} else {
				return r('tbody', 
					[].map.call(self.page, function (item, index) {
						return r('tr',
							[r('td' ,self.scope({index,rowData:item })),...([].map.call(self.property,
								function (it, index) {
									if(!it.prop)
										return;
									else
										return r('td', item[it.prop]);	
								}))]
						)
					})




					)
			}

			
		}
	}

</script>


<style scoped>
	td {
		text-align: center;
	}
</style>
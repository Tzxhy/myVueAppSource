<template>
	<div>
		<slot text="fff"></slot>
	</div>

</template>

<script>
	export default {
		name: 'TTableItem',
		props: {
			label: {
				type: String
			},
			prop: {
				type: String
			},
			width: {
				type: String,
			}
		},
		created(){
			let parent = this.parent;
			parent.$emit('init', this.$props);
		},
		mounted(){
			// console.log('in ta ble item     , ',this); 
			if (this.$scopedSlots.default){
				let parent = this.parent;
				parent.$emit('initScope', this.$scopedSlots.default);
			}
		},
		computed: {
			parent(){
				let par = this.$parent;
				while (par && par.$options._componentTag !== 't-table' ) {
					par = par.$parent;
				}
				return par;
			}
		},

		// render(r){
		// 	return r('p',{
		// 		style: {
		// 			display: 'block'
		// 		}
		// 	},this.$slots.default);
		// }
	}

</script>
<template>
	<div>
		<slot></slot>
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
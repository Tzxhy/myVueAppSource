<template>
	<div>
		<div class="hidden"><slot></slot></div>
		<bus ref="bus"></bus>
		<table style="table-layout:fixed;" :border="border?2:0">
		  <!-- <slot name="item"
		    v-for="item in items"
		    :text="item.text">
		  </slot> -->
		  	<t-thead :data="tableHeader">
		  	
			  </t-thead>
			  <t-tbody :data="tableRow">
			  	
			  </t-tbody>
		  
		</table>
	</div>

</template>

<script>
import TTbody from './TTbody'
import TThead from './TThead'

	export default {
		props: {
			items: {
				type: Array,
				default: ()=>[]
			},
			border: {
				type: Boolean,
			},
			center: {
				type: Boolean
			}
		},
		// bus: this.$refs.bus,
		tableId: 1,
		components: {
			TTbody,
			TThead,
		},
		data(){
			return {
				dataTable: this.items,
				tableHeader: [],

			}
		},
		computed: {
			tableRow(){
				return this.items;
			},
			_bus(){
				return this.$refs.bus;
			}
		},
		created(){
			this.$on('init',this.handle)
			
			// console.log('init is $On');
		},
		methods:{
			handle(d){
				this.tableHeader.push(d);
				// console.log('this.tableHeade',this.tableHeader);
			}
		},
		mounted(){
			// console.log('this:',this.tableRow);
			// console.log("this._bus", this._bus);
			console.log('this', this);
		}
	}

</script>

<style scoped>
	.hidden {
		display: none;
	}
</style>
<template>
	<t-table :items="items" border center>
		<!-- <template slot="item" scope="props">
    	<ul-li class="my-fancy-item" @click="click">{{ props.text }}</ul-li>
  	</template> -->
  	<t-table-item
  	label="操作">
  		<template scope="prop">
  			<el-button type="primary" @click="showData(prop.index, prop.rowData)">删除{{prop.text}}</el-button>
  		</template>
  	</t-table-item>
  	<t-table-item
			label="数字"
			width="120px"
			prop="text"
  	></t-table-item>
  	<t-table-item
			label="年龄"
			width="150px"
			prop="age"
  	></t-table-item>
  	<t-table-item
			label="名字"
			prop="name"
  	></t-table-item>
	</t-table>

</template>


<script>
	
	export default {
		data(){
			return {
				items: [
					{
						text: '123',
						name: 'tzx',
						age: 13
					},
					{
						text: '456',
						name: 'hanya',
						age:12
					}
				]
			}
		},
		methods: {
			click(){
				alert('click')
			},
			showData(index, data){
				console.log(index, data);
			}
		},
		components: {
			

		},
		mounted(){
			
		}
	}

</script>
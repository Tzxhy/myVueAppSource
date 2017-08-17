<template>
	<el-row>
		<el-col>
			<el-color-picker v-model="color1" color-format="hex"></el-color-picker>
			<p>{{color1}}</p>
		</el-col>
		<el-col>
			<el-color-picker v-model="color2" show-alpha></el-color-picker>
			<p>{{color2}}</p>
		</el-col>

		
	
	</el-row>
</template>


<script>
	export default {
		data(){
			return {
				color1: '',
				color2: '',
			}
		}
	}
</script>

<style scoped>
	.el-col {
		height: 300px;
	}
	p {
		text-align: left;
		text-indent: 5em;
	}

</style>
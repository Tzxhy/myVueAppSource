<template>
	<el-row>
		<el-col :span="4">
			<el-menu class="el-menu-vertical-demo" theme="dark" :router="true" :unique-opened="true" :collapse="isCollapse">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-message"></i>
						<span slot="title">常用工具</span>
					</template>
					<el-menu-item index="memorandum">备忘录</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					<el-menu-item index="1-3">选项3</el-menu-item>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title">导航二</span>
				</el-menu-item>
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="20">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</el-col>


	</el-row>
</template>




<script>
	

	export default {

		data(){
			return {
				isCollapse: false,

			}
		}


	}

</script>


<style scoped lang="LESS">
	.el-menu-vertical-demo {

	}
	.el-row {
		height: 100%;
		.el-col-4 {
			height: 100%;
			border-right: 5px solid #d7d5dc;
			background-color: #324157;
		}
	}
	.el-menu {
		text-align: left;
	}

	
</style>
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
					<el-menu-item index="calculator">高级计算器</el-menu-item>
					<el-menu-item index="map">地图</el-menu-item>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span slot="title">开发工具</span>
					</template>
					<el-menu-item index="json">JSON校验</el-menu-item>
					<el-menu-item index="color-picker">颜色选取</el-menu-item>
					<el-menu-item index="map">地图</el-menu-item>
					<el-menu-item index="ul-test">slot测试</el-menu-item>
				</el-submenu>
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="20" style="overflow-y: auto;height: 100%;">
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
<template>
	<div style="height: 100%;">
		<div class="map" id="map" style="height: 100%;"></div>
	</div>
</template>

<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=2dshfy5V8FPOtxKVL84SjHNZjUbbTOOT"></script>
<script>
export default {



	mounted(){
		var map = new BMap.Map("map");          // 创建地图实例  
		var point = new BMap.Point(104.071244,30.656825);  // 创建点坐标 
		map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
		map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());
		map.setCurrentCity("成都");  
		

	}
}

</script>

<style>
	
</style>



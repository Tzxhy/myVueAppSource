<template>
	<thead>
		<tr>
			<th v-for="item of data" :style="{width: item.width?item.width:'auto'}" >{{item.label}}</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		name:'TThead',

		props: {
			data: {
				type: Array,
				default: ()=> [],
			}
		},
		mounted(){
			let self = this;
			setTimeout(()=>{
				// console.log('emit');
				self.$parent._bus.$emit('give',self.data)
		}, 0)	
		}
	}


</script>
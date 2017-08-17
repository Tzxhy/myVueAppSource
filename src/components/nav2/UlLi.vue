<template>
	<li class="fff" @click="clickName">
		<slot></slot>
	</li>

</template>

<script>
	export default {
		methods: {
			clickName(){
				// this.$emit('click')
			}
		}
	}

</script>
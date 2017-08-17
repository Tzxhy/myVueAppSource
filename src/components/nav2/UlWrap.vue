<template>
	<div>
		<ul>
		  <slot name="item"
		    v-for="item in items"
		    :text="item.text">
		  </slot>
		</ul>
	</div>

</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				default: ()=>[]
			}
		}
	}

</script>
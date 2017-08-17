<template>
	<el-row>
		<el-col>
			<el-input
			  type="textarea"
			  :rows="10"
			  placeholder="请输入内容"
			  v-model="textarea">
			</el-input>
		</el-col>
		<el-col>
			<div style="height: 300px; border: 1px solid #000;">
				<p>{{parsed}}</p>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	var parseJson = require('parse-json'); 
	export default {

		data(){
			return {
				textarea: '',

			}
		},
		computed: {
			parsed: {
				get(){
					let str = '';
					if( this.textarea) {
						try{
							str = parseJson(this.textarea)
						}catch(e) {
							console.log(e);
							str = e.message;
						}
					}
					return str;

				},
				set(){}
			}
		},

		methods: {
			
		}


	}

</script>
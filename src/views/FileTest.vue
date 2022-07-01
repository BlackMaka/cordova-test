<template>
	<div id="app">
		<div>
			1
			<img :src="imgFile" alt="dd" width="100" height="100" />
			<v-avatar> <img :src="imgFile" alt="John" /> </v-avatar>
			<input type="file" @change="fileChange1" />
		</div>
		<div>
			2
			<v-avatar> <img :src="imgFile" alt="John" /> </v-avatar>
			<v-file-input hide-input @change="fileChange2($event)" />
		</div>

		<div>
			sample
			<v-file-input
				hide-input
				truncate-length="15"
				prepend-icon="mdi-camera"
				:rules="rules"
				accept="image/png, image/jpeg, image/bmp"
			/>
			<v-file-input hide-input truncate-length="15" />
			<v-file-input chips counter multiple show-size truncate-length="15" />
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		data() {
			return {
				cordova: Vue.cordova,
				imgFile: '',
				rules: [
					value =>
						!value ||
						value.size < 2000000 ||
						'Avatar size should be less than 2 MB!',
				],
			};
		},
		methods: {
			pluginEnabled() {
				console.log(this.cordova.plugins);
			},
			fileChange1(event) {
				debugger;
				let input = event.target;
				// 인풋 태그에 파일이 있는 경우
				if (input.files && input.files[0]) {
					// 이미지 파일인지 검사 (생략)
					// FileReader 인스턴스 생성
					const reader = new FileReader();
					// 이미지가 로드가 된 경우
					reader.onload = e => {
						//const previewImage = document.getElementById('preview-image');
						//previewImage.src = e.target.result;
						this.imgFile = e.target.result;
					};
					// reader가 이미지 읽도록 하기
					reader.readAsDataURL(input.files[0]);
				}
			},
			fileChange2() {},
		},
	};
</script>

<style>
	html {
		height: 100%;
	}
	body {
		height: 100%;
	}
	#app {
		color: #2c3e50;
		margin: 40px auto;
		max-width: 640px;
		font-family: Source Sans Pro, Helvetica, sans-serif;
		text-align: center;
	}
	.logo {
		padding-bottom: 30px;
	}
	.logo span {
		position: relative;
		top: -30px;
		font-size: 36px;
		margin: 0 20px;
	}
	.logo img {
		width: 90px;
		height: 90px;
	}
	div.dump {
		background: #eee;
		text-align: left;
		border: solid 1px #ccc;
		padding: 20px;
		max-width: 600px;
		box-sizing: border-box;
		font-family: monospace;
		white-space: pre;
	}
	div.alert {
		color: #c00;
		font-weight: bold;
		font-size: 0.9em;
		padding-bottom: 30px;
		line-height: 1.6;
	}
	div.alert a {
		color: inherit;
	}
	div.indicators {
		width: 340px;
		margin: 0 auto 40px;
		text-align: left;
		font-family: Courier, Courier New, sans-serif;
	}
	div.indicators div {
		padding-bottom: 15px;
		opacity: 0.6;
	}
	div.indicators div.ok {
		opacity: 1;
		cursor: pointer;
	}
	div.indicators div.ok span {
		background: #0c0;
	}
	div.indicators div span {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: #c00;
		border-radius: 20px;
		position: relative;
		top: 3px;
		margin-right: 15px;
	}
	div.indicators p {
		font-size: 0.8em;
		font-weight: bold;
		padding-bottom: 20px;
	}
</style>

<template>
	<div id="app">
		<h2>push</h2>
		<button @click="push">눌러봥</button>
		<div class="dump" v-if="cordova">
			{{ cordova }}
			<!-- <div>cordova.deviceready : {{ cordova.deviceready }}</div>
			<div>cordova.camera : {{ cordova.contacts }}</div> -->
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		methods: {
			pluginEnabled() {
				console.log(this.cordova.plugins);
			},
			push() {
				console.log('hi');
			},
		},

		data() {
			return {
				cordova: Vue.cordova,
			};
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

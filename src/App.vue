<template>
	<div class="app">
		<Title></Title>
		<WeatherInfo></WeatherInfo>
	</div>
</template>

<script>

import Title from './components/Title.vue';
import WeatherInfo from './components/WeatherInfo.vue';
export default {
	components: {
		Title, WeatherInfo
	}
}
</script>

<style src="./style.css"></style>

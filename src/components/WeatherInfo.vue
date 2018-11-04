<template>
	<div class="weather-info">
		<InputCityName
		v-model="cityName"
		placeholder="enter city name"
		@keydown.enter="getWeatherData"
		></InputCityName>
		<div class="weather-info-cases">
			<div v-if="loading" class="loading">Waiting for city name</div>
			<div v-if="errored" class="errored">There is no city with name: {{cityName}}</div>
		</div>
		<div v-if="!loading, !errored" class="weather-info-main">
			<div class="weather-info-name">In the city {{cityName}}:</div>
			<div class="weather-info-part" v-for="(info, id) in weatherInfo" v-bind:key="id">{{info}}</div>
		</div>
	</div>
</template>

<script>

import InputCityName from './InputCityName.vue';
import axios from 'axios';

export default {
	components: {
		InputCityName
	},
	data () {
		return {
			cityName: '',
			weatherData: '',
			loading: true,
			errored: false,
			weatherInfo: {
				temperature: '',
				pressure: '',
				humidity: '',
				visibility: '',
				wind: '',
				clouds: ''
			},
		}
	},
	methods: {
		setWeatherInfo (WeatherData) {
			let calculedTemp = (Number(WeatherData.data.main.temp) - 273.15).toFixed(1);
			let calculedPressure = (Number(WeatherData.data.main.pressure) / 1.333).toFixed(1);
			let calculedVisibility = (Number(WeatherData.data.visibility) / 1000).toFixed(1);

			this.weatherInfo.temperature = 'Temperature: ' + calculedTemp + ' °C'; 
			this.weatherInfo.pressure = 'Pressure: ' + calculedPressure + ' mmHg'; 
			this.weatherInfo.humidity = 'Humidity: ' + Number(WeatherData.data.main.humidity) + ' %'; 
			this.weatherInfo.visibility = 'Visibility: ' +  calculedVisibility + ' km';
			this.weatherInfo.wind = 'Wind: ' + Number(WeatherData.data.wind.speed) + ' km/h'; 
			this.weatherInfo.clouds = 'Clouds: ' + Number(WeatherData.data.clouds.all) + ' %'; 
		},
		getWeatherData () {  
			this.loading = true;
			this.errored = false;
			let weatherLocalData = this.weatherData;
			let weatherCall;

			if(this.cityName === "Odessa" || this.cityName === "odessa") {
				weatherCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'Odessa,ua' + '&APPID=56e6d7b1d0c97ffa78f3c3ed24a4095a';
			} else {
				weatherCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&APPID=56e6d7b1d0c97ffa78f3c3ed24a4095a';
			}
			axios.get(weatherCall)
			.then(data => {
				this.weatherData = data;
				this.setWeatherInfo(data);
			})
			.catch(error => {
        		console.log(error);
        		this.errored = true;
     		 })
			.finally(() => (this.loading = false));
		}
	}
}
</script>

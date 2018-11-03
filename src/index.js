import axios from 'axios';
import Vue from 'vue';
import App from './App.vue'

new Vue ({
	el: '.app',
	data: {
		hello: 'Hello, world! Its just my attempt to use Vue.js',
		buttonText: 'show / hide',
		show: false
	}
})

new Vue({
	el: '.app-2',
	data: {
		words: [
			'And',
			'it',
			'just',
			'a',
			'test',
			'of',
			'Vue.js',
			'`for`',
			'method'
		]
	}
})

new Vue({
	el: '.app-3',
	data: {
		word: 'live',
		buttonText: 'reverse word'
	},
	methods: {
		reverseText() {
			this.word = this.word.split('').reverse().join('');
		}
	}
})

new Vue({
	el: '.app-4',
	data: {
		text: 'Rewrite me!'
	}
})

Vue.component('final-yellow-text', {
	props: ['more'],
	data: function() {
		return {
			color: 'yellow'
		}
	},
	template: '<div class="yellow-block">Final {{color}} {{more}}</div>'
})

new Vue({
	el: '.app-5',
	data: {
		more: 'text'
	}
})

Vue.component('post-block', {
	props:['data', 'id'],
	template: `
		<div class="post-block">
		<h2>{{data.name + ' ' + (id)}}</h2>
		<div>{{data.content + ' ' + (id)}}</div>
		</div>
		`
})

Vue.component('app-id', {
	props: ['id'],
	template: '<div>This App id property:{{id}}</div>'
})

Vue.component('async-example', function (resolve, reject) {
	let weatherCall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=56e6d7b1d0c97ffa78f3c3ed24a4095a';
	axios.get(weatherCall)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function(response) {
		resolve({
			data: function () {
				return {
					weatherData: response
				}
			},
			template: '<div>{{weatherData}}</div>'
		})
	})
})

new Vue({
	el: '.app-6',
	data: {
		id: 0,
		posts: [
			{
				name: 'Post block example',
				content: 'Post content'
			},
			{
				name: 'Post block example',
				content: 'Post content'
			}
		]
	}
})





// "start": "browser-sync start --server \"src\" --files \"src\" --open \"external\" --tunnel --no-notify --no-ghost-mode"






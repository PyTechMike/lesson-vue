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
	template: '<div class="yellow-block">Final yellow text</div>'
})

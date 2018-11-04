<template>
	<input
		type="text"
		class="input-city"
		:value="value"
		v-on="listeners"
	>
</template>

<script>
export default {
	props: {
		value: {
		type: String,
		default: '',
		}
	},
	computed: {
		listeners () {
		return {
			...this.$listeners,
			// Override input listener to work with v-model
			input: event => this.$emit('input', event.target.value)
		}
		}
	}
}
</script>
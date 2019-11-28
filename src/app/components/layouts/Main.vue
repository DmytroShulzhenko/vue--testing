<template>
	<div class="container">
		<ul class="nav">
			<li>
				<v-link href="/">Home</v-link>
			</li>
			<li>
				<v-link href="/carousel">carousel</v-link>
			</li>
			<li>
				<v-link href="/quote">create new quote</v-link>
			</li>
			<!--<li>-->
				<!--<v-link href="/quotes-list">show all quotes</v-link>-->
			<!--</li>-->
		</ul>
		<slot></slot>
	</div>
</template>

<script>
	import VLink from '../VLink.vue';

	export default {
		components: {
			VLink
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/settings";

	.nav {
		@extend %listreset;
		display: flex;
		align-content: center;
		text-transform: uppercase;
		justify-content: space-between;
	}

</style>
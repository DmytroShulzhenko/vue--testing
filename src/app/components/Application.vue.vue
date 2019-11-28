<template>
	<div class="container">
		<Router :routes="routes">
			<NotFoundPage></NotFoundPage>
		</Router>
	</div>
</template>

<script>
	import Router from './Router.vue';

	import HomePage from './pages/HomePage.vue';
	import NotFoundPage from './pages/404Page.vue';
	import CarouselComponent from './pages/CarouselPage.vue';
	import QuoteFormComponent from './pages/QuoteFormPage.vue';
	import QuotesList from './pages/QuotesListPage.vue';

	export default {
		data: () => ({
			routes: {
				'/': HomePage,
				'/carousel': CarouselComponent,
				'/quote': QuoteFormComponent,
				'/quotes-list': QuotesList
			}
		}),

		components: {
			Router,
			NotFoundPage
		}
	}
</script>
<template>
	<main-layout>
		<ul v-if="posts.length"
		    class="post-list">
			<li v-for="post in posts"
			    class="post-item">
				<div>
					<div class="user-info">
						<div class="user-img">
							<img src="../../../assets/images/user.jpg"
							     width="200" height="200" alt="image description">
						</div>
						<div class="info">
							<span class="user-name">{{post.userName}}</span>
						</div>
					</div>
					<div class="post-holder">
						<p>{{post.message}}</p>
					</div>
				</div>
				<div class="action-box">
					<i class="fas fa-trash remove-post"></i>
				</div>
			</li>
		</ul>
		<div v-else>
			<p>....</p>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue';

	export default {
		props: ['posts'],
		components: {
			MainLayout
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/settings";

	.post-list {
		@extend %listreset;
	}

	.post-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&:not(:last-of-type) {
			margin-bottom: rem-calc(10);
		}
	}

	.user-info {
		display: flex;
		align-items: center;
		margin-bottom: rem-calc(10);
	}

	.user-img {
		margin-right: rem-calc(10);
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.user-name {
		font: 500 rem-calc(20) $font-family-serif;
		line-height: 1;
	}

	time {
		font-style: italic;
		font-size: rem-calc(10);
	}

	.post-holder {
		font-size: rem-calc(14);
	}

	.action-box {
		.fas {
			cursor: pointer;
			transition: color $animation-speed linear;
			&:hover {
				color: $orange;
			}
		}
	}
</style>
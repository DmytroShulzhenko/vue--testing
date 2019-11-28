<template>
	<main-layout>
		<form @submit="submit"
		      class="post-form"
		      name="post-form">
			<div class="form-holder">
				<div class="user-img">
					<img src="../../../assets/images/user.jpg" width="200" height="200" alt="image description">
				</div>
				<div class="form-group">
					<label for="username">Username</label>
					<input v-model="userName" id="username" class="form-control" type="text" name="username"
					       placeholder="Username">
				</div>
			</div>
			<div class="form-group">
				<label for="postTextarea">Your post</label>
				<textarea v-model="message" id="postTextarea" class="form-control" rows="5" name="postTextarea"
				          placeholder="Your post"></textarea>
			</div>
			<div class="btn-holder">
				<button class="btn" type="submit">Send your post</button>
			</div>
		</form>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue';

	export default {
		data: () => ({
			message: '',
			userName: '',
			posts: []
		}),
		methods: {
			submit(event) {
				event.preventDefault();

				this.posts.push({
					userName: this.userName,
					message: this.message
				})

				this.message = '';
			}
		},
		components: {
			MainLayout
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/settings";

	.post-form {
		max-width: rem-calc(700);
		margin: 0 auto rem-calc(15);
		@include media(">=desktop") {
			margin-bottom: rem-calc(25);
		}
	}

	.btn-holder {
		padding: rem-calc(10 0 0);
	}

	.btn {
		border: none;
		color: $white;
		background: $blue;
		border-radius: 5em;
		padding: rem-calc(5 15);
		transition: background $animation-speed linear;
		&:hover {
			background: $orange;
		}
	}

	.form-holder {
		display: flex;
		align-items: center;
	}

	.user-img {
		margin-right: rem-calc(15);
	}

	.form-group {
		flex-grow: 1;
	}

	.form-control {
		width: 100%;
		display: block;
	}

	.user-img {
		overflow: hidden;
		border-radius: 50%;
		width: rem-calc(35);
		height: rem-calc(35);
		img {
			object: {
				fit: cover;
				position: center;
			}
			width: 100%;
			height: 100%;
			max-width: none;
		}
	}
</style>
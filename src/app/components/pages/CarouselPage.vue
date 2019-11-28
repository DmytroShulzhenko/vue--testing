<template>
	<main-layout>
		<div class="carousel">
			<div class="carousel-box">
				<ul v-if="slidesArr.length"
				    class="carousel-inner">
					<li v-for="(slide, index) in slidesArr"
					    v-bind:class="[ (index === currentElementActiveIndex) ? 'active' : null ]"
					    class="carousel-item">
						<blockquote>
							<p>{{slide.text}}</p>
							<footer v-if="slide.author">
								<cite :title="slide.author">{{slide.author}}</cite>
							</footer>
						</blockquote>
					</li>
				</ul>
				<button @click="slideToPrev"
				        class="btn btn-prev"
				        type="button">prev
				</button>
				<button @click="slideToNext"
				        class="btn btn-next"
				        type="button">next
				</button>
			</div>
			<ul v-if="slidesArr.length"
			    class="carousel-dots">
				<li v-for="(dot, index) in slidesArr"
				    v-bind:class="[ (index === currentElementActiveIndex) ? 'active' : null ]"
				    @click="goToSlide(index)"
				    class="carousel-dot"></li>
			</ul>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue';

	export default {
		name: "Carousel",
		data: () => ({
			currentElementActiveIndex: 0,
			slidesArr: [
				{
					author: 'Михаил Задорнов',
					text: 'В падающем самолёте нет атеистов.',
				},
				{
					text: 'Если у тебя получилось обмануть человека, это не значит, что он дурак, это значит, что тебе доверяли больше, чем ты этого заслуживаешь.'
				},
				{
					author: 'Омар Хайям',
					text: 'Настоящий друг — это человек, который выскажет тебе в глаза все, что о тебе думает, а всем скажет, что ты — замечательный человек.',
				},
				{
					author: 'Вуди Аллен',
					text: 'Если хочешь узнать человека, не слушай, что о нём говорят другие, послушай, что он говорит о других.',
				}
			]
		}),
		methods: {
			slideToPrev(event) {
				event.preventDefault();

				this.currentElementActiveIndex === 0 ? (this.currentElementActiveIndex = this.slidesArr.length - 1) : this.currentElementActiveIndex--;
			},

			slideToNext(event) {
				event.preventDefault();

				this.currentElementActiveIndex === this.slidesArr.length - 1 ? (this.currentElementActiveIndex = 0) : this.currentElementActiveIndex++;
			},

			goToSlide(index) {
				this.currentElementActiveIndex = index;
			}
		},
		components: {
			MainLayout
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/settings";

	.carousel {
		display: flex;
		position: relative;
		flex-direction: column;
	}

	.carousel-box {
		display: flex;
		align-items: center;
	}

	.carousel-inner {
		@extend %listreset;
		width: 100%;
		display: flex;
		margin: rem-calc(0 10);
	}

	.carousel-item {
		transition: {
			property: opacity, visibility;
			duration: $animation-speed;
			timing-function: linear;
		}
		opacity: 0;
		width: 100%;
		flex-shrink: 0;
		visibility: hidden;
		padding: rem-calc(10 15);
		&.active {
			opacity: 1;
			visibility: visible;
		}
		&:not(:last-of-type) {
			margin-right: -100%;
		}
	}

	blockquote {
		margin: 0;
		footer:before {
			content: "\2014\00A0";
		}
	}

	.btn {
		padding: 0;
		border: none;
		outline: none;
		flex-shrink: 0;
		cursor: pointer;
		overflow: hidden;
		text-indent: 101%;
		border-radius: 50%;
		position: relative;
		white-space: nowrap;
		width: rem-calc(30);
		height: rem-calc(30);
		background-color: rgba($white, .5);
		transition: background-color $animation-speed linear;
		&:hover, &:focus {
			background-color: $white;
		}
		&:before {
			top: 50%;
			left: 50%;
			content: '';
			position: absolute;
			transform: translate(-50%, -50%);
			transition: border-color $animation-speed linear;
		}
	}

	.btn-prev {
		left: 0;
		order: -1;
		&:hover, &:focus {
			&:before {
				border-right-color: $black;
			}
		}
		&:before {
			@include triangle(rem-calc(10), $white, left);
		}
	}

	.btn-next {
		right: 0;
		&:hover, &:focus {
			&:before {
				border-left-color: $black;
			}
		}
		&:before {
			@include triangle(rem-calc(10), $white, right);
		}
	}

	.carousel-dots {
		@extend %listreset;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel-dot {
		@include text-hide(true);
		cursor: pointer;
		border-radius: 50%;
		width: rem-calc(10);
		height: rem-calc(10);
		margin: rem-calc(0 5);
		background-color: rgba($white, .5);
		transition: background-color $animation-speed linear;
		&:hover, &:focus {
			background-color: $white;
		}
		&.active {
			background-color: $green;
		}
	}
</style>
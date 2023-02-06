<template>
	<view>
		<view class="top"></view>
		<view class="main">
			<div class="loader" v-show="mainLoader">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mainLoader: true
			}

		},
		methods: {

		}
	}
</script>

<style>
	.top {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #FFFFFF;
	}

	.main {
		width: 100%;
	}

	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bar {
		display: inline-block;
		width: 3px;
		height: 20px;
		background-color: rgba(0, 0, 127, 0.5);
		border-radius: 10px;
		animation: scale-up4 1s linear infinite;
	}

	.bar:nth-child(2) {
		height: 35px;
		margin: 0 5px;
		animation-delay: .25s;
	}

	.bar:nth-child(3) {
		animation-delay: .5s;
	}

	@keyframes scale-up4 {
		20% {
			background-color: #ffff;
			transform: scaleY(1.5);
		}

		40% {
			transform: scaleY(1);
		}
	}
</style>

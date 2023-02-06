<template>
	<view>
		<view class="top"></view>
		<view calss="main">
			<div class="loader" v-show="mainLoader">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
			<div class="container" v-show="terminal">
				<div class="container_terminal"></div>
				<div class="terminal_toolbar">
					<div class="butt">
						<button class="btn btn-color" @click="terminal = !terminal"></button>
						<button class="btn"></button>
						<button class="btn"></button>
					</div>
					<p class="user">veriner@tyza66: ~</p>
				</div>
				<div class="terminal_body">
					<div class="terminal_promt">
						<span class="terminal_user">veriner@tyza66:</span>
						<span class="terminal_location">~</span>
						<span class="terminal_bling">$</span>
						<span class="terminal_text">{{terminal_text.text}}</span>
						<span class="terminal_cursor"></span>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="tools">
					<div class="circle">
						<span class="red box"></span>
					</div>
					<div class="circle">
						<span class="yellow box"></span>
					</div>
					<div class="circle">
						<span class="green box"></span>
					</div>
				</div>
				<div class="card__content inner">
					<div class="card">
						<span class="card__title">订阅</span>
						<p class="card__content">输入您的邮箱进行申请，我们会在接下来的一个月里，每周定期给您发送有关优惠信息的邮件。
						</p>
						<div class="card__form">
							<input placeholder="邮箱地址" type="text">
							<button class="sign-up">申请订阅</button>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="tools">
					<div class="circle">
						<span class="red box"></span>
					</div>
					<div class="circle">
						<span class="yellow box"></span>
					</div>
					<div class="circle">
						<span class="green box"></span>
					</div>
				</div>
				<div class="card__content inner">
					<div class="card">
						<span class="card__title">更换源</span>
						<p class="card__content">更换平台可用信息源，获得来自指定源的信息。项目开源。github:tyza66<br/>
						</p>
						<div class="card__form">
							<input placeholder="源地址" type="text">
							<button class="sign-up">更换</button>
						</div>
					</div>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	import {
		backend
	} from '@/config.js';
	export default {
		data() {
			return {
				mainLoader: true,
				terminal: true,
				terminal_text: ""
			}
		},
		onLoad() {
			console.log(backend)
			uni.request({
				url: backend + '/latestNotice',
				header: {
					'custom-type': 'application/json'
				},
				success: (res) => {
					this.terminal_text = res.data
					this.mainLoader = false
					//console.log(res.data)
				},
				fail: (res) => {
					uni.showToast({
						icon: 'error',
						title: '网络连接失败',
						duration: 2000
					});
				}
			})
		},
		onPullDownRefresh() {
			
			uni.stopPullDownRefresh();
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

	.container {
		width: 650rpx;
		height: 130rpx;
		margin: 0 auto;
	}

	.terminal_toolbar {
		display: flex;
		height: 30px;
		align-items: center;
		padding: 0 8px;
		box-sizing: border-box;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background: linear-gradient(#504b45 0%, #3c3b37 100%);
	}

	.butt {
		display: flex;
		align-items: center;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin-right: 5px;
		font-size: 8px;
		height: 12px;
		width: 12px;
		box-sizing: border-box;
		border: none;
		border-radius: 100%;
		background: linear-gradient(#7d7871 0%, #595953 100%);
		text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
	}

	.btn-color {
		background: #ee411a;
	}

	.btn:hover {
		cursor: pointer;
	}

	.btn:focus {
		outline: none;
	}

	.butt--exit {
		background: linear-gradient(#f37458 0%, #de4c12 100%);
	}

	.user {
		color: #d5d0ce;
		margin-left: 6px;
		font-size: 14px;
		line-height: 15px;
	}

	.terminal_body {
		background: rgba(56, 4, 40, 0.9);
		height: calc(100% - 30px);
		padding-top: 2px;
		margin-top: -1px;
		font-size: 12px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.terminal_promt {
		display: flex;
	}

	.terminal_promt span {
		margin-left: 4px;
	}

	.terminal_user {
		color: #7eda28;
	}

	.terminal_location {
		color: #4878c0;
	}

	.terminal_text {
		color: #dddddd;
	}

	.terminal_bling {
		color: #dddddd;
	}

	.terminal_cursor {
		display: block;
		height: 14px;
		width: 5px;
		margin-left: 10px;
		animation: curbl 1200ms linear infinite;
	}

	@keyframes curbl {

		0% {
			background: #ffffff;
		}

		49% {
			background: #ffffff;
		}

		60% {
			background: transparent;
		}

		99% {
			background: transparent;
		}

		100% {
			background: #ffffff;
		}
	}

	.card {
		width: 650rpx;
		margin: 0 auto;
		background-color: #011522;
		border-radius: 8px;
		z-index: 1;
		margin: 0 auto;
		margin-top: 5rpx;
	}

	.tools {
		display: flex;
		align-items: center;
		padding: 9px;
	}

	.circle {
		padding: 0 4px;
	}

	.box {
		display: inline-block;
		align-items: center;
		width: 10px;
		height: 10px;
		padding: 1px;
		border-radius: 50%;
	}

	.red {
		background-color: #ff605c;
	}

	.yellow {
		background-color: #ffbd44;
	}

	.green {
		background-color: #00ca4e;
	}

	.inner .card {
		width: 240px;
		height: 254px;
		padding: 0 15px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 12px;
		background-color: #011522;
		border-radius: 20px;
	}

	.inner .card>* {
		margin: 0;
	}

	.inner .card__title {
		font-size: 23px;
		font-weight: 900;
		color: white;
	}

	.inner .card__content {
		font-size: 13px;
		line-height: 18px;
		color: white;
	}

	.inner .card__form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.inner .card__form input {
		margin-top: 10px;
		outline: 0;
		background: rgb(255, 255, 255);
		box-shadow: transparent 0px 0px 0px 1px inset;
		padding: 0.6em;
		border-radius: 14px;
		border: 1px solid #333;
		color: black;
	}

	.inner .card__form button {
		border: 0;
		background:  #7257fa;
		color: #fff;
		padding: 0 20rpx;
		border-radius: 14px;
		font-weight: bold;
		text-align: center;
	}

	.inner .sign-up:hover {
		opacity: 0.8;
	}
</style>

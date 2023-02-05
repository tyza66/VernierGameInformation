<template>
	<view>
		<view class="top"></view>
		<view calss="main">
			<div class="loader" v-show="mainLoader">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
			<input placeholder="在此使用关键词搜素" type="text" class="input" required="" v-model="keyword"
				@input="searchKey(keyword)">
			<view v-for="(item,i) in preferential" :key="i">
				<div class="card">
					<h3 class="card__title" @click="openUrl(item.url)">{{item.title}}
					</h3>
					<p class="card__content">{{item.introduction}}</p>
					<div class="card__date">
						{{item.date}}
					</div>
					<button class="mini-btn card__arrow" type="primary" size="mini" @click="openUrl(item.url)">
						<image src="../../static/ui/goto.png"></image>
					</button>

				</div>
			</view>
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
				preferential: [],
				keyword: ''
			}
		},
		onLoad() {
			console.log(backend)
			uni.request({
				url: backend + '/preferential',
				header: {
					'custom-type': 'application/json'
				},
				success: (res) => {
					this.preferential = res.data
					this.mainLoader = false
					console.log(res.data)
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
			this.keyword = ''
			uni.request({
				url: backend + '/preferential',
				header: {
					'custom-type': 'application/json'
				},
				success: (res) => {
					this.preferential = res.data
					this.mainLoader = false
					console.log(res.data)
				},
				fail: (res) => {
					uni.showToast({
						icon: 'error',
						title: '网络连接失败',
						duration: 2000
					});
				}
			})
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			if (this.keyword == '') {
				uni.request({
					url: backend + '/preferential',
					header: {
						'custom-type': 'application/json'
					},
					success: (res) => {
						this.preferential = this.preferential.concat(res.data)
						this.mainLoader = false
						console.log(res.data)
					},
					fail: (res) => {
						uni.showToast({
							icon: 'error',
							title: '网络连接失败',
							duration: 2000
						});
					}
				})
			} else {
				uni.request({
					url: backend + '/limitPreferential?key=' + this.keyword,
					header: {
						'custom-type': 'application/json'
					},
					success: (res) => {
						this.preferential = this.preferential.concat(res.data)
						this.mainLoader = false
						console.log(res.data)
					},
					fail: (res) => {
						uni.showToast({
							icon: 'error',
							title: '网络连接失败',
							duration: 2000
						});
					}
				})
			}
		},
		methods: {
			openUrl(url) {
				plus.runtime.openURL(url, function(res) {
					console.log(res);
				});
			},
			searchKey(key) {
				this.preferential = []
				if (this.keyword == '') {
					uni.request({
						url: backend + '/preferential',
						header: {
							'custom-type': 'application/json'
						},
						success: (res) => {
							this.preferential = this.preferential.concat(res.data)
							this.mainLoader = false
							console.log(res.data)
						},
						fail: (res) => {
							uni.showToast({
								icon: 'error',
								title: '网络连接失败',
								duration: 2000
							});
						}
					})
				} else {
					uni.request({
						url: backend + '/limitPreferential?key=' + this.keyword,
						header: {
							'custom-type': 'application/json'
						},
						success: (res) => {
							this.preferential = this.preferential.concat(res.data)
							this.mainLoader = false
							console.log(res.data)
						},
						fail: (res) => {
							uni.showToast({
								icon: 'error',
								title: '网络连接失败',
								duration: 2000
							});
						}
					})
				}
			}
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

	/* From uiverse.io by @alexruix */
	.input {
		line-height: 28px;
		border: 2px solid transparent;
		border-bottom-color: #777;
		padding: .2rem 0;
		outline: none;
		background-color: transparent;
		color: #0d0c22;
		transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.input:focus,
	input:hover {
		outline: none;
		padding: .2rem 1rem;
		border-radius: 1rem;
		border-color: #7a9cc6;
	}

	.input::placeholder {
		color: #777;
	}

	.input:focus::placeholder {
		opacity: 0;
		transition: opacity .3s;
	}

	/* this card is inspired form this - https://georgefrancis.dev/ */

	.card {
		--border-radius: 0.75rem;
		--primary-color: #7257fa;
		--secondary-color: #3c3852;
		width: 610rpx;
		font-family: "Arial";
		padding: 1rem;
		cursor: pointer;
		border-radius: var(--border-radius);
		background: #f1f1f3;
		box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
		position: relative;
		margin: 0 auto;
		margin-bottom: 1rpx;
	}

	.card>*+* {
		margin-top: 1.1em;
	}

	.card .card__content {
		color: var(--secondary-color);
		font-size: 0.86rem;
	}

	.card .card__title {
		padding: 0;
		font-size: 1.3rem;
		font-weight: bold;
	}

	.card .card__date {
		color: #6e6b80;
		font-size: 0.8rem;
	}

	.card .card__arrow {
		position: absolute;
		background: var(--primary-color);
		padding: 0.4rem;
		border-top-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
		bottom: 0;
		right: 0;
		transition: 0.2s;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 80rpx;
	}

	.card svg {
		transition: 0.2s;
	}

	/* hover */
	.card:hover .card__title {
		color: var(--primary-color);
		text-decoration: underline;
	}

	.card:hover .card__arrow {
		background: #111;
	}

	.card:hover .card__arrow svg {
		transform: translateX(3px);
	}

	.card__arrow image {
		width: 100%;
		height: 100%;
	}
</style>

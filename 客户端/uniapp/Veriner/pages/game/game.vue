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
			<view v-for="(item,i) in gamelist" :key="i">
				<div class="card">
					<div class="card-img">
						<image :src="item.image"></image>
					</div>
					<div class="card-info">
						<p class="text-title">{{item.name}} </p>
						<p class="text-body">{{item.introduction}}</p>
					</div>
					<div class="card-footer">
						<span class="text-title">{{item.price}}</span>
						<span class="discount">
							<p>{{item.discount}}</p>
						</span>
						<span class="platform">
							<p>{{item.platform}}</p>
						</span>
						<span class="classification">
							<p>{{item.classification}}</p>
						</span>
						<button class="mini-btn card-button" type="default" size="mini"
							@click="openAppStore(item.package,item.appleid)">
							<!--<image src="../../static/ui/goto.png"></image>-->
							<p>查看</p>
						</button>
					</div>
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
				gamelist: [],
				keyword: ''
			}
		},
		onLoad() {
			console.log(backend)
			if (this.keyword == '') {
				uni.request({
					url: backend + '/gamelist',
					header: {
						'custom-type': 'application/json'
					},
					success: (res) => {
						this.gamelist = res.data
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
			}

		},
		onPullDownRefresh() {
			this.keyword = ''
			uni.request({
				url: backend + '/gamelist',
				header: {
					'custom-type': 'application/json'
				},
				success: (res) => {
					this.gamelist = res.data
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
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			if (this.keyword == '') {
				uni.request({
					url: backend + '/gamelist',
					header: {
						'custom-type': 'application/json'
					},
					success: (res) => {
						this.gamelist = this.gamelist.concat(res.data)
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
			} else {
				uni.request({
					url: backend + '/limitGameList?key='+this.keyword,
					header: {
						'custom-type': 'application/json'
					},
					success: (res) => {
						this.gamelist = this.gamelist.concat(res.data)
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
			}
		},
		methods: {
			openAppStore(packagename, appleid) {
				if (plus.os.name == "Android") {
					// 跳转安卓应用市场
					let appurl = "market://details?id=" + packagename //这个是通用应用市场，如果想指定某个应用商店，需要单独查这个应用商店的包名或scheme及参数
					plus.runtime.openURL(appurl)
				} else {
					// 跳转AppStore
					let appleId = 纯数字id
					plus.runtime.launchApplication({
						action: `itms-apps://itunes.apple.com/cn/app/id` + appleid,
					})
				}
			},
			searchKey(key) {
				this.gamelist = []
				//console.log(key)
				if (this.keyword == '') {
					uni.request({
						url: backend + '/gamelist',
						header: {
							'custom-type': 'application/json'
						},
						success: (res) => {
							this.gamelist = this.gamelist.concat(res.data)
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
				} else {
					uni.request({
						url: backend + '/limitGameList?key='+this.keyword,
						header: {
							'custom-type': 'application/json'
						},
						success: (res) => {
							this.gamelist = this.gamelist.concat(res.data)
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

	.card {
		width: 670rpx;
		padding: .8em;
		background: #f5f5f5;
		position: relative;
		overflow: visible;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		margin: 0 auto;
	}

	.card-img {
		background-color: #ffcaa6;
		height: 240rpx;
		width: 100%;
		border-radius: .5rem;
		transition: .3s ease;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card-img image {
		width: 100%;
		height: 100%;
	}

	.card-info {
		padding-top: 10%;
	}

	svg {
		width: 20px;
		height: 20px;
	}

	.card-footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 10px;
		border-top: 1px solid #ddd;
	}

	/*Text*/
	.text-title {
		font-weight: 900;
		font-size: 1.2em;
		line-height: 1.5;
	}

	.text-body {
		font-size: .9em;
		padding-bottom: 10px;
	}

	/*Button*/
	.card-button {
		border: 0.1px solid #252525;
		display: flex;
		padding: .3em;
		cursor: pointer;
		border-radius: 50px;
		transition: .3s ease-in-out;
		margin-right: 0;
		background-color: #ffcaa6;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card-button image {
		width: 60rpx;
		height: 60rpx;
	}
	
	.card-button p{
		text-align: center;
	}

	/*Hover*/
	.card-img:hover {
		transform: translateY(-25%);
		box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
	}

	.card-button:hover {
		border: 1px solid #7257fa;
		background-color: #7257fa;
	}

	.discount {
		height: 50rpx;
		background: rgba(0, 255, 0, 0.3);
		border-radius: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		padding: 0 10rpx;
	}

	.discount p {
		color: green;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.platform {
		height: 50rpx;
		background: rgba(0, 85, 255, 0.3);
		border-radius: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		padding: 0 10rpx;
	}

	.platform p {
		color: green;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.platform {
		height: 50rpx;
		background: rgba(0, 85, 255, 0.3);
		border-radius: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		padding: 0 15rpx;
	}

	.platform p {
		color: black;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.classification {
		height: 50rpx;
		background: rgba(0, 85, 255, 0.3);
		border-radius: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		padding: 0 15rpx;
	}

	.classification p {
		color: black;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

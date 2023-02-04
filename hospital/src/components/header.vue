<template>
    <div class="home-content-top">
			<div>
				<div class="home-top-logo">
					<img src="@/assets/images/sign.png" alt="">
				</div>
				<div class="home-top-menu">
					<slot name="bottomTable">
						<router-link :to="{name:item.router}" v-for="(item,i) in menus" :key="i" :class="allMenu==i+1?'active':''">{{item.name}}</router-link>
					</slot>
				</div>
				<div class="home-top-user">
					<img v-show="msg>0" src="@/assets/images/msg.png" alt="">
					<img v-show="msg==0" src="@/assets/images/noMsg.png" alt="">
					<p v-show="user.name != null">
						<span>欢迎您 , </span>
						<span>{{user.name}}</span>
					</p>
					<p v-show="user.name === null">
						<router-link to="/">登录</router-link>
						<router-link to="/">注册</router-link>
					</p>
				</div>
			</div>
		</div>
</template>
<script>
    export default{
        data(){
            return {
                menus:[
                    {
						name: "首页",
						router: "index"
					},

					{
						name: "就诊记录",
						router: "medical_record"
					},
                ],
                user: {
					name: null
				},
                allMenu:-1,
                msg: 0,

            }
        }
    }
</script>
<style>
.home-content-top {
		background: #5a75f6;
		height: 82px;
		flex-shrink: 0;
		;
        margin: 0;
	}

	.home-content-top>div {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		height: 100% !important;
		justify-content: flex-start;
		align-items: center;
	}

	.home-content-top>div>div {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.home-top-logo {
		margin-right: 10px;
		/* width: 25%; */
	}

	/* .home-content-top img{
		width: 80%;
		height: 80%;
	} */

	.home-top-menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.home-top-menu a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 100%;
		color: #f7f7ff;
		font-size: 18px;
        text-decoration: none;
	}

	.home-top-menu a.active {
		background: linear-gradient(to bottom, #767dfb, #5b5ffb);
	}

    
</style>
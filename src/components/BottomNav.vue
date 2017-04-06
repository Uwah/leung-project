<template>
    <!-- 底部导航使用弹性盒子 -->
    <div class="bottom-fixed" id="bottomNav">
        <footer>
            <router-link to="/home">
                <span class="navIcon"></span>
                <p>首页</p>
            </router-link>
            <router-link to="/found">
                <span class="navIcon"></span>
                <p>发现</p>
            </router-link>
            <router-link to="/userCenter">
                <span class="navIcon"></span>
                <p>我的</p>
            </router-link>
        </footer>
    </div>


</template>
<script>

</script>

<style>
    .bottom-fixed {
        display:flex;
        flex-direction:row;
        justify-content:center;

    }
	a {
		display:block;
	}

</style>
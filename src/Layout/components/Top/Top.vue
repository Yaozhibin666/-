<template>
    <div>
        <div class="top">
            <div class="logo">
                <img src="public\img\logo.png" alt="">
                <text>
                    优贤
                </text>
            </div>
            <div class="nav">
                <router-link to="">首页</router-link>
                <router-link to="">新闻</router-link>
                <router-link to="">成果</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: rgba(127, 121, 121, 0.4);
}
.top .logo {
    display: flex;
    align-items: center;
}

.top .logo img {
    width: 40px;
    margin-left: 46px;
}

.top .logo text {
    color: rgb(255, 255, 255);
    font-size: 36px;
    letter-spacing: 10px;
    text-indent: 5px;
}

.top .nav {
    align-self: flex-end;
    margin-bottom: 10px;
    margin-right: 35px;
}

.top .nav .router-link-active {
    margin-left: 25px;
    color: rgb(255, 255, 255);
    font-size: 18px;
}
</style>
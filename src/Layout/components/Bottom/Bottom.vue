<template>
    <div>
        <div class="bottom">
            <div class="icon">
                <div><i class="iconfont icon-wangzhan"></i></div>
                <div><i class="iconfont icon-twitter"></i></div>
                <div><i class="iconfont icon-email1"></i></div>
            </div>
            <div class="version">
                <div class="text">
                    @2017-2022|版权所有 优贤⼯作室
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.bottom{
    margin-top: 40px;
}
.icon{
    display: flex;
    justify-content: space-around;
    width: 20%;
    margin: 0 auto;
}
.bottom .icon .iconfont{
    background-color: black;
    color: white;
    /* border: solid 1px red; */
}
.bottom .version{
    display: flex;
    align-items: center;
    height: 130px;
    margin-top: 20px;
    background-color: rgb(22, 21, 21);
}
.bottom .version .text{
    margin-left: 30px;
    color: rgb(246, 246, 246);
}
</style>
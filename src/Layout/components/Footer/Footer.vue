<template>
    <div>
        <ul class="message">
            <li class="address">
                <i class="iconfont icon-dizhi"></i>
                <div class="caption">地址</div>
                中山职业技术学院知信楼
            </li>
            <li class="telphone">
                <i class="iconfont icon-24gl-phoneLoudspeaker"></i>
                <div class="caption">电话</div>
                11111111111
            </li>
            <li class="Email">
                <i class="iconfont icon-email1"></i>
                <div class="caption">Email</div>
                3456789@qq.com
            </li>
        </ul>
        <PageBottom />
        </div>
    
</template>

<script setup>
        import { PageBottom } from '../Bottom';
</script>

<style lang="css" scoped>
.message{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
}
.message li{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 25%;
    padding-top: 10px;
    background-color: white;
}
.iconfont{
    font-size: 24px;
}
.message li .caption{
    padding: 5px;
    margin-bottom: 10px;
    border-bottom: solid 4px rgb(9, 178, 119);
}


</style>
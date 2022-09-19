<template>
    <div class="w main">
        <PageTop class="TOP"/>
        <div class="beijingOut">
            <img src="public\img\首页大图.webp" alt="" class="beijing">
            
            <div class="title">
                <ul>
                    <li>
                        <div class="icon"><i class="iconfont icon-gongzuoshi"></i></div>
                        <div class="text">工作室成立</div>
                    </li>
                    <li>
                        <div class="icon"><i class="iconfont icon-renyuan"></i></div>
                        <div class="text">工作室人员构成</div>
                    </li>
                    <li>
                        <div class="icon"><i class="iconfont icon-xuexi"></i></div>
                        <div class="text">学习资料</div>
                    </li>
                </ul>
            </div>
        </div>

        

    </div>
</template>

<script setup>
    import { PageTop } from '../Top';
</script>

<style lang="css" scoped>
.main .beijingout {
    position: relative;
}

.main .beijing {
    width: 100%;
}
.main .title {
    position: absolute;
    width: 100%;
    bottom: -43px;
    z-index: 5;
}

.main .title ul {
    display: flex;
    justify-content: space-around;
}

.main .title ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86px;
    width: 220px;
    font-size: 20px;
    letter-spacing: 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 8%;
}
</style>
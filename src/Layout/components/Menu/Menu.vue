<template>
    <div class="menu">
        <div class="title">Menu</div>
        <div class="icon">
            <img src="../../../../public/img/home_light.png" alt="">    
            <img src="../../../../public/img/24gl-newspapers2.png" alt="">
            <img src="../../../../public/img/xiangmuchengguo.png" alt="">
            <img src="../../../../public/img/guanyu.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .menu {
        position: absolute;
        z-index: 999;
        width: 270px;
        height: 420px;
        top:53px;
        right: -200px;
        border-radius: 50px;
        background: #ffffff;
        box-shadow:  8px 8px 16px #cfcfcf,
             -8px -8px 16px #ffffff;
    }
    .title{
        text-align: center;
        font-size: 30px;
        font-family: 'biaotihei';
        position: relative;
    }
    .title::after{
        content: '';
        position: absolute;
        width: 120px;
        border-bottom: 2px solid black;
        right: 75px;
        bottom: 0px;
    }
    .title::before{
        content: '';
        position: absolute;
        width: 20px;
        border-bottom: 2px solid black;
        right: 247px;
        bottom: -320px;
        animation: moverun 3s infinite linear;
    }
    @keyframes moverun{
        0%{
            right: 247px;
            width: 20px;
            border-color: #8575FC;
        }
        25%{
            right: 75px;
            width: 120px;
            border-color: #FFE500;
        }
        50%{
            right: 3px;
            width:20px;
            border-color: #E08C29;
        }
        75%{
            right: 75px;
            width: 120px;
            border-color: #FFE500;
        }
        100%{
            right: 247px;
            width: 20px;
            border-color: #8575FC;
        }
    }
    .icon{
        width: 100%;
        height: 250px;
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        justify-content: center;
        justify-items: center;
        align-content: center;
        background-color: #F9F9FB;
    }
    .icon img{
        border-radius: 10px;
        transition: all .2S;
    }
    .icon img:hover{
        background-color: #F0EEFF;
        padding: 23px;
    }
</style>
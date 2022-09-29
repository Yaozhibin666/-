<template>
    <div class="footer">
        <div class="foot">
            <div class="title">优贤工作室</div>
            <div class="contact">
                <div class="iconbox">
                    <div class="icon" v-for="item in imgurl">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>
            <div class="record">备案号</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgurl:[
                    {url:"../../../../public/img/QQ.png"},
                    {url:"../../../../public/img/weixin.png"},
                    {url:"../../../../public/img/github-fill.png"}
                ]
        }
    }
}
</script>
<style scoped>
    .footer{
        width: 100vw;
        height: 500px;
        background-color: #0A142F;
    }
    .foot{
        width: 1440px;
        height: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .foot>.title{
        font-size: 40px;
        font-family: 'BIAOTIHEI';
        color: white;
    }
    .contact{
        width: 600px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
    .record{
        width: 600px;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .iconbox{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon{
        background-color: #222B43;
        width: 60px;
        height: 60px;
        border-radius: 15px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }
    .icon:hover{
        -webkit-animation: wobble-hor-bottom 0.8s both;
	        animation: wobble-hor-bottom 0.8s both;
    }
    .icon img{
        width: 40px;
    }
    @-webkit-keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-15px) rotate(-6deg);
                transform: translateX(-15px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(13px) rotate(6deg);
                transform: translateX(13px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-13px) rotate(-3.6deg);
                transform: translateX(-13px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
                transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
                transform: translateX(-6px) rotate(-1.2deg);
      }
    }
    @keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-15px) rotate(-6deg);
                transform: translateX(-15px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(13px) rotate(6deg);
                transform: translateX(13px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-13px) rotate(-3.6deg);
                transform: translateX(-13px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
                transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
                transform: translateX(-6px) rotate(-1.2deg);
      }
    }

</style>
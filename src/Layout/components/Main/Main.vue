<template>
    <div class="bodyer">
        <div class="title">工作室业务范围</div>
        <div class="profile">作为一个提升专业知识的平台，其主攻方向为基础算法,Java,小程序开发以及前端开发。工作室成员在过去的一个学期里取得了优异的成绩:国家级奖项三个，省级奖项八个。</div>
        <div class="bigbox">
            <span v-for="item in list">
                <div>
                    <img :src="item.url" alt="">
                </div>
                <p>{{item.name}}</p>
                <a>{{item.text}}</a>
            </span>
        </div>
        <div class="title">成员组成</div>
        <div class="profile">工作室的多位指导老师经验丰富，教学资源丰富，欢迎各位新同学报名参加，让我们共同构筑人生，起航梦想。</div>
        <div class="headbox">
            <div class="teachers">
                <div class="head" v-for="item in Theads"><img :src="item.url" alt=""></div>
            </div>
            <div class="students">
                <div class="head" v-for="item in Sheads"><img :src="item.url" alt=""></div>
            </div>
        </div>
        <div class="envirW">
                <img src="../../../../public/img/环境宣传照1.jpg" alt="">
            <div class="content">
                <p>良好的氛围</p>
                <a>工作室办公环境舒适，人性化的企业文化。同学之间相处融洽，互帮互助，亲如一家。工作上，有师兄制定学习计划，实行老对新帮扶式学习，让新同学可以尽快地融入工作室氛围中来；生活上，同学关系融洽，团队凝聚力特别强</a>
                <div>
                    <div class="ltbox" v-for="item in fenwei">
                        <h3>{{item.name}}</h3>
                        <div>
                            <img :src="item.url" alt="">
                            <a>{{item.text}}</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {list,Theads,Sheads,fenwei} from '../../../untils/homepage/content'
</script>
<style scoped>
    .bodyer{
        width: 100vw;
        height: 2200px;
        background-color: #F9F9FB;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bodyer .title{
        font-size: 45px;
        padding: 40px 0 20px 0;
        letter-spacing: .2em;
        user-select: none;
        font-family: 'BiaoTiHei';
    }
    .profile{
        width: 1000px;
        font-size: 20px;
        color: #7f7f7f;
        font-family: 'FeiYunTi';
    }
    .bigbox{
        width: 850px;
        height: 650px;
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 50px;
    }
    .bigbox span{
        width: 405px;
        height: 300px;
        display: inline-block;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        user-select: none;
        background-color: white;
        border-radius: 25px;
        transition: all .5S;
        box-shadow:  20px 20px 60px #f7f6f6,
             -20px -20px 60px #ffffff;
    }
    .bigbox span:hover{
        box-shadow:  41px 41px 82px #d9d9d9,
             -41px -41px 82px #ffffff;
    }
    .bigbox span img{
        width: 60px;
    }
    .bigbox span div{
        width: 100px;
        height: 100px;
        border-radius: 100px;
        background-color: #F0EEFF;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .bigbox span p{
        font-size: 30px;
        color: #6854FC;
        margin: 10px 0 10px 0;
        font-family: 'FeiYunTi';
        letter-spacing: .3EM;
    }
    .bigbox span a{
        display: inline-block;
        width: 240px;
        font-size: 15px;
        color: #7f7f7f;
    }
    .headbox{
        width: 1000px;
        height: 300px;
        margin-top: 40px;
    }
    .teachers,.students{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .head{
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin: 20px;
        transition: all .5s ;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 3px solid  #ffffff;
    }
    .head:hover{
        border-radius: 50%;
        box-shadow:  12px 12px 24px #bebebe,
             -12px -12px 24px #ffffff;
    }
    .head img{
        width: 130px;
        height: 130px;
    }
    .envirW{
        width: 100vw;
        height: 720px;
        margin: 50PX auto 0 auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .envirW>img{
        width: 500px;
        height: 700px;
        border-radius: 20px;
        margin: 0 50px 0 100px;
    }
    .envirW .content{
        width: 500px;
        margin-left: 0 100px 0 50px;
        height: 100%;
    }
    .envirW .content p{
        font-size: 35px;
        font-family: 'biaotihei';
    }
    .envirW .content>div {
       margin-top: 20px;
    }
    .envirW .content h3{
        font-family: 'feiyunti';
        letter-spacing: .4em;
    }
    .ltbox div img{
        width: 48px;
        height: 48px;
    }

    .ltbox div{
        height: 85px;
        display: flex;
        margin:10px 0px
        
    }
    .ltbox div a{
        margin-left: 20px;
    }
</style>
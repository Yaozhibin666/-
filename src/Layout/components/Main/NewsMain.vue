<template>
    <div class="NewsMain">
        <div class="News">
            <p class="title" @click="getnews">你想知道<span>消息</span>的这里都有</p>
            <div class="content">
                <div class="left">
                    <!-- 头条 -->
                    <div class="headNews">
                        <img :src="HeadNews.url" alt="">
                        <div class="text">
                            <p>{{HeadNews.title}}</p>
                            <a>{{HeadNews.content}}</a>
                            <div class="dayTime">
                                {{HeadNews.Time}}
                            </div>
                        </div>
                    </div>
                    <div class="Newlist">
                        <div v-for="item in listNew">
                            <img :src="item.url" alt="">
                            <p>{{item.title}}</p>
                            <div class="day">{{item.Time}}</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="title">学习资料/视频</div>
                    <div v-for="item in learn" class="learn">
                        <img :src="item.url" alt="">
                        <div>
                            <p>{{item.title}}</p>
                            <a>{{item.time}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" >
import {HeadNews,listNew,learn,getnews,herfindex} from '../../../untils/news/news'
export default{
    setup(){
        return{HeadNews,listNew,learn,getnews,herfindex}
    },
    mounted(){
        if(herfindex.value==1){
            getnews()
            herfindex.value=-1
        }
    }
}
</script>
<style scoped>
.NewsMain {
    width: 100vw;
    height: 1500px;
    background-color: #F9F9FB;
}

.News {
    width: 1440px;
    height: 1400px;
    margin: 0 auto;
}

.News>.title {
    font-family: 'feiyunti';
    font-size: 40px;
    text-align: center;
    padding-top: 25px;
    position: relative;
}

.News>.title span {
    color: #FFE920;
}

.News>.title::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 80px;
    border-bottom: 3px solid black;
    right: 700px;
    bottom: 2px;
}

.content {
    width: 100%;
    height: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.left {
    width: 850px;
    height: 1100px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.right {
    width: 385px;
    height: 850px;
}

.headNews {
    width: 820px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    cursor: pointer;
    /* margin-top: 180px; */
}

.headNews img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
}

.headNews .text {
    margin-left: 40px;
}

.headNews .text>p {
    margin-top: 20px;
    font-size: 20px;
    width: 450px;
    letter-spacing: .1em;
    font-weight: 700;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    line-height: 40px;
    height: 120px;
}

.headNews .text>a {
    margin-top: 5px;
    font-size: 15px;
    width: 450px;
    color: #7f7f7f;
    letter-spacing: .1em;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    height: 72px;
}

.dayTime {
    width: 450px;
    height: 30px;
    margin-top: 40px;
    font-family: 'biaotihei';
    color: #7f7f7f;
}

.Newlist {
    width: 820px;
    /* 内小盒子宽410 */
    height: 930px;
    /* 内小盒子高260 */
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
}

.Newlist>div {
    width: 400px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: ALL .5s;
}

.Newlist>div img {
    width: 100%;
    border-radius: 20px;
    height: 200px;
}

.Newlist>div>p {
    height: 50px;
    width: 95%;
    font-size: 17px;
    font-weight: 700;
    margin: 0 auto;
    line-height: 25px;

}

.day {
    width: 95%;
    margin: 15px auto 0 auto;
    font-size: 13px;
    color: #7f7f7f;
    font-family: 'biaotihei';
}

.Newlist>div:hover {
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.15);
}

.right>.title {
    font-size: 15px;
    letter-spacing: .2EM;
    font-family: 'biaotihei';
    user-select: none;
}

.learn {
    width: 385px;
    height: 130px;
    margin: 10px 0 20px 0;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.learn img {
    width: 130px;
    height: 130px;
    border-radius: 20px;
}

.learn div {
    width: 240px;
    height: 90%;
    position: relative;
}

.learn div p {
    height: 72px;
    margin-left: 15px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    font-weight: 600;
}

.learn div a {
    font-family: 'biaotihei';
    color: #7f7f7f;
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    left: 15px;
}
</style>
<template>
    <div class="ConnectMain">
        <div class="Connect">
            <div class="title">Connect With Us</div>
            <div class="box">
                <div>
                    <div class="left">
                        <div class="title">联系方式</div>
                        <div class="ps">请在8:30-12:00 OR 14:00-18:00 OR 19:00-21:00联系,其他时间,怕你空跑Zzzz...</div>
                        <div class="listIfmt" style="margin-top: 30PX;"><img src="../../../../public/img/QQ-Lan.png"
                                alt=""><a>15014483407</a></div>
                        <div class="listIfmt"><img src="../../../../public/img/Weixin-Lan.png" alt=""><a>15014483407</a>
                        </div>
                        <div class="listIfmt"><img src="../../../../public/img/dianhua.png" alt=""><a>15014483407</a>
                        </div>
                        <div class="listIfmt"><img src="../../../../public/img/daohangdizhi.png" alt=""><a>信工知信楼F103</a>
                        </div>
                    </div>
                    <div class="right">
                        <form class="right" action="#">
                            <div class="first">
                                <div v-for="item,index in Form">
                                    <p>{{item.title}}<span :style="{display:item.state}">{{item.warn}}</span></p>
                                    <input :type="item.type" :maxlength="item.maxlength" v-if="singular(index)"
                                        v-model="item.content" @blur="blur(index)">
                                    <input :type="item.type" :maxlength="item.maxlength" v-if="plural(index)"
                                        oninput="value=value.replace(/[^\d]/g,'')" v-model="item.content"
                                        @blur="blur(index)">
                                </div>
                            </div>
                            <div class="middle">
                                <p class="title">你最偏向/喜欢/拿手哪一个方向？</p>
                                <span class="WEB"><input type="radio" name="project" value="Web"
                                        v-model="project"><a>Web方向</a></span>
                                <span class="JAVA"><input type="radio" name="project" value="JAVA"
                                        v-model="project"><a>JAVA方向</a></span>
                                <span class="PHP"><input type="radio" name="project" value="PHP"
                                        v-model="project"><a>PHP方向</a></span>
                                <br>
                                <span class="allIn"><input type="radio" name="project" value="ALLIn"
                                        v-model="project"><a>我全都行</a></span>
                                <span class="allNo"><input type="radio" name="project" value="ALLNo"
                                        v-model="project"><a>我都可以学</a></span>
                                {{project}}
                            </div>
                            <div class="last">
                                <p class="title">简单介绍一下自己吧！</p>
                                <textarea cols="5" rows="60" maxlength="150" class="introduce" v-model="Introduce"
                                    maxlenght="150" placeholder="150字以内哦！">内容</textarea>
                            </div>
                            <button type="button" @click="introduce_submit()" class="btn"><a>GO！</a></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Form,project,Introduce,blur,singular,plural,introduce_submit} from "../../../untils/connect/connect"
</script>
<style lang="css" scoped>
.ConnectMain {
    width: 100vw;
    height: 900px;
    background-color: #F9F9FB;
}

.Connect {
    width: 1440px;
    height: 900px;
    margin: 0 auto;
}

.Connect>.title {
    padding-top: 20px;
    font-size: 40px;
    font-family: 'biaotihei';
    text-align: center;
}

.box {
    width: 1260px;
    height: 760px;
    margin: 20px auto;
    background-color: #FFF;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box>div {
    width: 1160px;
    height: 660px;
    display: flex;
    justify-content: space-between;
}

.left {
    height: 100%;
    width: 465px;
    border-radius: 30px;
    background-image: url(../../../../public/img/ConnectBc.png);
}

.right {
    width: 650px;
    height: 100%;
    border-radius: 30px;
}

.left>.title {
    color: white;
    font-size: 35px;
    font-family: 'biaotihei';
    text-align: center;
    margin-top: 20px;
}

.ps {
    width: 80%;
    color: white;
    font-size: 15px;
    margin: 10px auto 0 auto;
}

.listIfmt {
    margin: 10px auto;
    width: 80%;
    height: 50px;
    align-items: center;
    display: flex;
}

.listIfmt img {
    padding: 5px;
    background-color: white;
    width: 40px;
    border-radius: 30px;
    user-select: none;
}

.listIfmt a {
    font-size: 20px;
    margin-left: 30px;
    font-weight: 700;
    color: #FFF;
}

.first {
    margin-top: 40px;
    width: 600px;
    height: 230px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
}

.first p {
    font-size: 20px;
    font-weight: 600;
    height: 34px;
}

.first p span {
    font-size: 10px;
    height: 30px;
    line-height: 30px;
    color: red;
    display: inline-block;
    margin-left: 10px;
}

.first input {
    height: 30px;
    border: none;
    border-bottom: 1px solid #999;
    outline: none;
    font-size: 20px;
    text-indent: .5EM;
}

.middle .title {
    font-size: 25px;
    font-family: 'biaotihei';
}

.middle span a {
    margin-left: 10px;
    font-weight: 700;
    font-size: 18px;
}

.JAVA,
.PHP,
.WEB {
    display: inline-block;
    margin: 10px;
}

.JAVA,
.PHP {
    margin-left: 80px;
}

.allNo {
    margin-left: 90px;
}

.allIn {
    margin-left: 9PX;
    ;
}

.allNo,
.allIn {
    display: inline-block;
    margin-top: 20px;
}

.last {
    margin-top: 20px;
}

.last .title {
    font-size: 25px;
    font-family: 'biaotihei';
}

.introduce {
    width: 550px;
    height: 130px;
    border-radius: 15px;
    outline: none;
    padding: 10px;
    font-size: 15px;
    resize: none;
}

.introduce:focus {
    background-color: #F9F9FB;
}

.btn {
    width: 150px;
    border-radius: 25px;
    height: 50px;
    outline: none;
    border: none;
    background-color: #8575FC;
    font-size: 20px;
    color: white;
    font-family: 'biaotihei';
    margin-left: 400px;
    transition: all .2s;
    cursor: pointer;
}

.btn:active {
    box-shadow: 12px 12px 24px #bebebe,
        -12px -12px 24px #ffffff;
}
</style>
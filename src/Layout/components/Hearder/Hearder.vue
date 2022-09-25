<template>
    <div class="header">
        <div class="Name">YouXian优贤工作室</div>
        <div class="CONTROLS">
            <button class="call_btn">Connect with us</button>
            <div>
                <div class="muchBtn"></div>
            </div>
        </div>
    </div>
    <div class="banner-B">
        <div class="banner">
        <div class="Content">
            <div class="buoy">
                <img src="../../../../public/img/logo.png" alt="">
                <a>#1 {{hotnews}}</a>
            </div>
            <div class="title" >YouXian Welcome Your Join.</div>
            <div class="copyT">
                逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼优贤牛逼
            </div>
            <button style="margin:20px 0 0 80px;" class="call_btn">Connect with us</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hotnews: "恭喜优贤工作室荣获一等奖！"
        }
    }
}
</script>
<style scoped>
.header {
    width: 100vw;
    height: 100px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.Name {
    width: 400px;
    height: 100%;
    margin-left: 400px;
    font-size: 40px;
    line-height: 100px;
    user-select: none;
    font-family: 'BiaoTiHei';
}

.header .CONTROLS {
    width: 500px;
    height: 100%;
    margin-right: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.call_btn {
    width: 200px;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-color: #6854FC;
    font-size: 18px;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

.muchBtn {
    width: 35px;
    border-bottom: 5px solid black;
    position: relative;
}

.header .CONTROLS>div {
    width: 35px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.header .CONTROLS>div:hover .muchBtn::after {
    left: 0px;
}

.header .CONTROLS>div:hover .muchBtn::before {
    left: 8px;
}

.muchBtn::after {
    content: '';
    position: absolute;
    width: 28px;
    border-bottom: 5px solid black;
    top: -15px;
    left: 8px;
    transition: all .5S;
}

.muchBtn::before {
    content: '';
    position: absolute;
    width: 28px;
    border-bottom: 5px solid black;
    top: 15px;
    left: 0px;
    transition: all .5S;
}
.banner-B{
    width: 100vw;
    height: 720px;
    background-color: #F9F9FB;
}

.banner {
    width: 1440px;
    height: 720px;
    background: url(../../../../public/img/banner.png);
    background-size: 1440px 720px;
    background-position: -40px 70px;
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.banner .Content {
    width: 700px;
    height: 80%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;

}

.buoy {
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background-color: #EEEEF0;
    display: flex;
    align-items: center;
    margin-top: 110px;
    margin-left: 80px;
}

.buoy img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-left: 10px;
}

.buoy a {
    font-size: 15px;
    margin-left: 20px;
    font-weight: 700;
    color: black;
    user-select: none;
}

.banner .Content .title {
    width: 220px;
    color: black;
    font-size: 50px;
    font-weight: 500;
    line-height: 60px;
    margin-left: 80px;
    margin-top: 20px;
    font-family: 'BiaoTiHei';
}

.copyT {
    margin-top: 20px;
    width: 600px;
    height: 60px;
    overflow: hidden;
    margin-left: 80px;
    color: #7f7f7f;
}
</style>
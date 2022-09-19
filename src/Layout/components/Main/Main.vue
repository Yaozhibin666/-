<template>
    <div class="main w">
        <div class="announcement">
            <div class="caption">
                <i class="iconfont icon-tongzhi"></i>
                <strong>通知公告</strong>
            </div>
            <div class="text">
            </div>
        </div>
        <div class="aboutUs">
            <div class="caption">关于我们</div>
            <div class="text">
                <div class="cn">
                    <p>优贤⼯作室是⼀个具有优秀师资并且实操能⼒强⼤的团队。</p>
                    <p>为了促进学习交流，实际运⽤⾃⼰所学的知识，提⾼⾃⼰的⽔平，锻炼⾃⼰与他⼈协作的能⼒，组建软件开发⼩团队来锻炼⾃⼰。</p>
                    <p>我们团队的⽬标是编写⼀个完整的可投⼊实际⽤的⽹站的开发，使我们能够在开发过程中能够有所收获，获得锻炼。</p>
                    <p>团队中的每⼀位成员都有着⾼昂的学习热情，能够找好⾃⼰的位置，为整个团队贡献⼒量</p>
                </div>
                <div class="en">
                    <p> Want to study with the best?We can't wait to help you get started! </p>
                    <input type="button" value="了解更多">
                </div>
            </div>
        </div>
        <div class="Faculty">
            <div class="caption">
                <div class="cn"><i class="iconfont icon-shizi"></i>师资⼒量</div>
                <div class="en">The people behind Ration studio</div>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="avatar"></div>
                        <div class="text">简单介绍：</div>
                    </li>
                    <li>
                        <div class="avatar"></div>
                        <div class="text">简单介绍：</div>
                    </li>
                    <li>
                        <div class="avatar"></div>
                        <div class="text">简单介绍：</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contactUs">
            <div class="caption">
                ···联系我们···
            </div>
            <i class="iconfont icon-xiayi"></i>
        </div>
    </div> 
</template>

<script setup>

</script>

<style lang="css" scoped>
.announcement{
    display: flex;
    justify-content: center;
    width: 85%;
    height: 90px;
    margin: 0 auto;
    margin-top: 95px;
   background-color: rgb(255, 255, 255);
}
.announcement .caption{
    margin-top: 5px;
    font-size: 18px;
    letter-spacing: 5px;
}
.aboutUs{
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
    margin-top: 60px;
}
.aboutUs .caption{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    margin-bottom: 10px;
}
.aboutUs .text{
    display: flex;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
}
.aboutUs .text .cn{
    width: 50%;
    padding: 30px;
}
.aboutUs .text .cn p{
    margin-bottom: 20px;
}
.aboutUs .text .en{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.aboutUs .text .en p{
    width: 90%;
    margin-left: 20px;
    padding-top: 20px;
    padding-bottom: 25px;
    border-bottom: solid 4px black;
}
.aboutUs .text .en input{
    width: 110px;
    height: 38px;
    /* border: solid 1px red; */
    align-self: flex-end;
    margin-right: 30px;
    margin-bottom: 20px;
}
.Faculty {
    width: 85%;
    margin: 0 auto;
    margin-top: 60px;
}
.Faculty .caption{
    font-size: 20px;
}
.icon-shizi{
    font-size: 24px;
}
.Faculty .caption .cn{
    letter-spacing: 2px;
}
.Faculty .caption .en{
    padding-left: 20px;
    font-size: 14px;
}
.Faculty .content ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;
}
.Faculty .content ul li .avatar{
    width: 145px;
    height: 145px;
    border-radius: 50%;
    border: solid 1px black;
    background-color: white;
}
.Faculty .content ul li .text{
    padding-left: 20px;
}
.contactUs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 24px;
    width: 50%;
}
.icon-xiayi{
    font-size: 20px;
}
</style>
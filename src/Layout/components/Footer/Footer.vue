<template>
    <div class="footer">
        <div class="foot">
            <div class="title">优贤工作室</div>
            <div class="contact">联系方式图标</div>
            <div class="record">备案号</div>
        </div>
    </div>
</template>
<script>
export default {
    
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
        border: 1px solid white;
        height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .record{
        width: 600px;
        height: 50px;
        border: 1px solid #7f7f7f;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
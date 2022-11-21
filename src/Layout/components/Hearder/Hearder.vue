<template>
    <div class="header">
        <div class="Name">YouXian优贤工作室</div>
        <div class="CONTROLS">
            <button class="call_btn">Connect with us</button>
            <div @mouseover="hoverMenuIn" @mouseleave="hoverMenuOut">
                <div class="muchBtn" >
                    <transition name="Fade">
                        <Menu class="menu" :style="MenuStyle" v-if="show"></Menu>
                    </transition>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from '../Menu/Menu.vue'
export default {
    components:{ Menu },
    data() {
        return {
            hotnews: "恭喜优贤工作室荣获一等奖！",
            moveOut:0,
            show:false,
            MenuStyle:{
                display:"NONE"
            }
        }
    },
    methods:{
        hoverMenuIn () {
            // console.log("移入移入")
            this.show=true
            this.$data.moveOut=1
            this.$data.MenuStyle.display="BLOCK"
        },
        hoverMenuOut () {
            // console.log("移出移出")
            this.$data.moveOut=0
            setTimeout(()=>{
                if(this.$data.moveOut!=1){
                    this.show=false
                    this.$data.MenuStyle.display="none"
                }
            },1000)
        }
    }
}
</script>
<style scoped>
.header {
    min-width: 1619px;
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
.Fade-enter,
.Fade-leave-to {
	opacity: 0;
}
.Fade-enter-to,
.Fade-leave {
	opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
	transition: all .5s;
}	
.header .CONTROLS>div {
    width: 35px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header .CONTROLS>div:hover .muchBtn::after {
    left: 0px;
    border-color: #6854FC;
}

.header .CONTROLS>div:hover .muchBtn::before {
    left: 8px;
    border-color: #6854FC;
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
</style>
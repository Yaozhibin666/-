<template>
  <Banner></Banner>
  <div class="fg"></div>
  <Bodyer></Bodyer>
  <Footer></Footer>
  
</template>
<script>
import Hearder from '../Layout/components/Hearder/Hearder.vue';
import Bodyer from '../Layout/components/Main/Main.vue'
import Footer from '../Layout/components/Footer/Footer.vue'
import Banner from '../Layout/components/Top/Banner.vue'
export default {
  components: { Hearder, Bodyer, Footer ,Banner}
}
</script>
<style scoped>
  .fg{
      width: 100vw;
      margin: 0 auto;
      height: 52px;
      background-color: #AEE2FF;
  }
</style>
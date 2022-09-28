<template>
    <Hearder></Hearder>
    <router-view>
        
    </router-view>
    <!-- <HomeView></HomeView> -->
</template>

<script setup>
import { PageFooter } from './components/Footer';
import { PageHearder } from './components/Hearder';
import { PageMain } from './components/Main';
import { PageMenu } from './components/Menu';
import { PageTab } from './components/Tab';
import NewsPage from '../views/NewsPage.vue';
import HomeView from '../views/HomeView.vue';
import Hearder from './components/Hearder/Hearder.vue';


</script>

<style lang="css" scoped>
.bgc{
    background-color: rgb(240, 237, 237);
}
</style>
<template>
    <div class="bgc">
    <PageHearder />
    <PageMain />
    <PageFooter />
    </div>
</template>

<script setup>
import { PageFooter } from './components/Footer';
import { PageHearder } from './components/Hearder';
import { PageMain } from './components/Main';
import { PageMenu } from './components/Menu';
import { PageTab } from './components/Tab';


</script>

<style lang="css" scoped>
.bgc{
    background-color: rgb(240, 237, 237);
}
</style>
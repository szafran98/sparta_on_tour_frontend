<template>
    <div id="app">
        <div id="nav">
            <Header />
        </div>
        <div class="background">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style>
    .background{
        background-attachment: fixed;
        background-image: url('./assets/stadion.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow:auto;
    }
</style>

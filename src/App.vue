<template>
    <div id="app">
        <div id="nav">
            <Header v-bind:userData="userData" v-on:logout="logout"/>
        </div>
        <div class="background">
            <router-view v-bind:userData="userData" v-on:logged="updateUserData"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {TokenService} from './storage/service'

export default {
    components: {
        Header
    },
    data() {
        return {
            userData: TokenService.getUserData() || null
        }
    },
    methods: {
        logout() {
            this.userData = null
            localStorage.removeItem('user-data')
        },
        updateUserData() {
            this.userData = TokenService.getUserData()
        }
    },
    updated() {
        //this.userData = TokenService.getUserData() || null
        
    },
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

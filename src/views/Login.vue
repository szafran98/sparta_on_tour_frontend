<template>
    <div class="container">
        <div class="row" style="padding-top: 25%">
        <div class="card-panel col s6 m4 offset-m4 offset-s3 ">
            <form @submit.prevent="login">
            <div class="row">
                <div class="input-field inline col s12">
                    <input id="email_inline" type="email" class="validate" v-model="email">
                    <label for="email_inline">Email</label>
                    <span class="helper-text" data-error="Zły format" data-success="W porządku"></span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate" v-model="password">
                    <label for="password">Hasło</label>
                </div>
            </div>    
            <div class="row">
                <button class="waves-effect waves-light btn col s6 m6 offset-m3 offset-s3" type="submit">Zaloguj</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {TokenService} from '../storage/service'
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            //token: null
        }
    },
    methods: {
        login() {
            let data = {
                username: this.email,
                password: this.password
            }
            axios.post('http://127.0.0.1:8000/auth/', data)
            .then(res => {
                TokenService.setUserData(res.data)
                this.$emit('logged')
                this.$router.push({ name: 'Home' })
            })
        }
    },
    updated() {
        
    },
}
</script>

<style scoped>
    .container{
        height: 92vh;
    }
    .row .input-field{
        margin-bottom: 0;
    }
</style>
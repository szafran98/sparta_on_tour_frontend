<template>
    <div class="row container">
        <div class="col s12 m12">
            <div class="card-panel">
                <form @submit.prevent="register">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate" v-model="firstName">
                        <label for="first_name">Imię</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate" v-model="lastName">
                        <label for="last_name">Nazwisko</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="pesel" type="text" class="validate" v-model="pesel">
                        <label for="pesel">Pesel</label>
                    </div>
                    <div class="input-field inline col s6">
                        <input id="email_inline" type="email" class="validate" v-model="email">
                        <label for="email_inline">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="password" type="password" class="validate" v-model="password">
                        <label for="password">Hasło</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="password2" type="password" class="validate" v-model="password2">
                        <label for="password2">Powtórz hasło</label>
                    </div>
                </div>
                <span style="text-align: center">{{ error }}</span>
                <div class="row">
                    <button class="waves-effect waves-light btn col s4 m4 offset-m4 offset-s4" type="submit">Zarejestruj</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            firstName: null,
            lastName: null,
            pesel: null,
            email: null,
            password: null,
            password2: null,
            error: null
        }
    },
    methods: {
        checkPasswords() {
            if(this.password !== this.password2) {
                this.error = 'Podane hasła nie są identyczne' 
                //return false
            } else {
                return true
            }
        },
        register() {
            if(this.checkPasswords()) {
                let data = {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    pesel: this.pesel,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                }
                axios.post('http://127.0.0.1:8000/api/users/', data)
                .then(res => {
                    console.log(res)
                })
            }
        }
    },
}
</script>

<style scoped>
    .container{
        height: 100vh;
    }
    .input-field.inline input{
        margin-bottom: 0;
    }
</style>
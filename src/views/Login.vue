<template>
    <div class="container">
        <div class="row" style="padding-top: 25%">
        <div class="card-panel col s6 m4 offset-m4 offset-s3 ">
            <div class="row">
                <div class="input-field inline col s12">
                    <input id="email_inline" type="email" class="validate">
                    <label for="email_inline">Email</label>
                    <span class="helper-text" data-error="Zły format" data-success="W porządku"></span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Hasło</label>
                </div>
            </div>    
            <div class="row">
                <a class="waves-effect waves-light btn col s6 m6 offset-m3 offset-s3">Zaloguj</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
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
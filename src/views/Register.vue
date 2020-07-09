<template>
    <div class="row container">
        <div class="col s12 m12">
            <div class="card-panel">
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                        <label for="first_name">Imię</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="last_name" type="text" class="validate">
                        <label for="last_name">Nazwisko</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="pesel" type="text" class="validate">
                        <label for="pesel">Pesel</label>
                    </div>
                    <div class="input-field inline col s6">
                        <input placeholder="Placeholder" id="email_inline" type="email" class="validate">
                        <label for="email_inline">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="password" type="password" class="validate">
                        <label for="password">Hasło</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="password2" type="password" class="validate">
                        <label for="password2">Powtórz hasło</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
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
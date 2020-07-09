<template>
<div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper" style="background: linear-gradient(0deg, rgba(253,29,29,1) 22%, rgba(252,250,69,1) 100%);">
            <img src="../assets/herb.svg" alt="" style="height: 90%; padding-top: 5px; padding-left: 20px">
            
            <router-link class="brand-logo" :to="{ name: 'Home' }">SpartaOnTour</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Rejestracja</a></li>
                <li><router-link :to="{ name: 'Login' }">Logowanie</router-link></li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
        }
    }
}
</script>

<style>

</style>
<template>
      <div class="home container">
        <div v-for="event in events" :key="event.id">
            <h2 class="header">{{ event.title }}</h2>
        <div class="card">
        <div class="row" style="border-bottom: 1px solid rgba(160,160,160,0.2); margin-bottom: 0">
            <div class="col s4 card-image" style="padding: 0">
                <img :src=event.image_link style="width: 100%">
            </div>
            <div class="col s8 card-content">
                <p>{{ event.description }}</p>
            </div>
        </div>
            <div class="row" style="margin-bottom: 0">
                <div class="col s4" style="border-right: 1px solid rgba(160,160,160,0.2);">
                    <p>Data wydarzenia: <br> {{ event.date }}</p>
                </div>
                <div class="col s4" style="border-right: 1px solid rgba(160,160,160,0.2);">
                    <p>Zapisy do: <br>{{ event.can_be_joined_to }}</p>
                </div>
                <div class="col s4 center-align" style="margin-top: 2%">
                    <a class="waves-effect waves-light btn" href="#">Zapisz się na wydarzenie</a>
                </div>
            </div>
            </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    components: {

    },
    props: ['userData'],
    data() {
        return {
            events: []
        }
    },
    methods: {
        getEvents() {
            axios.get('http://127.0.0.1:8000/api/events/')
            .then(res => {
                res.data.forEach(event => {
                    this.events.push(event)
                })
            })
        }
    },
    created() {
        this.getEvents()
    }
}
</script>

<style scoped>
    

</style>
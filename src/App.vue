<script>
import { RouterView, RouterLink } from 'vue-router'
import ToggleTheme from './components/ToggleTheme.vue'

export default {
  name: 'app',
  data(){
    return {
      last_reset_views24h: Date,
      last_reset_views7d: Date,
      last_reset_views1m: Date
    }
  },
  components: {
    ToggleTheme,
  },

  async created(){

    var time = new Date();
    this.lastViewsReset = time;
    console.log(this.lastViewsReset)

    const interval_24h = (60 * 60000) * 24;
    const interval_7d = interval_24h * 7;
    const interval_1m = interval_7d * 4;

    // Set Interval and update all movies views_(24h, 7d, 1m)
    const baseURL = 'http://localhost:3000/';

    // GET ALL movies
    await fetch(baseURL + 'movies')
      .then(response => response.json())
      .then(movies => {

        // PATCH ALL movies.views_24h to 0 every 24 h
        let timerID = setInterval(() => {

          movies.forEach((movie) => {

            // New objet with parameter views reset to 0
            var movieUpdated = movie;
            movieUpdated.views_24h = 0;

            // Add delay to every fetch to prevent overload
            let timer2ID = setTimeout( async () => {
              await fetch(baseURL + 'movies/' + movie.id, {
              method: 'PATCH',
              body: JSON.stringify(movieUpdated),
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            })
            .then(response => response.json())
            .then(data => { console.log('views_24h reset') })
            }, 500)
          });

          // Update lasr update date
          this.last_reset_views24h = new Date();

          console.log('RESET EN VISTAS 24H DE PELICULAS', this.last_reset_views24h)

        }, interval_24h)
      })
  }
}
</script>

<template>
    <router-view />
</template>


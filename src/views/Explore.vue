<template>
    <section class="relative grid grid-cols-12 grid-rows-12">
    <!-- Full Sidebar menu component -->
    <AsideMenu ref="asideMenu" v-if="showAside" v-on:closeAsideMenu="showAside = !showAside" class="2xl:col-span-2 2xl:relative xl:col-span-1 xl:absolute xl:z-40 xl:h-full md:absolute md:top-0 md:left-0 md:w-[320px] md:z-40 md:shadow-2xl md:shadow-d-surface transition-all ease-in duration-150 lg:w-[8.4%] 2xl:w-full"/>

    <main id="mainContainer" class="md:col-start-1 lg:col-start-2 2xl:col-start-3 col-end-13 grid grid-cols-8 gap-x-8 dark:bg-gradient-to-br dark:from-d-theme-from dark:via-d-theme-via dark:to-d-theme-to pt-8 2xl:px-48 xl:px-40 md:px-16 bg-gradient-to-br from-l-theme-from to-l-theme-to">
        
    <!-- Header component / customEvent for toggle aside menu -->
    <HeaderComp v-on:showAsideMenu="toggleAsideMenu" class="col-span-full" />

      <!-- Trending movies section-->
      <section class="col-span-full relative mt-16 mb-32">

        <!-- Fire icon + title -->
        <div class="w-full mb-8 flex flex-row justify-between items-center">
          <div class="flex items-center">
            <svg class="lg:w-10 md:w-10 dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <p class="ml-4 text-3xl font-bold italic tracking-wider shadow-sm dark:text-d-soft-white select-none">Explorar</p>
          </div>
        </div>

        <!-- Cards container -->
        <div class="grid 3xl:grid-cols-8 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 xl:gap-x-8 xl:gap-y-24 lg:gap-x-4 lg:gap-y-24 md:grid-cols-2 md:gap-x-12 md:gap-y-20">

          <!-- Card -->
          <router-link :to="{name: 'review', params: {movie_id: movie.id}}" v-for="movie in latestMovies" class="relative lg:col-span-2 h-[480px] rounded-lg overflow-visible shadow-2xl shadow-d-surface hover:shadow-md transition ease-in-out duration-300 cursor-pointer group">

            <!-- Background-poster -->
            <div class="absolute bottom-0 h-full rounded-lg overflow-hidden">
              <img :src="movie.poster" :alt="movie.title" class="h-full group-hover:scale-110 transition ease-in-out duration-150">
            </div>

            <!-- Score and time -->
            <div class="h-10 w-full px-6 flex flex-row justify-between items-center backdrop-blur-sm dark:text-d-soft-white">
                <!-- Score -->
                <div class="w-fit text-sm flex flex-row items-center">
                    <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-1">
                    <p>{{ movie.vote_average }}</p>
                </div>
                <!-- Time -->
                <div class="w-fit text-sm flex flex-row items-center">
                    <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-1">
                    <p>{{ movie.duration }}</p>
                </div>
            </div>

            <!-- Options -->
            <div class="absolute bottom-0 h-20 w-full overflow-visible group">

              <!-- Play button + title + add + seen -->
              <div class="w-full h-20 z-10 flex flex-row justify-between items-center rounded-lg backdrop-blur-md">

                <div class="flex items-center p-4">
                  <!-- Play button -->
                  <router-link :to="{name: 'review', params: {movie_id: movie.id}}" class="w-10 h-10 rounded-full flex justify-center items-center dark:bg-gradient-to-br from-d-variant-1 to-d-primary cursor-pointer transition ease-in duration-150 group/play">
                    <svg class="text-d-surface w-8 h-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <!-- Pop-over info -->
                    <div class="absolute opacity-0 group-hover/play:opacity-100 -top-9 left-[2px] w-26 px-4 py-2 flex justify-center items-center rounded-lg dark:bg-d-surface border border-d-muted transition ease-in duration-100">
                        <p class="text-sm dark:text-d-soft-white">re<strong>play tráiler</strong></p>
                    </div>
                  </router-link>

                  <!-- Title + date -->
                  <div class="relative ml-4">
                    <p class="w-28 text-sm font-bold dark:text-d-soft-white select-none">{{ movie.title }}</p>
                  </div>
                
                </div>

                <div v-show="cookieExists" class="relative h-full w-20 pr-4 pb-4 flex justify-between items-end">

                  <!-- Add to my list -->
                  <div @click="updateList(1,movie.id)" id="addToListButton" class="relative rounded-full h-7 w-7 flex justify-center items-center dark:bg-d-background cursor-pointer group/pendent">

                    <svg class="w-5 h-5 dark:text-d-soft-white hover:opacity-75 transition ease-in duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <!-- Pop-over info -->
                    <div class="absolute opacity-0 group-hover/pendent:opacity-100 -top-16 -left-18 flex justify-center items-center w-44 px-4 py-2 rounded-lg border border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                      <p>Añadir a 'pendientes'</p>
                    </div>
                  </div>

                  <!-- Mark as seen -->
                  <div @click="updateList(2,movie.id)" id="markAsSeenButton" class="relative rounded-full h-7 w-7 flex justify-center items-center dark:bg-d-background cursor-pointer group/watched">

                    <svg class="w-5 h-5 dark:text-d-soft-white hover:opacity-75 transition ease-in duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <!-- Pop-over info -->
                    <div class="absolute opacity-0 group-hover/watched:opacity-100 -top-16 -left-24 flex justify-center items-center w-40 px-4 py-2 rounded-lg border border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                      <p>Marcar como vista</p>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Show hidden info on parent hover -->
              <div class="absolute w-full flex flex-col items-center -translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transitioin ease-in-out duration-150">
                <!-- Release date -->
                <span class="py-1 px-3 my-2 text-sm rounded-2xl dark:bg-d-surface dark:text-d-soft-white">
                  {{ movie.release_date }}
                </span>
                <!-- Generes -->
                <div class="w-full flex flex-row justify-center items-center">
                  <span v-for="genere in movie.generes" class="py-1 px-3 mx-1 text-sm rounded-2xl dark:bg-d-surface dark:text-d-soft-white">
                    {{ genere }}
                  </span>
                </div>
              </div>
            </div>

          </router-link>
        </div>

        <!-- Pop-up Modal cards options -->
        <span class="opacity-0 fixed bottom-14 right-14 px-8 py-4 rounded-lg text-l-soft-black dark:border-l-8 dark:bg-d-surface bg-d-soft-white transition ease-in-out duration-200" :class="this.popupModal.class">
          <p>{{ this.popupModal.message }}</p>
        </span>
      </section>

    </main>
  </section>
  
  <!-- Footer component -->
  <Footer />
</template>

<script>
import AsideMenu from '../components/AsideMenu.vue';
import Footer from '../components/Footer.vue';
import HeaderComp from '../components/HeaderComp.vue';

export default{
    name: 'Explore',
    components: {
        AsideMenu,
        HeaderComp,
        Footer
    },
    data(){
        return{
            showAside : true,
            cookieExists: false,
            user: {},
            latestMovies: [],
            topRatedMovies: [],
            popupModal: {
            status: false,
            message: String,
            class: String
      }
        }
    },

    methods: {
        toggleAsideMenu(){
        this.showAside = !this.showAside
        console.log('It works. ', this.showAside)
        },

        async updateList(operationType, movie_id){

            // Update the user's list of pending movies.
            if(operationType === 1){

            // If movie id is already in user's pendent list, pop-up modal warning message.
            if(this.user.profile.movies_pendent.includes(movie_id)){
                this.popupModal.message = "La película ya se encuentra en la lista 'pendiente por ver'."
                this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
                
                setTimeout(() => {
                this.popupModal.class = "opacity-0"
                },4000)

            }
            else{

                this.user.profile.movies_pendent.push(movie_id);

                const dataUpdated = this.user;

                // PATCH user movies_pendent list
                fetch('http://localhost:3000/users/'+ this.user.id, {
                    method: 'PATCH',
                    body: JSON.stringify(dataUpdated),
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                    })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })

                // Succesful pop-up modal message
                this.popupModal.message = "Película en lista 'pendiente por ver'."
                this.popupModal.class = "opacity-100 dark:text-d-secondary border-d-secondary"

                setTimeout(() => {
                this.popupModal.class = "opacity-0"
                },4000)
            }

            }
            // Update the user's list of watched movies.
            else if(operationType === 2){

            // If movie id is already in user's watched list, pop-up modal warning message.
            if(this.user.profile.movies_seen.includes(movie_id)){

                this.popupModal.message = "La película ya está marcada como vista."
                this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
                
                setTimeout(() => {
                this.popupModal.class = "opacity-0"
                },4000)
            }
            else{

                this.user.profile.movies_seen.push(movie_id);

                const dataUpdated = this.user;

                // PATCH user movies_pendent list
                fetch('http://localhost:3000/users/'+ this.user.id, {
                    method: 'PATCH',
                    body: JSON.stringify(dataUpdated),
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                    })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })

                // Succesful pop-up modal message
                this.popupModal.message = "Película marcada como vista."
                this.popupModal.class = "opacity-100 dark:text-d-secondary border-d-secondary"

                setTimeout(() => {
                this.popupModal.class = "opacity-0"
                },4000)
            }
            }
        },
    },

    async created(){
        const baseURL = 'http://localhost:3000/';

        // Check if session cookie exists
        if(document.cookie != ""){
            console.log("cookie exists")
            this.cookieExists = true

            // Get authenticated user data
            await fetch(baseURL + 'users')
                    .then(response => response.json())
                    .then(userList => {
                        for(var i = 0; i < userList.length; i++){
                            if(('authCookie=' + userList[i].cookie) == document.cookie){
                                return this.user = userList[i];
                            }
                        }
                    });
        }

        // Get trending movies (sorted by 7d_views)
        await fetch(baseURL + 'movies')
        .then(response => response.json())
        .then(moviesList => {

            console.log('MOVIES LIST: ',moviesList)

            for(var i = moviesList.length-1; i >= 0 ; i--){
                this.latestMovies.push(moviesList[i]);
            }
        })

  }
}
</script>


<script>
// @ is an alias to /src
import AsideMenu from '../components/AsideMenu.vue';
import Footer from '../components/Footer.vue';
import Slider from '../components/Slider.vue';
import HeaderComp from '../components/HeaderComp.vue';

const theme = document.documentElement.classList.contains('dark')
if(theme){
  const themeSet = 'w-5/6 bg-gradient-to-tl from-d-surface via-d-variant-1 to-d-surface'
}

export default {
  name: 'Home',
  components: {
    AsideMenu,
    HeaderComp,
    Slider,
    Footer,
  },
  data() {
    return {
      // Default on false
      showAside : true,
      cookieExists: false,
      user: {},
      trendingMovies: [],
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

    async updateList(operationType, film_id){

      // Update the user's list of pending movies.
      if(operationType === 1){

        // If movie id is already in user's pendent list, pop-up modal warning message.
        if(this.user.profile.movies_pendent.includes(film_id)){
          this.popupModal.message = "La película ya se encuentra en la lista 'pendiente por ver'."
          this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
          
          setTimeout(() => {
            this.popupModal.class = "opacity-0"
          },4000)

        }
        else{

          this.user.profile.movies_pendent.push(film_id);

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
        if(this.user.profile.movies_seen.includes(film_id)){

          this.popupModal.message = "La película ya está marcada como vista."
          this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
          
          setTimeout(() => {
            this.popupModal.class = "opacity-0"
          },4000)
        }
        else{

          this.user.profile.movies_seen.push(film_id);

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
        this.trendingMovies = moviesList.sort((a, b) => (a.views_7d < b.views_7d) ? 1 : -1);

        if(this.trendingMovies.length > 16){
          this.trendingMovies.length = 16
        }
      })

      console.log( 'TRENDING MOVIES: ', this.trendingMovies )
  }
}
</script>

<!-- CUSTOM STYLES SECTION -->
<style lang="scss">
</style>

<!-- HTML TEMPLATE SECTION -->
<template>
  <section class="relative grid grid-cols-12 grid-rows-12">
    <!-- Full Sidebar menu component -->
    <AsideMenu ref="asideMenu" v-if="showAside" v-on:closeAsideMenu="showAside = !showAside" class="2xl:col-span-2 2xl:relative xl:col-span-1 xl:absolute xl:z-40 xl:h-full md:absolute md:top-0 md:left-0 md:w-[320px] md:z-40 md:shadow-2xl md:shadow-d-surface transition-all ease-in duration-150 lg:w-[8.4%] 2xl:w-full"/>
    <!-- Small Sidebar menu component -->

    <main id="mainContainer" class="md:col-start-1 lg:col-start-2 2xl:col-start-3 col-end-13 grid grid-cols-8 gap-x-8 dark:bg-gradient-to-br dark:from-d-theme-from dark:via-d-theme-via dark:to-d-theme-to pt-8 2xl:px-48 xl:px-40 md:px-16 bg-gradient-to-br from-l-theme-from to-l-theme-to">
        
    <!-- Header component / customEvent for toggle aside menu -->
    <HeaderComp v-on:showAsideMenu="toggleAsideMenu" class="col-span-full" />
        
    <!-- Home view main content -->
      <!-- Banner section -->
      <section class="col-span-full py-16 flex justify-center">
        <div class="2xl:h-96 w-full shadow-2xl shadow-d-surface">
          <!-- Carousel Component -->
          <Slider />
        </div>
      </section>

      <!-- Groups section -->
      <section v-if="cookieExists" class="col-span-full relative">
        <!-- Icon groups -->
        <div class="mb-8 flex flex-row">
          <svg class="w-8 text-d-surface dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="ml-4 text-3xl font-bold italic tracking-wider shadow-sm dark:text-d-soft-white">Grupos</p>
        </div>

        <div class="relative grid 3xl:grid-cols-8 2xl:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-8 justify-between items-center">

          <!-- Group card -->
          <div class="col-span-2 md:flex 2xl:flex-col md:flex-row md:justify-between h-40 p-4 rounded-lg dark:shadow-xl dark:bg-gradient-to-br from-d-surface via-d-background to-d-background transition ease-in-out duration-150 cursor-pointer">
            <!-- Card header -->
            <div class="h-16 mb-2 flex flex-row items-center 2xl:w-full xl:w-[50%] md:w-[40%] md:h-full">
              <!-- Card movie image -->
              <div class="relative rounded-lg overflow-hidden 2xl:h-fit md:h-full">
                <img src="../assets/Images/Posters/the_batman_banner.jpg" alt="blade-runner-banner" class="2xl:w-24 xl:w-full md:w-full md:h-full">
              </div>

              <!-- Members of the group -->
              <div class="relative h-full ml-8 2xl:block md:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>

            <!-- Group title -->
            <div class="h-16 flex flex-col xl:justify-between items-start 2xl:w-full xl:w-[45%] md:w-[60%]">
              <p class="dark:text-d-muted 2xl:text-[12px]">Creador - <span class="text-d-warning">Username</span></p>
                <p class="dark:text-d-soft-white lg:text-lg 2xl:text-base">Universo DC Comics</p>
                <p class="text-sm dark:text-d-muted lg:text-lg 2xl:text-sm">Colección de las mejores películas DC</p>

              <!-- Members of the group -->
              <div class="relative md:block 2xl:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>
          </div>

          <!-- Group card -->
          <div class="col-span-2 md:flex 2xl:flex-col md:flex-row md:justify-between h-40 p-4 rounded-lg dark:shadow-xl dark:bg-gradient-to-br from-d-surface via-d-background to-d-background transition ease-in-out duration-150 cursor-pointer">
            <!-- Card header -->
            <div class="h-16 mb-2 flex flex-row items-center 2xl:w-full xl:w-[50%] md:w-[40%] md:h-full">
              <!-- Card movie image -->
              <div class="relative rounded-lg overflow-hidden 2xl:h-fit md:h-full">
                <img src="../assets/Images/Posters/the_batman_banner.jpg" alt="blade-runner-banner" class="2xl:w-24 xl:w-full md:w-full md:h-full">
              </div>

              <!-- Members of the group -->
              <div class="relative h-full ml-8 2xl:block md:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>

            <!-- Group title -->
            <div class="h-16 flex flex-col xl:justify-between items-start 2xl:w-full xl:w-[45%] md:w-[60%]">
              <p class="dark:text-d-muted 2xl:text-[12px]">Creador - <span class="text-d-warning">Username</span></p>
                <p class="dark:text-d-soft-white lg:text-lg 2xl:text-base">Universo DC Comics</p>
                <p class="text-sm dark:text-d-muted lg:text-lg 2xl:text-sm">Colección de las mejores películas DC</p>

              <!-- Members of the group -->
              <div class="relative md:block 2xl:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>
          </div>

          <!-- Group card -->
          <div class="col-span-2 md:flex 2xl:flex-col md:flex-row md:justify-between h-40 p-4 rounded-lg dark:shadow-xl dark:bg-gradient-to-br from-d-surface via-d-background to-d-background transition ease-in-out duration-150 cursor-pointer">
            <!-- Card header -->
            <div class="h-16 mb-2 flex flex-row items-center 2xl:w-full xl:w-[50%] md:w-[40%] md:h-full">
              <!-- Card movie image -->
              <div class="relative rounded-lg overflow-hidden 2xl:h-fit md:h-full">
                <img src="../assets/Images/Posters/the_batman_banner.jpg" alt="blade-runner-banner" class="2xl:w-24 xl:w-full md:w-full md:h-full">
              </div>

              <!-- Members of the group -->
              <div class="relative h-full ml-8 2xl:block md:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>

            <!-- Group title -->
            <div class="h-16 flex flex-col xl:justify-between items-start 2xl:w-full xl:w-[45%] md:w-[60%]">
              <p class="dark:text-d-muted 2xl:text-[12px]">Creador - <span class="text-d-warning">Username</span></p>
                <p class="dark:text-d-soft-white lg:text-lg 2xl:text-base">Universo DC Comics</p>
                <p class="text-sm dark:text-d-muted lg:text-lg 2xl:text-sm">Colección de las mejores películas DC</p>

              <!-- Members of the group -->
              <div class="relative md:block 2xl:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>
          </div>

          <!-- Group card -->
          <div class="col-span-2 md:flex 2xl:flex-col md:flex-row md:justify-between h-40 p-4 rounded-lg dark:shadow-xl dark:bg-gradient-to-br from-d-surface via-d-background to-d-background transition ease-in-out duration-150 cursor-pointer">
            <!-- Card header -->
            <div class="h-16 mb-2 flex flex-row items-center 2xl:w-full xl:w-[50%] md:w-[40%] md:h-full">
              <!-- Card movie image -->
              <div class="relative rounded-lg overflow-hidden 2xl:h-fit md:h-full">
                <img src="../assets/Images/Posters/the_batman_banner.jpg" alt="blade-runner-banner" class="2xl:w-24 xl:w-full md:w-full md:h-full">
              </div>

              <!-- Members of the group -->
              <div class="relative h-full ml-8 2xl:block md:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>

            <!-- Group title -->
            <div class="h-16 flex flex-col xl:justify-between items-start 2xl:w-full xl:w-[45%] md:w-[60%]">
              <p class="dark:text-d-muted 2xl:text-[12px]">Creador - <span class="text-d-warning">Username</span></p>
                <p class="dark:text-d-soft-white lg:text-lg 2xl:text-base">Universo DC Comics</p>
                <p class="text-sm dark:text-d-muted lg:text-lg 2xl:text-sm">Colección de las mejores películas DC</p>

              <!-- Members of the group -->
              <div class="relative md:block 2xl:hidden">

                <div class="absolute top-4 left-0 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-4 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-8 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

                <div class="absolute top-4 left-12 w-8 h-8 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">H</div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Trending movies section-->
      <section class="col-span-full relative mt-16 mb-32">

        <!-- Fire icon + title -->
        <div class="w-full mb-8 flex flex-row justify-between items-center">
          <div class="flex items-center">
            <svg class="w-8 text-d-surface dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <p class="ml-4 text-3xl font-bold italic tracking-wider shadow-sm dark:text-d-soft-white">Tendencias</p>
          </div>
          
          <a href="#" class="flex items-center text-sm dark:text-d-soft-white italic dark:hover:text-d-secondary transition ease-in duration-150">
            Ver todas
            <svg class="w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>

        <!-- Cards container -->
        <div class="grid 3xl:grid-cols-8 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 xl:gap-x-8 xl:gap-y-24 lg:gap-x-4 lg:gap-y-24">

          <!-- Card -->
          <div v-for="film in trendingMovies" class="relative lg:col-span-2 h-[480px] rounded-lg overflow-visible shadow-2xl shadow-d-surface hover:shadow-md transition ease-in-out duration-300 cursor-pointer group">

            <!-- Background-poster -->
            <div class="absolute bottom-0 h-full rounded-lg overflow-hidden">
              <img :src="film.poster" :alt="film.title" class="h-full group-hover:scale-110 transition ease-in-out duration-150">
            </div>

            <!-- Score and time -->
            <div class="h-10 w-full px-6 flex flex-row justify-between items-center backdrop-blur-sm dark:text-d-soft-white">
                <!-- Score -->
                <div class="w-fit text-sm flex flex-row items-center">
                    <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-1">
                    <p>{{ film.vote_average }}</p>
                </div>
                <!-- Time -->
                <div class="w-fit text-sm flex flex-row items-center">
                    <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-1">
                    <p>{{ film.duration }}</p>
                </div>
            </div>

            <!-- Options -->
            <div class="absolute bottom-0 h-20 w-full overflow-visible group">

              <!-- Play button + title + add + seen -->
              <div class="w-full h-20 z-10 flex flex-row justify-between items-center rounded-lg backdrop-blur-md">

                <div class="flex items-center p-4">
                  <!-- Play button -->
                  <router-link :to="{name: 'login'}" class="w-10 h-10 rounded-full flex justify-center items-center dark:bg-gradient-to-br from-d-variant-1 to-d-primary cursor-pointer transition ease-in duration-150 group/play">
                    <svg class="text-d-surface w-8 h-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <!-- Pop-over info -->
                    <div class="absolute opacity-0 group-hover/play:opacity-100 -top-9 left-[2px] w-26 px-4 py-2 flex justify-center items-center rounded-lg dark:bg-d-surface border border-d-muted transition ease-in duration-100">
                        <p class="text-sm dark:text-d-soft-white">Ver tráiler</p>
                    </div>
                  </router-link>

                  <!-- Title + date -->
                  <div class="relative ml-4">
                    <p class="w-28 text-sm font-bold dark:text-d-soft-white select-none">{{ film.title }}</p>
                  </div>
                
                </div>

                <div v-show="cookieExists" class="relative h-full w-20 pr-4 pb-4 flex justify-between items-end">

                  <!-- Add to my list -->
                  <div @click="updateList(1,film.id)" id="addToListButton" data-popover-target="addToList" data-popover-placement="top" class="relative rounded-full h-7 w-7 flex justify-center items-center dark:bg-d-background cursor-pointer group/pendent">

                    <svg class="w-5 h-5 dark:text-d-soft-white hover:opacity-75 transition ease-in duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <!-- Pop-over info -->
                    <div class="absolute opacity-0 group-hover/pendent:opacity-100 -top-16 -left-18 flex justify-center items-center w-44 px-4 py-2 rounded-lg border border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                      <p>Añadir a 'pendientes'</p>
                    </div>
                  </div>

                  

                  <!-- Mark as seen -->
                  <div @click="updateList(2,film.id)" id="markAsSeenButton" data-popover-target="markAsSeen" data-popover-placement="top" class="relative rounded-full h-7 w-7 flex justify-center items-center dark:bg-d-background cursor-pointer group/watched">

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
                  {{ film.release_date }}
                </span>
                <!-- Generes -->
                <div class="w-full flex flex-row justify-center items-center">
                  <span v-for="genere in film.generes" class="py-1 px-3 mx-1 text-sm rounded-2xl dark:bg-d-surface dark:text-d-soft-white">
                    {{ genere }}
                  </span>
                </div>
              </div>
            </div>
            
          </div>

        </div>

        <!-- Pop-up Modal cards options -->
        <span class="fixed bottom-14 right-14 px-8 py-4 rounded-lg text-l-soft-black dark:border-l-8 dark:bg-d-surface bg-d-soft-white opacity-0 transition ease-in-out duration-200" :class="this.popupModal.class">
          <p>{{ this.popupModal.message }}</p>
        </span>
      </section>

    </main>
  </section>
  <!-- Footer component -->
  <Footer />
</template>

<template>
    <section class="relative grid grid-cols-12 grid-rows-12">
        <!-- Full Sidebar menu component -->
        <AsideMenu ref="asideMenu" v-if="showAside" v-on:closeAsideMenu="showAside = !showAside" class="2xl:col-span-2 2xl:relative xl:col-span-1 xl:absolute xl:z-40 xl:h-full md:absolute md:top-0 md:left-0 md:w-[320px] md:z-40 md:shadow-2xl md:shadow-d-surface transition-all ease-in duration-150 lg:w-[8.4%] 2xl:w-full" :class="this.focus_modal_active"/>

        <main id="mainContainer" class="relative md:col-start-1 lg:col-start-2 2xl:col-start-3 col-end-13 grid grid-cols-8 gap-x-8 dark:bg-gradient-to-br dark:from-d-theme-from dark:via-d-theme-via dark:to-d-theme-to pt-8 2xl:px-48 xl:px-40 md:px-16 bg-gradient-to-br from-l-theme-from to-l-theme-to" :class="this.focus_modal_active">

            <!-- Movie banner-background container -->
            <div class="absolute top-0 w-full">
                <img :src="'../'+movie.banner" :alt="movie.title" class="w-full h-screen brightness-50">
            </div>

            <section class="col-span-full relative">

                <!-- Header component / customEvent for toggle aside menu -->
                <HeaderComp v-on:showAsideMenu="toggleAsideMenu" class="col-span-full h-fit mb-16" />

                <!-- Review main content -->
                <article class="relative flex flex-row backdrop-blur-md mb-32 rounded-lg">

                    <div class="relative h-[480px] w-[30%] rounded-lg overflow-hidden">
                        <img :src="'../'+movie.poster" :alt="movie.title" class="absolute top-0 h-full"/>
                    </div>

                    <!-- Movie info -->
                    <div class="flex-col pt-4 w-[70%]">
                        <!-- Title -->
                        <h1 class="mb-6 2xl:text-5xl font-bold tracking-wider dark:text-d-soft-white select-none">{{ movie.title }}</h1>

                        <!-- Date, generes, duration -->
                        <div class="flex flex-row justify-between w-fit mb-6">

                            <div class="flex flex-row items-center mr-6 dark:text-d-soft-white"> 
                                <svg class="lg:w-6 md:w-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class=" select-none">{{ movie.release_date }}</p>
                            </div>

                            <div class="flex flex-row items-center mr-6 dark:text-d-soft-white">
                                <svg class="lg:w-6 md:w-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M6 6h.008v.008H6V6z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p v-for="genere in movie.generes" class="dark:text-d-soft-white mr-2 select-none">· {{ genere }}</p>
                            </div>

                            <div class="flex flex-row items-center mr-6 dark:text-d-soft-white">
                                <svg class="lg:w-6 md:w-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <p class="select-none">{{ movie.duration }}</p>
                            </div>
                        </div>

                        <!-- User actions -->
                        <div class="flex flex-row justify-between w-fit mb-8">
                            <!-- Vote average info -->
                            <div class="flex flex-row justify-between items-center dark:text-d-soft-white w-fit mr-8 select-none">

                                <div class="relative flex flex-row justify-center items-center mr-4 dark:bg-d-surface rounded-full border-2 border-d-muted w-12 h-12">
                                    <img src="../assets/Icons/star-00.png" alt="star-icon" class="absolute -bottom-3 w-6">
                                    <p class="2xl:text-lg font-bold">{{ movie.vote_average }}</p>
                                </div>
                                
                                <div class="flex flex-col">
                                    <p class="2xl:text-lg text-d-primary">Puntuación de usuarios</p>
                                    <p class="2xl:text-lg">{{ movie.vote_count }} votos</p>
                                </div>
                            </div>

                            <!-- Vote -->
                            <div class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <!-- Tooltip -->
                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Puntuar
                                </span>

                                <!-- Vote options -->
                                <div class="absolute z-50 opacity-0 group-hover:opacity-100 -bottom-16 flex justify-center items-center w-64 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    <div class="text-lg font-bold pr-4 mr-4 border-r-2 dark:border-d-muted dark:text-d-primary">
                                        {{ this.starImgNum }}
                                    </div>

                                    <img :src="'../src/assets/Icons/stars-'+ starImgNum +'.png'" alt="stars" class="absolute z-10 top-2 right-6 opacity-100">

                                    <div v-for="star in 10" @mouseover="setStarImg(star)" @click="voteMovie(movie.id, star)" class="z-20 w-4 h-8"></div>
                                </div>
                            </div>

                            <!-- Add to favourite list -->
                            <div @click="addToFav(movie.id)" class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Añadir a Favoritas
                                </span>
                            </div>

                            <!-- Add to pendent list -->
                            <div class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Añadir a Pendiente
                                </span>
                            </div>

                            <!-- Mark as seen -->
                            <div class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Marcar como vista
                                </span>
                            </div>

                            <!-- Re-Play trailer -->
                            <div @click="modalTrailerOn" class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-gradient-to-br from-d-variant-1 to-d-primary rounded-full border-2 dark:border-d-muted dark:hover:border-d-soft-white transition ease-in-out duration-150 cursor-pointer group">
              
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -right-48 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    <p>re<strong>play tráiler</strong></p>
                                </span>
                            </div>

                        </div>

                        <!-- Sinopsis -->
                        <div class="pr-8 max-h-[232px] overflow-y-auto">
                            <h3 class="dark:text-d-soft-white text-d-surface text-2xl font-bold tracking-wider mb-2">Sinopsis</h3>
                            <p class="dark:text-d-soft-white text-d-surface text-lg">
                                {{ movie.overview }}
                            </p>
                        </div>
                    </div>
                </article>

            </section>
        </main>

        <!-- MODALS SECTION / FIXED POSITIONS -->

        <!-- Iframe modal - movie trailer -->
        <article v-show="this.showTrailer" class="fixed z-40 top-40 right-48 col-start-4 col-end-12 h-[650px] w-[65%] flex-row rounded-lg">
            
            <iframe width="100%" height="650" :src="movie.trailer_iframe_url" :title="movie.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div @click="modalTrailerOff" class="absolute -right-6 -top-6 flex flex-row justify-center items-center dark:bg-d-surface bg-d-soft-white border-2 dark:border-d-soft-white dark:hover:opacity-75 cursor-pointer rounded-full w-12 h-12">
                <svg class="w-8 h-8 dark:text-d-soft-white text-d-surface" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </article>

        <!-- User unauthenticated modal warning / call to action -->
        <article v-show="this.modal_401" class="fixed z-40 top-52 left-[30%] col-start-4 col-end-12 h-[450px] w-[50%] flex-row rounded-lg backdrop-blur-xl border-2 dark:border-d-surface dark:bg-gradient-to-br dark:from-d-surface dark:via-transparent dark:to-d-surface">

            <div class="relative w-full h-full overflow-hidden">
                <img src="../assets/Images/Login-register-banner/Section_4.png" alt="modal-background" class="absolute z-10 w-full brightness-50 opacity-40">
            </div>
            
            <div class="absolute top-0 w-full h-full flex flex-col justify-center items-center z-40">
                <h2 class="dark:text-d-soft-white text-3xl mb-8 tracking-wide">Inicia sesión para poder {{ this.modal_401_msg }} esta película.</h2>
                <h2 class="dark:text-d-soft-white text-xl mb-8 tracking-wide">¿Todavía no formas parte de la comunidad?</h2>
                <router-link :to="{name: 'register'}" class="px-8 py-2 rounded-lg border-2 border-d-surface dark:bg-d-surface hover:border-d-soft-white dark:hover:bg-transparent dark:text-d-soft-white text-xl tracking-wide transition ease-in duration-150 cursor-pointer select-none">
                    Crear cuenta
                </router-link>
            </div>

            <!-- Close button -->
            <div @click="modal_401_off" class="absolute -right-6 -top-6 flex flex-row justify-center items-center dark:bg-d-surface bg-d-soft-white border-2 dark:border-d-soft-white dark:hover:opacity-75 cursor-pointer rounded-full w-12 h-12">
                <svg class="w-8 h-8 dark:text-d-soft-white text-d-surface" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </article>

        <!-- Pop-up Modal cards options -->
        <span class="opacity-0 fixed bottom-14 right-14 px-8 py-4 flex flex-row items-center rounded-lg text-l-soft-black dark:border-l-8 dark:bg-d-surface bg-d-soft-white transition ease-in-out duration-200" :class="this.popupModal.class">
            
            <!-- Info icon -->
            <svg v-show="this.popupModal.info_icon" class="w-8 dark:text-d-warning" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <!-- Success icon -->
            <svg v-show="this.popupModal.check_icon" class="w-8 dark:text-d-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <p class="ml-2">{{ this.popupModal.message }}</p>
        </span>
    </section>


    <!-- Footer component -->
    <Footer />
</template>

<script>
import AsideMenu from '../components/AsideMenu.vue';
import HeaderComp from '../components/HeaderComp.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'ReviewShow',
    components: {
        AsideMenu,
        HeaderComp,
        Footer
    },
    data(){
        return{
            cookieStatus: false, // Default (no session active)
            user: Object,
            movie: Object,
            showAside : true,
            showTrailer: false,
            focus_modal_active: String,
            modal_401: false,
            modal_401_msg: String,
            starImgNum: 0,
            popupModal: {
                status: false,
                message: String,
                class: String,
                info_icon: false,
                check_icon: false
            },
            baseURL: "http://localhost:3000/"
        }
    },

    computed: {
        movieID(){
            return parseInt(this.$route.params.movie_id)
        }
    },

    methods: {
        modalTrailerOn(){
            this.focus_modal_active = "brightness-50"
            this.showTrailer = !this.showTrailer
        },
        modalTrailerOff(){
            this.showTrailer = !this.showTrailer
            this.focus_modal_active = ""
        },
        userActions(action_type, movie_id, vote_value){

            if(this.cookieStatus){

                switch(action_type){

                    // User vote on movie / PATCH movie.vote_count/.vote_average/.vote_values
                    case 1:

                        break;
                    case 2:
                        this.modal_401_msg = "añadir a favoritos";
                        break;
                    case 3:
                        this.modal_401_msg = "añadir a pendientes";
                        break;
                    case 4:
                        this.modal_401_msg = "marcar como vista";
                        break;
                }
            }
            else{
                // User unauthenticated modal warning / register call to action
                this.focus_modal_active = "brightness-50";

                switch(action_type){
                    case 1:
                        this.modal_401_msg = "puntuar";
                        break;
                    case 2:
                        this.modal_401_msg = "añadir a favoritos";
                        break;
                    case 3:
                        this.modal_401_msg = "añadir a pendientes";
                        break;
                    case 4:
                        this.modal_401_msg = "marcar como vista";
                        break;

                }
                this.modal_401 = true;
            }
        },
        modal_401_off(){
            this.focus_modal_active = "";
            this.modal_401 = !this.modal_401;
        },
        setStarImg(imgNum){
            this.starImgNum = imgNum;
        },

        async voteMovie(movie_id, vote_value){

            if(this.cookieStatus){
                // Check if user already voted the movie
                if(this.user.profile.movies_voted.includes(movie_id)){
                    
                    this.popupModal.message = "Ya has votado esta película, consulta la lista de tu perfil."
                    this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
                    this.popupModal.info_icon = true;
                    this.popupModal.check_icon = false;
                    this.popupModal.status = true;

                    setTimeout(() => {
                        this.popupModal.class = "opacity-0"
                    },6000)

                    return
                }
                else{

                    this.movie.vote_count += 1;
                    this.movie.vote_values.push(vote_value);

                    var new_vote_average = 0;
                    this.movie.vote_values.forEach((vote) => {
                        new_vote_average += vote
                    })

                    new_vote_average = new_vote_average / this.movie.vote_values.length;

                    this.movie.vote_average = new_vote_average.toFixed(1);

                    // PATCH movie vote_count, vote_average
                    await fetch('http://localhost:3000/movies/'+ this.movie.id, {
                            method: 'PATCH',
                            body: JSON.stringify(this.movie),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            }
                        })
                        .then(response => response.json())
                        .then(data => console.log('MOVIE VOTE AVERAGE UPDATED'))

                    // PATCH add movie-id to user's movies_voted list
                    this.user.profile.movies_voted.push(movie_id);

                    await fetch('http://localhost:3000/users/'+ this.user.id, {
                            method: 'PATCH',
                            body: JSON.stringify(this.user),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            }
                        })
                        .then(response => response.json())
                        .then(data => console.log("user's movies_voted list updated"))

                    // Succesful pop-up modal message
                    this.popupModal.message = "Has puntuado "+ this.movie.title +"con un: "+ vote_value +" !"
                    this.popupModal.check_icon = true;
                    this.popupModal.info_icon = false;
                    this.popupModal.class = "opacity-100 dark:text-d-secondary border-d-secondary"

                    setTimeout(() => {
                        this.popupModal.class = "opacity-0"
                    },6000)
                }
            }
            else{
                // User unauthenticated modal warning / register call to action
                this.focus_modal_active = "brightness-50";

                this.modal_401_msg = "puntuar";
                this.modal_401 = true;
            }
        },

        async addToFav(movie_id){
            
            if(this.cookieStatus){
                //Check if user already has the movie on favourite
                if(this.user.profile.movies_favourite.includes(movie_id)){

                    this.popupModal.message = "La película '"+ this.movie.title +"' ya está en tu lista de favoritas."
                    this.popupModal.class = "opacity-100 dark:text-d-warning border-d-warning"
                    this.popupModal.info_icon = true;
                    this.popupModal.check_icon = false;
                    this.popupModal.status = true;

                    setTimeout(() => {
                        this.popupModal.class = "opacity-0"
                    },6000)

                    return
                }
                else{
                    
                    // Add movie id on user's movies_favourite list
                    this.user.profile.movies_favourite.push(movie_id);

                    await fetch(this.baseURL + 'users/' + this.user.id,{
                        method: 'PATCH',
                        body: JSON.stringify(this.user),
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    })
                        .then(response => response.json())
                        .then(data => console.log("User's movies favourites updated"))

                    // Succesful pop-up modal message
                    this.popupModal.message = "Película '"+ this.movie.title +"' añadida a favoritas."
                    this.popupModal.class = "opacity-100 dark:text-d-secondary border-d-secondary"
                    this.popupModal.info_icon = false;
                    this.popupModal.check_icon = true;

                    setTimeout(() => {
                        this.popupModal.class = "opacity-0"
                    },4000)
                }
            }
            else{
                // User unauthenticated modal warning / register call to action
                this.focus_modal_active = "brightness-50";

                this.modal_401_msg = "añadir a favoritas";
                this.modal_401 = true;
            }
        }
    },

    async created() {

        const baseURL = 'http://localhost:3000/';

        // Check active sesion cookie
        if(document.cookie != ""){
            this.cookieStatus = true;

            //GET ALL users
            await fetch(baseURL+'users')
                .then(response => response.json())
                .then(data => {

                    //Get actual user
                    data.forEach(user => {
                        if(document.cookie == ('authCookie=' + user.cookie)){
                            this.user = user
                        }
                    })
                })
        }
            
        //GET ONE movie to load review data
        await fetch(baseURL+'movies')
            .then(response => response.json())
            .then(movies => {
                movies.forEach((movie)=>{
                    if(movie.id === this.movieID){
                        this.movie = movie
                    }
                })
            })

        window.scrollTo(0,0);
        console.log('SELECTED MOVIE: ', this.movie)
    }
}
</script>

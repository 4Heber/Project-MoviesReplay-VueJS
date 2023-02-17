<template>
    <section class="relative grid grid-cols-12 grid-rows-12">
        <!-- Full Sidebar menu component -->
        <AsideMenu ref="asideMenu" v-if="showAside" v-on:closeAsideMenu="showAside = !showAside" class="2xl:col-span-2 2xl:relative xl:col-span-1 xl:absolute xl:z-40 xl:h-full md:absolute md:top-0 md:left-0 md:w-[320px] md:z-40 md:shadow-2xl md:shadow-d-surface transition-all ease-in duration-150 lg:w-[8.4%] 2xl:w-full" :class="this.trailer_modal_active"/>

        <main id="mainContainer" class="relative md:col-start-1 lg:col-start-2 2xl:col-start-3 col-end-13 grid grid-cols-8 gap-x-8 dark:bg-gradient-to-br dark:from-d-theme-from dark:via-d-theme-via dark:to-d-theme-to pt-8 2xl:px-48 xl:px-40 md:px-16 bg-gradient-to-br from-l-theme-from to-l-theme-to" :class="this.trailer_modal_active">

            <!-- Movie banner-background container -->
            <div class="absolute top-0 w-full">
                <img :src="'../'+movie.banner" :alt="movie.title" class="w-full h-screen brightness-50">
            </div>

            <section class="col-span-full relative">

                <!-- Header component / customEvent for toggle aside menu -->
                <HeaderComp v-on:showAsideMenu="toggleAsideMenu" class="col-span-full h-fit mb-16" />

                <!-- Review main content -->
                <article class="relative flex flex-row backdrop-blur-md mb-32 rounded-lg shadow-2xl dark:shadow-d-background">

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
                            <!-- Vote average -->
                            <div class="flex flex-row justify-between items-center dark:text-d-soft-white w-fit mr-8 select-none">

                                <div class="relative flex flex-row justify-center items-center mr-4 dark:bg-d-surface rounded-full border-2 border-d-muted w-12 h-12">
                                    <img src="../assets/Icons/star-00.png" alt="star-icon" class="absolute -bottom-3 w-6">
                                    <p class="2xl:text-lg font-bold">{{ movie.vote_average }}</p>
                                </div>
                                
                                <p class="2xl:text-lg">Puntuación de usuarios</p>
                            </div>

                            <!-- Vote -->
                            <div class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Puntuar
                                </span>
                            </div>

                            <!-- Add to favourite list -->
                            <div class="relative flex flex-row justify-center items-center mr-4 w-12 h-12 dark:bg-d-surface rounded-full border-2 dark:border-d-muted dark:hover:border-d-primary transition ease-in-out duration-150 cursor-pointer group">
                                <svg class="w-6 h-6 dark:text-d-soft-white transition ease-in-out duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>

                                <span class="absolute opacity-0 group-hover:opacity-100 -bottom-14 flex justify-center items-center w-44 px-4 py-2 rounded-lg border-2 border-d-muted dark:text-d-soft-white text-sm dark:bg-d-surface">
                                    Añadir a Favoritos
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
                            <p class="dark:text-d-soft-white text-d-surface text-base">
                                {{ movie.overview }}
                            </p>
                        </div>
                    </div>
                </article>

            </section>
        </main>

        <!-- Iframe modal - movie trailer -->
        <article v-show="this.showTrailer" class="fixed z-40 top-40 right-48 col-start-4 col-end-12 h-[650px] w-[65%] flex-row rounded-lg">
            
            <iframe width="100%" height="650" :src="movie.trailer_iframe_url" :title="movie.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div @click="modalTrailerOff" class="absolute -right-6 -top-6 flex flex-row justify-center items-center dark:bg-d-surface bg-d-soft-white border-2 dark:border-d-soft-white dark:hover:opacity-75 cursor-pointer rounded-full w-12 h-12">
                <svg class="w-8 h-8 dark:text-d-soft-white text-d-surface" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </article>
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
            movie: Object,
            // Default on false
            showAside : true,
            showTrailer: false,
            trailer_modal_active: String
        }
    },

    computed: {
        movieID(){
            return parseInt(this.$route.params.movie_id)
        }
    },

    methods: {
        modalTrailerOn(){
            this.trailer_modal_active = "brightness-50"
            this.showTrailer = !this.showTrailer
        },
        modalTrailerOff(){
            // CODE
        }
    },

    async created() {
            
        const baseURL = 'http://localhost:3000/';
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
        console.log('SELECTED MOVIE: ', this.movie)
    }
}
</script>

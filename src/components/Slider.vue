
<script>
import { Carousel } from 'flowbite';

export default {
    name: 'Slider',
    data(){
        return {
            topMovies: [],
            user: [],
            friendsMovies: [],
            bannerGradientTheme: "darkBannerGradient",
        }
    },
    components: {
    },
    methods: {
    },

    async created(){

        var baseURL = 'http://localhost:3000/';

        // Get top 6 movies sorted by vote_avarage
        await fetch(baseURL + 'movies')
        .then(response => response.json())
        .then(movies => {
            this.topMovies = movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)
            this.topMovies.length = 6

            for(var i=0; i < 6; i++){
                this.topMovies[i].carousel = `carousel-item-${[i+1]}`
            }
        })

        if(document.cookie != ""){
            // Get authenticated user data
            await fetch(baseURL + 'users')
            .then(response => response.json())
            .then(data => {

                data.forEach((user) => {
                    if(document.cookie == ('authCookie=' + user.cookie)){
                        this.user = user;

                        user.profile.friends_list.forEach(async (friend_id, i) => {
                            // Get friend movies_seen info
                            await fetch(baseURL + 'users/' + friend_id)
                            .then(response => response.json())
                            .then(friend_info => {
                                this.friendsMovies.push(friend_info);
                            })
                        })
                    }
                });
            });
        }

        // console.log('Slider top 6 movies: ',this.topMovies)

        // SLIDER CONFIG
        // Access items by id's
        const items = [
            {
                position: 0,
                el: document.getElementById("carousel-item-1")
            },
            {
                position: 1,
                el: document.getElementById("carousel-item-2")
            },
            {
                position: 2,
                el: document.getElementById("carousel-item-3")
            },
            {
                position: 3,
                el: document.getElementById("carousel-item-4")
            },
            {
                position: 4,
                el: document.getElementById("carousel-item-5")
            },
            {
                position: 5,
                el: document.getElementById("carousel-item-6")
            },
        ];

        // Access indicator by id and set position to slide
        const options = {
            defaultPosition: 0,
            interval: 5000,
            
            indicators: {
                activeClasses: 'bg-white dark:bg-d-primary',
                inactiveClasses: 'bg-white/50 dark:bg-d-primary/50 hover:bg-white dark:hover:bg-d-primary',
                items: [
                    {
                        position: 0,
                        el: document.getElementById('carousel-indicator-1')
                    },
                    {
                        position: 1,
                        el: document.getElementById('carousel-indicator-2')
                    },
                    {
                        position: 2,
                        el: document.getElementById('carousel-indicator-3')
                    },
                    {
                        position: 3,
                        el: document.getElementById('carousel-indicator-4')
                    },
                    {
                        position: 4,
                        el: document.getElementById('carousel-indicator-5')
                    },
                    {
                        position: 5,
                        el: document.getElementById('carousel-indicator-6')
                    },
                ]
            },
            
            // callback functions
            onNext: () => {
                // console.log('next slider item is shown');
            },
            onPrev: ( ) => {
                // console.log('previous slider item is shown');
            },
            onChange: ( ) => {
                // console.log('new slider item has been shown');
            }

        };

        // Create carousel item passing items + options
        const carousel = new Carousel(items, options);

        // starts or resumes the carousel cycling (automated sliding)
        carousel.cycle()

        // Triggers for previous and next buttons
        const prevButton = document.getElementById('data-carousel-prev');
        const nextButton = document.getElementById('data-carousel-next');

        prevButton.addEventListener('click', () => {
            carousel.prev();
        });
        nextButton.addEventListener('click', () => {
            carousel.next();
        });

        // Pause resume carousel slide
        const carouselWrapper = document.getElementById('carouselWrapper');

        carouselWrapper.addEventListener('mouseenter', () => {
            carousel.pause();
            console.log('slide-pause')
        })
        carouselWrapper.addEventListener('mouseleave', () => {
            carousel.cycle();
            console.log('slide-resume')
        })
    },
}
</script>

<!-- CUSTOM STYLES SECTION -->
<style lang="scss">

    #darkBannerGradient {
        background-image: radial-gradient( circle farthest-corner at 5% 10%, #1C1E32 -15%, #11111F 30%, #11111F 50%, rgba(0, 0, 0, 0.075) 70% );
    }

    #lightBannerGradient {
        background-image: radial-gradient( circle farthest-corner at 5% 10%, #d0dde9 -15%, #FFF 30%, #C2D7EB 50%, rgba(0, 0, 0, 0.075) 70% );
    }

</style>

<!-- HTML TEMPLATE SECTION -->
<template>
    
    <div class="relative h-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div id="carouselWrapper" class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-full 2xl:w-full">

            <!-- Top movie 1 -->
            <div v-for="movie in topMovies" :id="movie.carousel" class="hidden duration-700 ease-in-out">

                <!-- Main Content container -->
                <div class="h-full w-full md:pt-10 xl:pt-16 2xl:pl-28 xl:pl-24 md:pl-20 dark:bg-gradient-to-r dark:from-d-surface dark:via-d-surface dark:to-transparent bg-gradient-to-r from-d-soft-white via-l-theme-from to-transparent">
                    <h1 id="1-movie-title" class="mb-2 2xl:text-5xl xl:text-3xl lg:text-xl font-bold dark:text-d-soft-white tracking-wider">{{ movie.title }}</h1>

                    <h2 class="2xl:text-xl xl:text-xl lg:text-md md:text-sm dark:text-d-soft-white tracking-wider">{{ movie.subtitle }}</h2>

                    <div class="h-16 w-48 2xl:mb-20 xl:mb-16 lg:mb-12 flex flex-row justify-between dark:text-d-soft-white">
                        <!-- Score -->
                        <div class="w-fit flex flex-row items-center md:text-sm xl:text-base">
                            <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-2">
                            <p id="1-vote-average">{{ movie.vote_average }}</p>
                        </div>
                        <!-- Time -->
                        <div class="w-fit flex flex-row items-center md:text-sm xl:text-base">
                            <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-2">
                            <p id="1-duration">{{ movie.duration }}</p>
                        </div>
                    </div>

                    <div class="2xl:w-[40%] xl:w-[60%] flex flex-row items-center">
                        <!-- +Info bttn -->
                        <router-link :to="{name: 'review', params: {movie_id: movie.id}}" class="2xl:px-5 2xl:py-2.5 xl:w-24 xl:py-2 md:py-1 md:px-2 text-l-surface-color bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold tracking-wider rounded-lg text-sm dark:text-d-soft-white dark:bg-d-background dark:hover:bg-d-secondary dark:hover:text-d-surface transition ease-in duration-150">
                            + INFO
                        </router-link>
                    </div>
                </div>

                <img id="1-banner-alt" :src="movie.banner_size_xl" class="absolute -z-20 block w-[60%] top-0 right-0 h-full bg-cover bg-no-repeat" :alt="movie.title">
            </div>

        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button id="carousel-indicator-1" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="true" aria-label="Slide 1"></button>
            <button id="carousel-indicator-2" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full " aria-current="false" aria-label="Slide 2"></button>
            <button id="carousel-indicator-3" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 3"></button>
            <button id="carousel-indicator-4" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 4"></button>
            <button id="carousel-indicator-5" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 5"></button>
            <button id="carousel-indicator-6" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 6"></button>
        </div>

        <!-- Slider controls -->
        <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-d-variant-1/50 group-hover:bg-white/50 dark:group-hover:bg-d-variant-0/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-d-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        
        <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-d-variant-1/50  group-hover:bg-white/50 dark:group-hover:bg-d-variant-0/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-d-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>

</template>
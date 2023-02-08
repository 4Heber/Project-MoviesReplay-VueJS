<!-- HTML TEMPLATE SECTION -->
<template>
    
    <div class="relative h-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div id="carouselWrapper" class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-full 2xl:w-full">
            <!-- Item 1 -->
            <div id="carousel-item-1" class="hidden duration-700 ease-in-out">

                <!-- Main Content container -->
                <div id="bannerGradient" class="h-full w-full lg:pt-10 xl:pt-16 2xl:pl-16 xl:pl-24 lg:pl-20">
                    <h1 class="2xl:text-5xl xl:text-3xl lg:text-xl font-bold dark:text-d-soft-white">Blade Runner 2049</h1>

                    <div class="h-16 w-48 2xl:mb-28 xl:mb-16 lg:mb-12 flex flex-row justify-between dark:text-d-soft-white">
                        <!-- Score -->
                        <div class="w-fit flex flex-row items-center lg:text-sm xl:text-base">
                            <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-2">
                            <p>8.4</p>
                        </div>
                        <!-- Time -->
                        <div class="w-fit flex flex-row items-center lg:text-sm xl:text-base">
                            <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-2">
                            <p>163min</p>
                        </div>
                    </div>

                    <div class="2xl:w-[40%] xl:w-[60%] flex flex-row items-center">
                        <!-- +Info bttn -->
                        <button type="button" class="2xl:px-5 2xl:py-2.5 xl:w-24 xl:py-2 lg:py-1 lg:px-2 text-l-surface-color bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold tracking-wider rounded-lg text-sm dark:text-d-soft-white dark:bg-d-background dark:hover:bg-d-secondary dark:hover:text-d-surface transition ease-in duration-150">
                            + INFO
                        </button>

                        <div class="relative w-96 h-10 flex flex-row justify-between items-center">
                            <div class="absolute top-0 left-8 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                            </div>

                            <div class="absolute top-0 left-16 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                            </div>

                            <div class="absolute top-0 left-24 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                                H
                            </div>

                            <div class="absolute top-0 left-32 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                                H
                            </div>

                            <p class="absolute top-2 lg:left-48 sm:text-sm dark:text-d-muted">Visto por <span class="text-d-soft-white">4 +</span> seguidores.</p>
                        </div>
                    </div>
                </div>

                <img src="../assets/Images/Posters/blade_runner_2049_banner.jpg" class="absolute -z-20 block w-[60%] top-0 right-0 h-full bg-cover bg-no-repeat" alt="...">
            </div>

            <!-- ITEM NO ACTUALIZADO -->
            <!-- Item 2 -->
            <div id="carousel-item-2" class="hidden duration-700 ease-in-out">

                <!-- Main Content container -->
                <div id="bannerGradient" class="h-full w-full pt-16 pl-16">
                    <h1 class="text-5xl font-bold dark:text-d-soft-white">The Batman</h1>

                    <div class="h-16 w-48 mb-28 flex flex-row justify-between dark:text-d-soft-white">
                        <!-- Score -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-2">
                            <p>7.8</p>
                        </div>
                        <!-- Time -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-2">
                            <p>176min</p>
                        </div>
                    </div>

                    <div class="w-[40%] flex flex-row">
                        <!-- +Info bttn -->
                        <button type="button" class="px-5 py-2.5 text-l-surface-color bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold tracking-wide rounded-lg text-sm dark:bg-d-background dark:hover:bg-d-secondary dark:hover:text-d-surface transition ease-in duration-150">
                            + INFO
                        </button>

                        <div class="relative w-96 h-10 flex flex-row justify-between items-center">
                            <div class="absolute top-0 left-8 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                            </div>

                            <div class="absolute top-0 left-16 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-24 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-32 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <p class="absolute top-2 left-48 dark:text-d-muted">Visto por <span class="text-d-soft-white">4 +</span> seguidores.</p>
                        </div>
                    </div>
                </div>

                <img src="../assets/Images/Posters/the_batman_banner.jpg" class="absolute -z-20 block w-[60%] top-0 right-0 h-full bg-cover bg-no-repeat" alt="...">
            </div>

            <!-- Item 3 -->
            <div id="carousel-item-3" class="hidden duration-700 ease-in-out">

                <!-- Main Content container -->
                <div id="bannerGradient" class="h-full w-full pt-16 pl-16">
                    <h1 class="text-5xl font-bold dark:text-d-soft-white">Godzilla rey de los monstruos</h1>

                    <div class="h-16 w-48 mb-28 flex flex-row justify-between dark:text-d-soft-white">
                        <!-- Score -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-2">
                            <p>7.2</p>
                        </div>
                        <!-- Time -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-2">
                            <p>132min</p>
                        </div>
                    </div>

                    <div class="w-[40%] flex flex-row">
                        <!-- +Info bttn -->
                        <button type="button" class="px-5 py-2.5 text-l-surface-color bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold tracking-wide rounded-lg text-sm dark:bg-d-background dark:hover:bg-d-secondary dark:hover:text-d-surface transition ease-in duration-150">
                            + INFO
                        </button>

                        <div class="relative w-96 h-10 flex flex-row justify-between items-center">
                            <div class="absolute top-0 left-8 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                            </div>

                            <div class="absolute top-0 left-16 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-24 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-32 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <p class="absolute top-2 left-48 dark:text-d-muted">Visto por <span class="text-d-soft-white">4 +</span> seguidores.</p>
                        </div>
                    </div>
                </div>

                <img src="../assets/Images/Posters/godzilla_king_of_the_monsters_banner.jpg" class="absolute -z-20 block w-[60%] top-0 right-0 h-full bg-cover bg-no-repeat" alt="...">
            </div>

            <!-- Item 4 -->
            <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
                
                <!-- Main Content container -->
                <div id="bannerGradient" class="h-full w-full pt-16 pl-16">
                    <h1 class="text-5xl font-bold dark:text-d-soft-white">Doctor Strange Multiverso de la locura</h1>

                    <div class="h-16 w-48 mb-28 flex flex-row justify-between dark:text-d-soft-white">
                        <!-- Score -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/star-00.png" alt="star-image" class="w-8 mr-2">
                            <p>9.2</p>
                        </div>
                        <!-- Time -->
                        <div class="w-fit flex flex-row items-center">
                            <img src="../assets/Icons/wall-clock.png" alt="time-image" class="w-8 mr-2">
                            <p>126min</p>
                        </div>
                    </div>

                    <div class="w-[40%] flex flex-row">
                        <!-- +Info bttn -->
                        <button type="button" class="px-5 py-2.5 text-l-surface-color bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold tracking-wide rounded-lg text-sm dark:bg-d-background dark:hover:bg-d-secondary dark:hover:text-d-surface transition ease-in duration-150">
                            + INFO
                        </button>

                        <div class="relative w-96 h-10 flex flex-row justify-between items-center">
                            <div class="absolute top-0 left-8 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                            </div>

                            <div class="absolute top-0 left-16 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-24 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <div class="absolute top-0 left-32 w-10 h-10 flex flex-row justify-center items-center text-d-soft-white rounded-full bg-d-variant-1 border-2 border-d-muted">
                            H
                          </div>

                          <p class="absolute top-2 left-48 dark:text-d-muted">Visto por <span class="text-d-soft-white">4 +</span> seguidores.</p>
                        </div>
                    </div>
                </div>

                <img src="../assets/Images/Posters/doctor_strange_in_the_multiverse_of_madness_banner.jpg" class="absolute -z-20 block w-[60%] top-0 right-0 h-full bg-cover bg-no-repeat" alt="...">
            </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button id="carousel-indicator-2" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 2"></button>
            <button id="carousel-indicator-1" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full " aria-current="true" aria-label="Slide 1"></button>
            <button id="carousel-indicator-3" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 3"></button>
            <button id="carousel-indicator-4" type="button" class="xl:w-3 xl:h-3 md:w-2 md:h-2 rounded-full" aria-current="false" aria-label="Slide 4"></button>
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

<script setup>
import { onMounted } from 'vue'
import { Carousel } from 'flowbite';

onMounted(() => {
    
    // Access items by id's
    const items = [
        {
            position: 0,
            el: document.getElementById('carousel-item-1')
        },
        {
            position: 1,
            el: document.getElementById('carousel-item-2')
        },
        {
            position: 2,
            el: document.getElementById('carousel-item-3')
        },
        {
            position: 3,
            el: document.getElementById('carousel-item-4')
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
})
</script>

<script>
export default {
    name: 'Slider',
    components: {},
}
</script>

<!-- CUSTOM STYLES SECTION -->
<style lang="scss">

    #bannerGradient {
        background-image: radial-gradient( circle farthest-corner at 5% 10%, #11111F 0%, #11111F 50%, rgba(0, 0, 0, 0.075) 70% );
    }

</style>

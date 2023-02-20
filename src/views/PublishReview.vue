<template>
    <section class="relative grid grid-cols-12 grid-rows-12">

        <!-- Full Sidebar menu component -->
        <AsideMenu ref="asideMenu" v-if="showAside" v-on:closeAsideMenu="showAside = !showAside" class="2xl:col-span-2 2xl:relative xl:col-span-1 xl:absolute xl:z-40 xl:h-full md:absolute md:top-0 md:left-0 md:w-[320px] md:z-40 md:shadow-2xl md:shadow-d-surface transition-all ease-in duration-150 lg:w-[8.4%] 2xl:w-full" />

        <main id="mainContainer" class="relative md:col-start-1 lg:col-start-2 2xl:col-start-3 col-end-13 grid grid-cols-8 gap-x-8 dark:bg-gradient-to-br dark:from-d-theme-from dark:via-d-theme-via dark:to-d-theme-to pt-8 2xl:px-48 xl:px-40 md:px-16 bg-gradient-to-br from-l-theme-from to-l-theme-to" :class="this.focus_modal_active">
        
            <!-- Header component / customEvent for toggle aside menu -->
            <HeaderComp v-on:showAsideMenu="toggleAsideMenu" class="col-span-full row-start-1" />

            <div class="absolute top-36 left-48 flex flex-row items-center">
                <svg class="w-8 mr-4 dark:text-d-soft-white text-d-surface" :class="opacityStep2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h2 class="mr-16 text-3xl font-bold italic tracking-wider shadow-sm dark:text-d-soft-white select-none" :class="opacityStep2">Selecciona el poster de la película</h2> 

                <svg class="w-8 mr-4 dark:text-d-soft-white text-d-surface" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h2 class="text-3xl font-bold italic tracking-wider shadow-sm dark:text-d-soft-white select-none">Colabora creando una review</h2> 
            </div>

            <article class="col-span-full row-start-1 absolute h-[700px] top-44 flex flex-row justify-between items-center">

                <!-- Select poster/movie to load data -->
                <div class="w-full h-full flex flex-row flex-wrap justify-center dark:bg-gradient-to-tr dark:from-d-surface dark:via-d-surface dark:to-d-background rounded-tl-xl rounded-bl-xl" :class="opacityStep2">

                    <div @click="selectedMovie(poster.id)" v-show="postersLoad" v-for="(poster, key, index) in postersURL" :id="'poster-'+poster.id" class="w-[35%] px-6 pt-6 pb-0 flex flex-col justify-start items-center rounded-lg overflow-hidden cursor-pointer group/movies">
                        <img :src="poster.url" alt="" class="h-[238px] group-hover/movies:scale-105 transition ease-in duration-150" :class="'selectedPoster_'+poster.id">
                        <p class="text-sm dark:text-d-soft-white text-d-surface mt-2">{{ poster.title }}</p>
                        <p class="text-sm dark:text-d-soft-white text-d-surface">{{ poster.release }}</p>
                    </div>


                    <div v-show="!postersLoad" class="w-[35%] p-6 rounded-lg overflow-hidden">
                        <img src="../assets/Images/Posters/placeholder-poster.jpg#" alt="movie-title" class="h-[238px] brightness-50">
                    </div>
                    
                    <div v-show="!postersLoad" class="w-[35%] p-6 rounded-lg overflow-hidden">
                        <img src="../assets/Images/Posters/placeholder-poster.jpg#" alt="movie-title" class="h-[238px] brightness-50">
                    </div>

                    <div v-show="!postersLoad" class="w-[35%] p-6 rounded-lg overflow-hidden">
                        <img src="../assets/Images/Posters/placeholder-poster.jpg" alt="movie-title" class="h-[238px] brightness-50">
                    </div>

                    <div v-show="!postersLoad" class="w-[35%] p-6 rounded-lg overflow-hidden">
                        <img src="../assets/Images/Posters/placeholder-poster.jpg" alt="movie-title" class="h-[238px] brightness-50">
                    </div>
                </div>


                <div class="w-full h-full ml-8 grid grid-cols-12 dark:bg-gradient-to-tl dark:from-d-surface dark:via-d-surface dark:to-d-background rounded-tr-xl rounded-br-xl">

                    <form class="col-start-2 col-end-12 pt-8 dark:bg-transparent bg-transparent rounded-tr-xl rounded-br-xl">
                        <!-- Movie title to search -->
                        <div class="relative inline-block mb-8 mr-4 w-80">
                            <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Título de la película</label>
                            <input type="text" id="title_to_search" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="Nombre usuario" required>

                            <!-- Error message -->
                            <p v-show="this.errorMessageTitleSearch" class="absolute -bottom-6 text-sm dark:text-d-warning">El título no puede estar vacío.</p>
                        </div>
                       
                        <!-- Search button -->
                        <div @click="getMoviesInfo" class="inline-block font-bold col-start-9 col-end-12 dark:text-d-soft-white border-2 px-3 py-2 rounded-lg hover:dark:text-d-surface hover:dark:border-d-secondary hover:dark:bg-d-secondary cursor-pointer transition ease-in duration-100">
                            Buscar película
                        </div>

                        <div class="mt-2 mb-2 text-xl dark:text-d-primary flex flex-row items-center" :class="opacityStep3">
                            <svg class="w-6 dark:text-d-primary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Datos de la película seleccionada</p>
                        </div>

                        <!-- Movie title result -->
                        <div class="relative mb-6 mr-4 w-full" :class="opacityStep3">
                            <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Título</label>

                            <input type="text" id="movieTitleResult" value="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="Título" required>

                            <!-- Error message -->
                            <p v-show="this.errorMessageTitle" class="absolute -bottom-6 text-sm dark:text-d-warning">Campo vacío</p>
                        </div>

                        <!-- Movie release year -->
                        <div class="relative inline-block mb-8 pr-4 w-[30%]" :class="opacityStep3">
                            <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Estreno</label>

                            <input type="text" id="movieReleaseResult" value="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="YYYY-MM-DD" required>

                            <!-- Error message -->
                            <p v-show="this.errorMessageRelease" class="absolute -bottom-6 text-sm dark:text-d-warning">Campo vacío</p>
                        </div>

                        <!-- Movie generes -->
                        <div class="relative inline-block mb-8 w-[70%]" :class="opacityStep3">
                            <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Generos</label>

                            <input type="text" id="movieGeneresResult" value="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="Acción Aventura Terror Animación" required>

                            <!-- Error message -->
                            <p v-show="this.errorMessageGeneres" class="absolute -bottom-6 text-sm dark:text-d-warning">Campo vacío</p>
                        </div>

                        <!-- Movie overview result -->
                        <div class="relative mb-4 mr-4 w-full" :class="opacityStep3">
                            <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Review</label>

                            <!-- Error message -->
                            <p v-show="this.errorMessageReview" class="absolute top-1 left-16 text-sm dark:text-d-warning">Campo vacío</p>

                            <textarea name="movie_review" id="movieOverviewResult" cols="50" rows="6" placeholder="Contenido de la review..." class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light"></textarea>
                        </div>

                        <p class="text-sm dark:text-d-soft-white text-d-surface" :class="opacityStep3">
                            El contenido de la review no es correcto y no te sientes inspirado? Pregunta a <a href="https://openai.com/blog/chatgpt/" target="_blank" rel="noopener noreferrer" class="text-d-surface dark:text-d-secondary underline">ChatGPT</a> 'Redacta una breve sinopsis de la película Matrix' por ejemplo.
                        </p>

                        <!-- Publish button -->
                        <div @click="publishReview" class="mt-6 px-3 py-2 font-bold text-center dark:text-d-surface border-2 dark:border-d-secondary rounded-lg dark:bg-d-secondary hover:dark:text-d-secondary hover:dark:border-d-soft-white hover:dark:bg-d-surface cursor-pointer transition ease-in duration-100" :class="opacityStep3">
                            Publicar review
                        </div>
                    </form>

                </div>
            </article>
        
        </main>

        <!-- Modals fixed section -->

        <!-- Pop-up Modal successful published -->
        <span class="opacity-0 fixed bottom-10 right-14 px-8 py-4 flex flex-row items-center rounded-lg text-l-soft-black dark:border-l-8 dark:bg-d-surface bg-d-soft-white transition ease-in-out duration-200" :class="this.popupModal.class">

            <!-- Success icon -->
            <svg v-show="this.popupModal.check_icon" class="w-8 dark:text-d-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <div class="flex flex-col mx-4">
                <p class="ml-2 dark:text-d-secondary text-d-surface">{{ this.popupModal.message }}</p>
                <router-link :to="{name: 'review', params: {movie_id: this.routeParamID}}" class="ml-2 underline underline-offset-2 dark:text-d-secondary text-d-surface">Ver review creada</router-link>
            </div>

            <svg @click="this.popupModal.class = 'opacity-0'" class="w-8 dark:text-d-soft-white ml-4 hover:dark:opacity-75 cursor-pointer" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>
    </section>

    <!-- Footer component -->
    <Footer />
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import AsideMenu from '../components/AsideMenu.vue';
import Footer from '../components/Footer.vue';

export default{
    name: 'PublishReview',
    components: {
        HeaderComp,
        AsideMenu,
        Footer
    },
    data(){
        return{
            user: Object,
            showAside : true,
            errorMessageTitle: false,
            errorMessageRelease: false,
            errorMessageGeneres: false,
            errorMessageReview: false,
            postersURL: [],
            moviesOptions: [],
            movieGeneres: [],
            postersLoad: false,
            movieToPublish: Object,
            opacityStep2: "opacity-30",
            opacityStep3: "opacity-20",
            routeParamID: Number,
            popupModal: {
                message: String,
                class: String,
                check_icon: false
            },
            apiKey: "b5ab218aac775c0e33a4f30ee0fd1e3c"
        }
    },

    methods: {

            // GET 4 POSTERS URLS IMAGE AND 4 MOVIES INFO FROM THIRD PARTY API (https://developers.themoviedb.org/3/getting-started/introduction)
            async getMoviesInfo(){

                const movieTitle = document.getElementById('title_to_search').value
                movieTitle == "" ? this.errorMessageTitleSearch = true : this.errorMessageTitleSearch = false;

                var moviesBaseURL = "https://api.themoviedb.org/3/search/movie?api_key="+ this.apiKey +"&language=es&query="+ movieTitle +"&page=1&include_adult=false"

                try{
                    await fetch(moviesBaseURL)
                        .then((resTheMovieDB) => resTheMovieDB.json())
                        .then((data) => {

                            console.log('TITULO DE PELÍCULA: ',data.results[0].title)

                            // Clear previous posters and names
                            this.postersURL = [];

                            for(var i=0; i < 4; i++){

                                // First 4 movies options
                                this.moviesOptions.push(data.results[i])

                                // First 4 posters and names options
                                var posterURL = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
                                var title = data.results[i].title;
                                var date = data.results[i].release_date

                                var movieOption = { id: [i], title: title, url: posterURL, release: date }

                                this.postersURL.push(movieOption)
                            }
                        });
                        
                        // Change images placeholders by 4 posters options
                        this.postersLoad = true;
                        // Change opacity class of step 2 (Selecciona el poster de la película)
                        this.opacityStep2 = "opacity-100"


                }catch(e){
                    console.error('PublishReview.vue - Error en searchMovies fun: ' + e);
                }
            },

            // SELECT MOVIE, FETCH GENERES ID AND NAMES AND LOAD MOVIE DATA TO FORM 
            async selectedMovie(movie_index){

                var movieSelected = this.moviesOptions[movie_index];
                
                // Object passed to publishReview()
                this.movieToPublish = movieSelected;
                this.movieToPublish.urlPoster = this.postersURL[movie_index].url
                this.movieToPublish.banner_1 = "https://image.tmdb.org/t/p/w1280" + movieSelected.backdrop_path;
                this.movieToPublish.banner_2 = "https://image.tmdb.org/t/p/w500" + movieSelected.backdrop_path;

                // console.log(this.movieToPublish)

                // Set selected movie title on input (Título)
                document.getElementById('movieTitleResult').value = movieSelected.title;

                // Set selected movie release date on input (Estreno)
                document.getElementById('movieReleaseResult').value = movieSelected.release_date;

                // Set selected movie generes on input (Generos)
                var generesBaseURL = "https://api.themoviedb.org/3/genre/movie/list?api_key="+ this.apiKey +"&language=es"
                
                // Clear previous data
                this.movieGeneres = []

                try {
                    await fetch(generesBaseURL)
                        .then(response => response.json())
                        .then(data => {

                            for(var i=0; i < movieSelected.genre_ids.length; i++){

                                for(var k=0; k < data.genres.length; k++){

                                    if(movieSelected.genre_ids[i] == data.genres[k].id){

                                        this.movieGeneres.push({id: data.genres[k].id, name: data.genres[k].name })
                                    }
                                }
                            }                            
                        })


                } catch (error) {
                    console.error('PublishReview.vue - Error en selectedMovie() GET generes list: ' + error);
                }

                var generes = ""
                this.movieGeneres.forEach(gName => { generes += gName.name+" " })

                document.getElementById('movieGeneresResult').value = generes;

                // Set selected movie release date on input (Estreno)
                document.getElementById('movieOverviewResult').innerText = movieSelected.overview;

                this.opacityStep3 = "opacity-100";
            },

            // PUBLISH REVIEW AND FETCH TO ADD MOVIE
            async publishReview(){

                if(document.getElementById('movieTitleResult').value == ""){
                    this.errorMessageTitle = true
                    return
                }else{
                    this.errorMessageTitle = false;
                    var movieTitle = document.getElementById('movieTitleResult').value;
                }
                if(document.getElementById('movieReleaseResult').value == ""){
                    this.errorMessageRelease = true
                    return 
                }else{
                    this.errorMessageRelease = false;
                    var movieReleaseDate = document.getElementById('movieReleaseResult').value;        
                }
                if(document.getElementById('movieGeneresResult').value == ""){
                    this.errorMessageGeneres = true
                    return
                }else{
                    this.errorMessageGeneres = false;
                    var allGeneres = document.getElementById('movieGeneresResult').value
                    allGeneres = allGeneres.replace("Ciencia ficción", "Ciencia-ficción");

                    var movieGeneres = allGeneres.split(" ");
                }
                if(document.getElementById('movieOverviewResult').value == ""){
                    this.errorMessageReview = true
                    return
                }else{
                    this.errorMessageReview = false;
                    var movieReviewContent = document.getElementById('movieOverviewResult').value
                }

                // GET more details of the movie
                var detailsBaseURL = "https://api.themoviedb.org/3/movie/"+ this.movieToPublish.id +"?api_key="+ this.apiKey +"&language=es";

                await fetch(detailsBaseURL)
                    .then(response => response.json())
                    .then(data => {
                        this.movieToPublish.duration = data.runtime+" min"
                        this.movieToPublish.subtitle = data.tagline
                    })

                const newMovie = {
                    title: movieTitle,
                    original_title: this.movieToPublish.original_title,
                    subtitle: this.movieToPublish.subtitle,
                    overview: movieReviewContent,
                    release_date: movieReleaseDate,
                    duration: this.movieToPublish.duration,
                    generes: movieGeneres,
                    vote_average: "0",
                    vote_count: 0,
                    vote_values: [],
                    total_views: 0,
                    views_24h: 0,
                    views_7d: 0,
                    views_1m: 0,
                    poster: this.movieToPublish.urlPoster,
                    banner_size_xl: this.movieToPublish.banner_1,
                    banner_size_md: this.movieToPublish.banner_2,
                    trailer_iframe_url: "",
                    published_by: this.user.name
                }

                try{

                    const base_URL = 'http://localhost:3000/'

                    // POST new movie review
                    await fetch(base_URL+'movies',{
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newMovie)
                    })
                        .then(response => response.json())
                        .then(data => console.log('MOVIE REVIEW PUBLISHED'))

                    // GET published review id on db
                    await fetch(base_URL+'movies')
                        .then(response => response.json())
                        .then(movies => {

                            movies.forEach(movie => {
                                if(movie.title == this.movieToPublish.title && movie.release_date == this.movieToPublish.release_date){
                                    this.routeParamID = movie.id
                                }
                            })
                        })

                    // PATCH user reviews_count +1
                    this.user.reviews_count += 1;

                    await fetch(base_URL+'users/'+this.user.id,{
                        method: 'PATCH',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.user)
                    })
                    .then(response => response.json())
                    .then(data => console.log('USER REVIEWS_COUNT +1'))

                    this.popupModal.message = "Nueva review de '"+ this.movieToPublish.title +"' publicada!"
                    this.popupModal.check_icon = true;
                    this.popupModal.class = "opacity-100 dark:border-d-secondary"

                }catch(err){
                    console.error('PublishReview.vue - Error en PublishReview() POST new movie review: '+ err);
                }
            }
    },

    async created(){

        // Check active sesion cookie
        if(document.cookie != ""){

            //GET ALL users
            await fetch('http://localhost:3000/users')
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
    }
}
</script>
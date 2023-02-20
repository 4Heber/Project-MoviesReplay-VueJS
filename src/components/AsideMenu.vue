
<template>
    <aside class="bg-l-surface-color dark:bg-d-surface group pt-8 md:absolute md:inset-y-0 md:left-0">

        <!-- Logotype Component -->
        <div class="w-full flex justify-between items-center">
            <Logotype />

            <div @click="closeAsideMenu" class="md:flex justify-between items-center lg:hidden w-16 h-12 md:dark:border-2 md:dark:border-r-0 rounded-lg rounded-tr-none rounded-br-none md:dark:border-d-soft-white -translate-y-2 cursor-pointer">
                <svg class="w-8 ml-2 dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </div>

        <!-- Login & Register button shown on breakpoint md:(min-width:768px) -->
        <div class="mx-8 lg:hidden md:block">
            <ul class="flex flex-col items-center">
                <router-link :to="{name: 'login'}" class="group/buttons w-full mb-4">
                    <li class="h-full px-8 py-2 font-bold tracking-wider text-center dark:text-d-soft-white rounded-lg border-2 border-d-background dark:bg-transparent group-hover/buttons:border-d-surface group-hover/buttons:bg-d-background group-hover/buttons:text-d-soft-white transition ease-in duration-150 xl:text-lg lg:text-sm">
                        Login
                    </li>
                </router-link>
                <router-link :to="{name: 'register'}" class="group/buttons w-full">
                    <li class="h-full px-8 py-2 font-bold tracking-wider text-center dark:text-d-soft-white rounded-lg border-2 border-d-surface dark:bg-d-background group-hover/buttons:border-d-background group-hover/buttons:bg-transparent transition ease-in duration-150 xl:text-lg lg:text-sm">
                        Register
                    </li>
                </router-link>
            </ul>
        </div>

        <!-- Menu -->
        <section class="relative h-4/5 flex-col">
            <!-- Views -->
            <h2 @click="goTop" class="2xl:block lg:hidden md:text-xl pb-8 pt-4 pl-8 sticky top-0 dark:text-d-primary dark:bg-d-surface dark:hover:text-d-variant-0 text-2xl italic tracking-wider font-bold cursor-pointer">MENU</h2>

            <div class="2xl:hidden lg:block md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <ul class="lg:flex-col 2xl:text-lg mb-8 dark:text-d-soft-white">
                <!-- Home link -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Inicio
                    </li>
                </router-link>

                <!-- Explorar link -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Explorar
                    </li>
                </router-link>

                <!-- Mi lista link -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Mi lista
                    </li>
                </router-link>

                <!-- Tendencias -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Tendencias
                    </li>
                </router-link>

                <!-- Estrenos -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Estrenos
                    </li>
                </router-link>

                <!-- Mejor puntuadas -->
                <router-link :to="{name: 'home'}" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Mejor puntuadas
                    </li>
                </router-link>
            </ul>

            <!-- Following users -->
            <h2 v-if="cookie" @click="goTop" class="pb-8 pl-8 sticky top-16 md:text-xl dark:text-d-primary dark:bg-d-surface dark:hover:text-d-variant-0 text-2xl italic tracking-wider font-bold cursor-pointer 2xl:block lg:hidden">
                SIGUIENDO
            </h2>

            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <ul v-if="cookie" class="2xl:text-lg tracking-wider mb-20 dark:text-d-soft-white">

                <router-link v-for="friend in following" :to="{name: 'perfil'}" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">

                    <li class="relative flex items-center transition ease-in duration-150">

                        <!-- Load friend profile image if isn't set to "none" -->
                        <div v-if="friend.profile_img != 'none'" class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center">
                            <img :src="'../'+friend.profile_img" alt="userImage">
                        </div>

                        <!-- Default Profile Image -->
                        <div v-else class="w-10 h-10 dark:text-d-secondary bg-d-soft-white dark:bg-gradient-to-br dark:from-d-surface dark:to-d-background text-4xl flex justify-center items-center rounded-full border-2 border-custom-white-text overflow-hidden cursor-pointer">
                            <p class="text-2xl">{{ friend.name.charAt(0).toUpperCase() }}</p>
                        </div>

                        <p class="pl-4 lg:hidden 2xl:block">{{ friend.name }}</p>
                        
                        <div class="opacity-0 group-hover/link:opacity-100 absolute -right-14 h-6 w-6 z-20 rotate-45 dark:bg-d-background transition ease-in duration-150"></div>
                        <div class="opacity-0 group-hover/link:opacity-100 flex justify-center items-center absolute -right-40 w-[115px] h-8 rounded-r-full dark:bg-gradient-to-r dark:from-d-background dark:to-d-surface transition ease-in duration-150">
                            <p class="text-base dark:text-d-secondary tracking-widest">Ver perfil</p>
                        </div>
                    </li>
                </router-link>

            </ul>

            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <!-- Logout -->
            <div @click="logout" class="flex items-center 2xl:justify-start 2xl:pl-8 2xl:pt-8 mb-8 2xl:text-lg border-l-4 border-d-surface group/logout hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8 cursor-pointer">
                <svg class="w-8 lg:w-10 md:w-8 md:dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p class="pl-4 dark:text-d-soft-white group-hover/logout:opacity-75 transition ease-in duration-150 lg:hidden 2xl:block">Logout</p>
            </div>
            
            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <!-- Top colaboradores -->
            <h2 class="pb-8 pl-8 md:text-xl dark:text-d-primary dark:bg-d-surface text-2xl italic tracking-wider font-bold lg:hidden 2xl:block">COLABORADORES TOP</h2>

            <router-link v-for="contributor in contributors" :to="{name: 'perfil'}" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">

                <li class="relative w-full flex items-center transition ease-in duration-150">

                    <!-- Load friend profile image if isn't set to "none" -->
                    <div v-if="contributor.profile_img != 'none'" class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center">
                        <img :src="'../'+friend.profile_img" alt="userImage">
                    </div>

                    <!-- Default Profile Image -->
                    <div v-else class="w-11 h-10 dark:text-d-secondary bg-d-soft-white dark:bg-gradient-to-br dark:from-d-surface dark:to-d-background text-4xl flex justify-center items-center rounded-full border-2 border-d-soft-white overflow-hidden cursor-pointer">
                        <p class="text-2xl">{{ contributor.name.charAt(0).toUpperCase() }}</p>
                    </div>

                    <div class="w-full flex flex-row justify-between items-center">
                        <p class="pl-4 2xl:text-base lg:hidden 2xl:block dark:text-d-soft-white">{{ contributor.name }}</p>
                        <span class="dark:text-d-warning mr-4">{{ contributor.reviews_count }} - Publicaciones</span>
                    </div>
                    
                    <div class="opacity-0 group-hover/link:opacity-100 absolute -right-14 h-6 w-6 z-20 rotate-45 dark:bg-d-background transition ease-in duration-150"></div>
                    <div class="opacity-0 group-hover/link:opacity-100 flex justify-center items-center absolute -right-40 w-[115px] h-8 rounded-r-full dark:bg-gradient-to-r dark:from-d-background dark:to-d-surface transition ease-in duration-150">
                        <p class="text-base dark:text-d-secondary tracking-widest">Ver perfil</p>
                    </div>
                </li>

            </router-link>

        </section>
    </aside>
</template>

<script>
// import { stringify } from 'querystring';
import Logotype from './Logotype.vue';

export default {
  name: 'AsideMenu',
  data(){
    return{
        cookie: false,
        user: [],
        following: [],
        contributors: [],
    }
  },
  components: {
    Logotype
  },
  methods: {
    goTop(){
        document.documentElement.scrollTop = 0
    },
    closeAsideMenu() {
        this.$emit('closeAsideMenu')
    },
    logout(){
        document.cookie = 'authCookie=; max-age=0';
        location.reload();
        console.log('AsideMenu.vue - authCookie deleted', document.cookie);
    }
  },
  async created(){

    const baseURL = "http://localhost:3000/users/"
    
    //Get authenticated user
    if(document.cookie == ""){
        return this.user = []
    }
    else{
        this.cookie = true;

        // Get authenticated user data & friends array list
        var friends = []

        // GET ALL
        await fetch(baseURL)
        .then(response => response.json())
        .then(data => {
                // Get actual user
                data.forEach(user => {

                    if(user.role.includes('Colaborador') || user.role == "Colaborador"){
                        this.contributors.push({id: user.id, name: user.name, profile_img: user.profile.profile_img, reviews_count: user.reviews_count})
                    }

                    // Sort by reviews count num
                    this.contributors = this.contributors.sort((a, b) => (a.reviews_count < b.reviews_count) ? 1 : -1)

                    if(document.cookie == ('authCookie=' + user.cookie)){
                        this.user = user
                        friends = user.profile.friends_list

                        // Get friends info of this user
                        friends.forEach( async (friend_id, i) => {
                            // GET ONE recursive
                            await fetch(baseURL + friend_id)
                            .then(response => response.json())
                            .then(friend => {
                                var newObj = {id: friend.id, name: friend.name, profile_img: friend.profile.profile_img}
                                this.following.push(newObj)
                            });
                        });
                    }
                });
        });
    }
  }
}  
</script>

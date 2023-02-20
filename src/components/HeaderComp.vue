<template>
    <header class="relative">
        <!-- Main content -->
        <section class="relative flex justify-between items-center bg-transparent">
            
            <!-- Show asideMenu button on breakpoint md:(768px) -->
            <div @click="showAsideMenu" class="md:flex lg:hidden md:w-20 md:h-16 justify-center items-center mr-8 rounded-full hover:shadow-xl shadow-d-surface cursor-pointer transition ease-in duration-150">
                <svg class="w-8 h-8 text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>

            <!-- Logotype component only on register/login route -->
            <Logotype v-if="this.renderLogotype" />

            <!-- Searchbar -->
            <form v-else class="xl:w-[50%] lg:w-[55%] md:w-full">
                <label for="default-search" class="mb-2 text-base dark:text-d-soft-white sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                    <svg aria-hidden="true" class="w-5 h-5 text-d-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    </div>
                    <input type="search" id="" class="block w-full px-4 py-3 pl-10 2xl:text-base text-d-background rounded-lg border-1 ring-0 outline-none active:ring-0 active:outline-0 dark:bg-d-surface dark:placeholder-white dark:text-d-soft-white lg:text-sm" placeholder="Busca películas, géneros, actores...">

                    <button type="submit" class="absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-1 bg-d-primary hover:bg-d-variant-0 dark:text-d-soft-white dark:focus:ring-gray-800">Search</button>
                </div>
            </form>

            <!-- User actions -->
            <div class="py-4 flex justify-between items-center">

                <router-link :to="{name: 'publish'}" v-show="cookie" class="text-lg tracking-wide dark:text-d-soft-white border-2 dark:border-d-soft-white px-8 py-2 mr-4 rounded-lg hover:dark:text-d-secondary hover:dark:border-d-surface hover:dark:bg-d-surface transition ease-in duration-100 border-d-surface hover:border-d-soft-white hover:bg-d-soft-white hover:text-d-secondary">
                    Publicar Review
                </router-link>

                <!-- Toggle theme button component -->
                <ToggleTheme />

                <!-- Login & Register buttons | hidden on active session -->
                <div v-if="!cookie" class="ml-4 lg:block md:hidden">
                    <ul class="flex items-center">
                        <router-link :to="{name: 'login'}" class="group">
                            <li class="h-full px-8 py-2 font-bold tracking-wider text-center dark:text-d-soft-white rounded-lg border-2 border-d-soft-white dark:bg-transparent group-hover:border-d-surface group-hover:bg-d-surface group-hover:text-d-soft-white transition ease-in duration-150 xl:text-lg lg:text-sm">
                                Login
                            </li>
                        </router-link>

                        <router-link :to="{name: 'register'}" class="group">
                            <li class="h-full px-8 py-2 ml-8 font-bold tracking-wider text-center dark:text-d-soft-white rounded-lg border-2 border-d-surface dark:bg-d-surface group-hover:border-d-soft-white group-hover:bg-transparent transition ease-in duration-150 xl:text-lg lg:text-sm">
                                Register
                            </li>
                        </router-link>
                    </ul>
                </div>

                <!-- User actions -->
                <div v-else-if="cookie" class="flex justify-between items center">

                    <!-- Messages -->
                    <a href="#" @click="this.showMessages = !this.showMessages" class="relative w-16 h-16 flex justify-center items-center rounded-full group hover:shadow-md transition ease-in duration-150">

                        <svg class="w-8 text-d-surface dark:text-d-soft-white group-hover:opacity-75 transition ease-in duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>

                        <span v-show="this.hasMessages" class="absolute w-2 h-2 bg-d-secondary rounded-full top-3 right-4"></span>

                        <!-- Messages popup-modal -->
                        <div v-show="this.showMessages" class="absolute z-40 top-20 -left-48 w-96 px-8 py-4 flex-row justify-between items-center dark:text-d-soft-white border dark:border-d-muted dark:bg-d-surface rounded-lg shadow-lg dark:shadow-d-background text-d-surface bg-d-soft-white border-d-soft-white">

                            <span class="absolute -top-3 right-36 rotate-45 w-6 h-6 dark:bg-d-surface bg-d-soft-white"></span>

                            <div v-for="message in this.user.messages" class="text-sm">
                                <h3 class="font-bold mb-2">{{ message.title }}</h3>
                                <p>{{ message.content }}</p>

                                <!-- Delete message -->
                                <div @click="closeUserMessages(message.id)" class="absolute right-2 top-2 group/close">
                                    <svg class="w-8 dark:text-d-soft-white group-hover/close:opacity-50" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>

                            <p v-show="!this.hasMessages">No tienes mensajes nuevos.</p>

                        </div>
                    </a>

                    <!-- Notifications -->
                    <a href="#" @click="this.showNotifications = !this.showNotifications" class="relative w-16 h-16 flex justify-center items-center rounded-full group hover:shadow-md transition ease-in duration-150">

                        <svg class="w-8 text-d-surface dark:text-d-soft-white group-hover:opacity-75 transition ease-in duration-150" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>

                        <span v-show="this.hasNotifications" class="absolute w-2 h-2 bg-d-secondary rounded-full top-3 right-4"></span>

                        <!-- Notifications popup-modal -->
                        <div v-show="this.showNotifications" class="absolute z-40 top-20 -left-64 w-96 px-8 py-4 flex flex-row justify-between items-center dark:text-d-soft-white border dark:border-d-muted dark:bg-d-surface rounded-lg shadow-lg dark:shadow-d-background text-d-surface bg-d-soft-white border-d-soft-white">

                            <span class="absolute -top-3 right-20 rotate-45 w-6 h-6 dark:bg-d-surface bg-d-soft-white"></span>

                            <div v-for="notification in this.user.notifications" class="text-sm">
                                <h3 class="font-bold mb-2">{{ notification.title }}</h3>
                                <p>{{ notification.content }}</p>

                                <!-- Delete notification -->
                                <div @click="closeUserNotifications(notification.id)" class="absolute right-2 top-2 group/close">
                                    <svg class="w-8 dark:text-d-soft-white group-hover/close:opacity-50" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>

                            <p v-show="!this.hasNotifications">No tienes notificaciones nuevas.</p>
                        </div>
                    </a>
                
                    <!-- Default Profile Image -->
                    <div v-if="no_profile_img" class="dark:text-d-secondary bg-d-soft-white dark:bg-d-surface text-4xl w-16 h-16 flex justify-center items-center rounded-full cursor-pointer">
                        {{ default_img }}
                    </div>

                    <!-- User profile image -->
                    <router-link v-else :to="{name: 'profile'}" class="w-16 h-16 flex justify-center items-center rounded-full overflow-hidden">
                        <img :src="user.profile.profile_img" alt="ProfileImage" class="w-16 h-16">
                    </router-link>

                    <!-- Role indicator only 'Colaborador' -->
                    <span v-show="role_c" class="absolute -right-[16px] top-8 w-8 hover:w-fit hover:translate-x-[75px] hover:pl-0 flex flex-row items-center overflow-hidden text-sm border-l-2 dark:border-d-background dark:text-d-warning dark:bg-d-surface px-2 py-1 rounded-full tracking-wider select-none group/C bg-d-soft-white text-d-warning">
                        <p class="group-hover/C:opacity-0">C</p>
                        <p class="opacity-0 group-hover/C:opacity-100">Colaborador</p>
                    </span>
                </div>

            </div> 
        </section>
    </header>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue';
import Logotype from './Logotype.vue';

export default{
    name: 'HeaderComp',
    data(){
        return {
            cookie: false,
            user: [],
            no_profile_img: Boolean,
            default_img: String,
            role_c: Boolean,
            hasMessages: Boolean,
            hasNotifications: Boolean,
            showMessages: false,
            showNotifications: false,
        }
    },

    components: {
        ToggleTheme,
        Logotype,
    },

    props: {
        renderLogotype: Boolean,
    },

    methods: {
        showAsideMenu() {
            //Custom event
            this.$emit('showAsideMenu')
        },

        async closeUserMessages(message_id){

            // Delete array item by index
            this.user.messages = this.user.messages.splice(message_id, message_id)

            await fetch("http://localhost:3000/users/"+ this.user.id,{
                method: 'PATCH',
                body: JSON.stringify(this.user),
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => response.json())
                .then(data => console.log('message deleted'))

            this.hasMessages = false
        },

        async closeUserNotifications(message_id){

            // Delete array item by index
            this.user.notifications = this.user.notifications.splice(message_id, message_id)

            await fetch("http://localhost:3000/users/"+ this.user.id,{
                method: 'PATCH',
                body: JSON.stringify(this.user),
                headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => response.json())
                .then(data => console.log('notification deleted'))

            this.hasNotifications = false
        }
    },

    async created() {

        // Check if session cookie exists
        if(document.cookie != ""){
            console.log("cookie exists")
            this.cookie = !this.cookie
        }
        else {
            console.log('cookie NO exists')
        }

        // Get authenticated user data
        await fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
                data.forEach(user => {
                    if(document.cookie == ('authCookie=' + user.cookie)){
                        this.user = user

                        // Check user profile image
                        if(this.user.profile.profile_img == "none"){
                            this.default_img = this.user.name.charAt(0).toUpperCase()
                            this.no_profile_img = true
                        }
                        else{
                            this.no_profile_img = false
                        }

                        // Check user role
                        this.user.role.includes("Colaborador") ? this.role_c = true : this.role_c = false;
                    }
                });
        });

        // User messages
        this.user.messages.length != 0 ? this.hasMessages = true : this.hasMessages = false;
        
        // User notifications
        this.user.notifications.length != 0 ? this.hasNotifications = true : this.hasNotifications = false;


    }
}
</script>
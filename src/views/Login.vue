<template>
    <div class="grid grid-cols-12 grid-rows-6 gap-x-8 w-full h-screen dark:bg-gradient-to-br dark:from-d-surface dark:via-d-theme-via dark:to-d-theme-to bg-gradient-to-br from-l-theme-from to-l-theme-to">

        <!-- Header -->
        <HeaderComp :renderLogotype="true" class="col-start-3 col-end-11 mt-6"/>

        <form class="col-start-7 row-start-2 col-span-4 row-span-4 p-16 dark:bg-gradient-to-br dark:from-d-background dark:via-d-surface dark:to-d-surface rounded-tr-xl rounded-br-xl">

            <!-- Username -->
            <div class="mb-6">
                <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-l-soft-black dark:text-d-soft-white">Usuario</label>
                <input type="text" id="username" class="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-d-soft-white focus:border-d-soft-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-d-soft-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="Nombre usuario" required>

                <!-- Error message -->
                <p v-if="usernameError.status" class="text-sm dark:text-d-warning">{{ usernameError.msg }}</p>
            </div>

            <!-- Password -->
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" id="password" class="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-d-soft-white focus:border-d-soft-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-d-soft-white dark:focus:border-d-soft-white dark:shadow-sm-light" required>

                <!-- Error message -->
                <p v-if="passwordError.status" class="text-sm dark:text-d-warning">{{ passwordError.msg }}</p>
            </div>

            <p class="mb-8 text-sm dark:text-d-muted">
                Todavía no tienes cuenta?
                <router-link :to="{name : 'register'}" class="dark:text-d-secondary underline-offset-4 cursor-pointer hover:underline hover:opacity-75 transition ease-in duration-150">Registrarse.</Router-link>
            </p>
            
            <!-- Login button -->
            <button type="button" v-on:click="loginAttempt" class="font-bold lg:text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center dark:text-d-surface dark:bg-d-secondary dark:hover:opacity-75  transition ease-in duration-150">Iniciar sesión</button>
        </form>

        <!-- Banner -->
        <div class="col-start-3 row-start-2 col-span-4 row-span-4 relative rounded-tl-xl rounded-bl-xl overflow-hidden bg-cover bg-center bg-[url('src/assets/Images/Login-register-banner/Section_4.png')]">
            <!-- <img class="" src="../assets/Images/Login-register-banner/Section 2.png" alt="background-image"> -->

            <div class="absolute inset-y-0 p-16 bg-gradient-to-bl from-d-background via-transparent dark:to-d-surface backdrop-brightness-50">
                <p class="text-2xl font-sans dark:text-d-soft-white select-none">
                    Únete hoy mismo a la comunidad de los amantes del cine iniciando sesión.<br/><br/>
                    Obtén acceso exclusivo a una amplia biblioteca de críticas, valoraciones y recomendaciones de películas.<br/><br/>
                    Comparte tus opiniones, descubre nuevas películas y conéctate con otros entusiastas del cine. <br/><br/>
                    No pierdas la oportunidad de mejorar tu experiencia cinematográfica.
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';

export default {
    name: 'Login',
    components: {
        HeaderComp
    },
    data() {
        return {
            users: [],
            usernameError: {
                status: false,
                msg: ''
            },
            passwordError: {
                status: false,
                msg: ''
            }
        }
    },
    created(){
        fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
            this.users = data
        })
    },
    methods: {
        async loginAttempt(){

            const baseURL = 'http://localhost:3000/';

            //GET ALL users
            async function getUsers(baseURL){
                try {
                    const response = await fetch(baseURL + 'users');
                    const usersList = await response.json();
                    return usersList

                } catch (error){
                    console.error('Login.vue - Fallo en GET ALL ' + error)
                }
            };

            var allUsers = await getUsers(baseURL);

            // Get input values
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Errors

            if(username == ''){
                this.usernameError.msg = 'El campo no puede estar vacío.'
                this.usernameError.status = true
                return false
            }
            else{
                this.usernameError.msg = ''
                this.usernameError.status = false
            };

            if(password == ''){
                this.passwordError.msg = 'El campo no puede estar vacío.'
                this.passwordError.status = true
                return false
            }
            

            //Generate random Cookie with length 12
            function getRandomCookie(){
                let random = '';
                let chars = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz-_';

                // Cookie Length 12
                for(var i = 0; i < 12; i++){
                    random += chars.charAt(Math.floor(Math.random() * chars.length))
                }
                return random
            }

            async function login(user){
                //Set user new authCookie
                const newCookie = getRandomCookie();
                document.cookie = `authCookie=${newCookie}; max-age=3600; path=/; SameSite=None; Secure`;

                const userCookie = {
                    cookie: newCookie
                }
                // PATCH || PUT user cookie
                await fetch(baseURL + 'users/' + user.id, {
                    method: "PATCH",
                    body: JSON.stringify(userCookie),
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                })
                .then(responsePatch => {responsePatch.json()})
                .then(data => {
                    console.log(data, 'Login.vue - PATCH data reponse')
                });

                window.location.href = 'http://localhost:5173/'
            }

            // Get user info
            var userExists = false;
            var userData;            
            allUsers.forEach((user) => {
                if(user.name == username){
                    userExists = true;
                    userData = user
                }
            })

            if(userExists){
                if(password === userData.password){
                    login(userData)
                }
                else{
                    this.passwordError.msg = 'Contraseña incorrecta'
                    this.passwordError.status = true
                    return false
                } 
            }
            else{
                this.usernameError.msg = 'El usuario no existe en nuestros registros...';
                this.usernameError.status = true
                return false
            }
        }
    },
}
</script>

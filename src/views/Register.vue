<template>
    <div class="grid grid-cols-12 grid-rows-6 gap-x-8 w-full h-screen  dark:bg-gradient-to-br from-d-surface via-d-variant-1 to-d-surface">

        <!-- Header -->
        <HeaderComp :renderLogotype="true" class="col-start-3 col-end-11 mt-6"/>

        <!-- Banner -->
        <div class="col-start-3 row-start-2 col-span-4 row-span-4 relative rounded-tl-xl rounded-bl-xl overflow-hidden bg-cover bg-center bg-[url('src/assets/Images/Login-register-banner/Section_4.png')]">
            <!-- <img class="" src="../assets/Images/Login-register-banner/Section 2.png" alt="background-image"> -->

            <div class="absolute inset-y-0 px-12 py-12 bg-gradient-to-bl from-d-background via-transparent dark:to-d-surface backdrop-brightness-50">
                <p class="text-2xl font-sans dark:text-d-soft-white select-none">
                    Únete hoy a la comunidad de Movies Replay. <br/>

                    ¿Eres un amante del cine y buscas una plataforma para compartir tus pensamientos y opiniones con otras personas que comparten tu pasión?<br/><br/> No busques más.<br/>
                    Nuestra plataforma de reseñas de películas ofrece un espacio para que los entusiastas del cine se conecten, discutan y reseñen sus películas favoritas.<br/><br/>

                    Al registrarte, tendrás acceso a una gran cantidad de información sobre películas, críticas y debates de una vibrante comunidad de aficionados al cine como tú.<br/><br/>
                </p>
            </div>
        </div>

        <form class="col-start-7 row-start-2 col-span-4 row-span-4 px-16 py-16 dark:bg-gradient-to-br dark:from-d-background dark:via-d-surface dark:to-d-surface rounded-tr-xl rounded-br-xl">
            <!-- Username -->
            <div class="relative mb-8">
                <label for="username" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-l-soft-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="Nombre usuario" required>

                <!-- Error message -->
                <p v-if="errors.usernameError.status" class="absolute -bottom-6 text-sm dark:text-d-warning">{{ errors.usernameError.msg }}</p>
            </div>
            <!-- Email -->
            <div class="relative mb-8">
                <label for="email" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" class="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-d-soft-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-d-soft-white dark:focus:border-d-soft-white dark:shadow-sm-light" placeholder="ejemplo@email.com" required>
                
                <!-- Error message -->
                <p v-if="errors.emailError.status" class="absolute -bottom-6 text-sm dark:text-d-warning">{{ errors.emailError.msg }}</p>
            </div>
            <!-- Password -->
            <div class="relative mb-8">
                <label for="password" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" id="password" class="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ffocus:ring-l-soft-black focus:border-d-soft-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-d-soft-white dark:focus:border-d-soft-white dark:shadow-sm-light" required>
                
                <!-- Error message -->
                <p v-if="errors.passwordError.status" class="absolute -bottom-6 text-sm dark:text-d-warning">{{ errors.passwordError.msg }}</p>
            </div>
            <!-- Repeat password -->
            <div class="relative mb-8">
                <label for="repeat-password" class="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Repetir Contraseña</label>
                <input type="password" id="repeat-password" class="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-l-soft-black focus:border-d-soft-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-d-soft-white dark:focus:border-d-soft-white dark:shadow-sm-light" required>
                <!-- Error message -->
                <p v-if="repeatPassError.status" class="absolute -bottom-6 text-sm dark:text-d-warning">{{ repeatPassError.msg }}</p>
            </div>
            <!-- Terms and conditions -->
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-d-secondary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                </div>
                <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con los <a href="#" class="text-l-soft-black hover:underline hover:opacity-75 dark:text-d-secondary transition ease-in duration-100">terminos y condiciones.</a></label>
            </div>
            <!-- Register button -->
            <button type="button" v-on:click="register" class="font-bold text-white dark:text-d-surface bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-d-secondary dark:hover:opacity-75 dark:focus:ring-d-secondary">Registrar nueva cuenta</button>
        </form>
    </div>
    
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';

export default {
    name: 'Register',
    components: {
        HeaderComp
    },
    data() {
        return {
            users: [],
            errors: {
                usernameError: {
                    status: false,
                    msg: 'test'
                },
                emailError: {
                    status: false,
                    msg: ''
                },
                passwordError: {
                    status: false,
                    msg: ''
                },
            },
           
            repeatPassError: {
                status: false,
                msg: ''
            },
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
        async register(){

            const baseURL = 'http://localhost:3000/';
            
            //POST new user
            async function postUser(baseURL, user){
                try {
                    const response = await fetch(baseURL + 'users', {
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user) // body data type must match "Content-Type" header
                    })
                } catch (error) {
                    console.error('Register.vue - Fallo en POST ' + error)
                }
            };

            //GET ALL users
            async function getUsers(baseURL){
                try {
                    const response = await fetch(baseURL + 'users');
                    const usersList = await response.json();
                    return usersList

                } catch (error){
                    console.error('Register.vue - Fallo en GET ALL ' + error)
                }
            };

            // Check inputs errors
            var allUsers = await getUsers(baseURL);

            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var repeatPassword = document.getElementById('repeat-password').value;
            var terms = document.getElementById('terms').value;

            var emailPattern = /.+\@.+\..+/;

            if(username == ''){
                this.errors.usernameError.msg = 'El campo no puede estar vacío.'
                this.errors.usernameError.status = true
                return false
            }
            else{ this.errors.usernameError.status = false }

            if(username.length < 3){
                this.errors.usernameError.msg = 'Mínimo 3 carácteres'
                this.errors.usernameError.status = true
                return false
            }
            else{ this.errors.usernameError.status = false }

            if(email == ''){
                this.errors.emailError.msg = 'El campo no puede estar vacío.'
                this.errors.emailError.status = true
                return false
            }
            else{ this.errors.emailError.status = false }
            
            if(!emailPattern.test(email)){
                this.errors.emailError.msg = 'Email no válido.'
                this.errors.emailError.status = true
                return false
            }
            else{ this.errors.emailError.status = false }

            if(password == ''){
                this.errors.passwordError.msg = 'El campo no puede estar vacío.'
                this.errors.passwordError.status = true
                return false
            }
            else{ this.errors.passwordError.status = false }
            
            if(password.length < 6){
                this.errors.passwordError.msg = 'Mínimo 6 carácteres'
                this.errors.passwordError.status = true
                return false
            }
            else { this.errors.passwordError.status = false }
            
            if(password != repeatPassword){
                this.repeatPassError.status = true
                this.repeatPassError.msg = 'Las contraseñas no coinciden.'
                return false
            }
            else { this.repeatPassError.status = false }

            allUsers.forEach((user) => {
                if(user.name == username){
                    this.errors.usernameError.msg = 'El usuario introducido ya existe.'
                    this.errors.usernameError.status = true
                    return false
                }
            })

            var noErrors = false;
            if(!this.errors.usernameError.status && !this.errors.passwordError.status && !this.errors.emailError.status && !this.repeatPassError.status){
                noErrors = true
            }

            if(noErrors){
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

                //Set user authCookie
                var cookie = getRandomCookie();
                document.cookie = `authCookie=${cookie}; max-age=3600; path=/; SameSite=None; Secure`;

                //Load user template
                var time = new Date();

                const newUser = {
                    name: username,
                    email: email,
                    password: password,
                    created_at: time.getDay()+'/'+time.getMonth()+' - '+time.getHours()+':'+time.getMinutes(),
                    profile: {
                        profile_img: 'none',
                        friends_list: [],
                        groups: [],
                        movies_seen: [],
                        movies_pendent: [],
                        movies_favourite: [],
                        movies_voted: []
                    },
                    cookie: cookie
                }

                //POST user
                await postUser(baseURL, newUser);
                window.location.href = 'http://localhost:5173/'
                console.log('Register ok')
            }
        },
    },
}
</script>

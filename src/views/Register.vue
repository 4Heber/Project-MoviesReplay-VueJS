<template>
    <div class="grid grid-cols-12 grid-rows-6 gap-x-8 w-full h-screen  dark:bg-gradient-to-br from-d-surface via-d-variant-1 to-d-surface">

        <!-- Header -->
        <HeaderComp :renderLogotype="true" class="col-start-1 col-end-11"/>

        <!-- Banner -->
        <div class="col-start-4 row-start-2 col-span-3 row-span-3 dark:bg-d-surface rounded-tl-xl rounded-bl-xl">

        </div>

        <form class="col-start-7 row-start-2 col-span-3 row-span-3 px-8 py-10 dark:bg-d-surface rounded-tr-xl rounded-br-xl">
            <!-- Username -->
            <div class="mb-6">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="NombreUsuario" required>

                <!-- Error message -->
                <p v-if="repeatPassError.status" class="text-sm dark:text-d-warning">{{ repeatPassError.msg }}</p>
            </div>
            <!-- Email -->
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="ejemplo@email.com" required>
            </div>
            <!-- Password -->
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
            </div>
            <!-- Repeat password -->
            <div class="mb-6">
                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repetir Contraseña</label>
                <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                <!-- Error message -->
                <p v-if="repeatPassError.status" class="text-sm dark:text-d-warning">{{ repeatPassError.msg }}</p>
            </div>
            <!-- Terms and conditions -->
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                </div>
                <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con los <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terminos y condiciones.</a></label>
            </div>
            <!-- Register button -->
            <button type="button" v-on:click="register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar nueva cuenta</button>
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
            usernameError: {
                status: false,
                msg: ''
            },
            emailError: {
                status: false,
                msg: ''
            },
            passwordError: {
                status: false,
                msg: ''
            },
            repeatPassError: {
                status: false,
                msg: 'Las contraseñas no coinciden.'
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
                    console.log(baseURL)
                    const response = await fetch(baseURL + 'users');
                    console.log(response)
                    const usersList = await response.json();
                    console.log(usersList)
                    return usersList

                } catch (error){
                    console.error('Register.vue - Fallo en GET ALL ' + error)
                }
            };

            // Check if user already exists
            var allUsers = await getUsers(baseURL);

            var alreadyExist = false;

            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var repeatPassword = document.getElementById('repeat-password').value;
            var terms = document.getElementById('terms').value;

            var fields = ['usernameError', 'emailError', 'passwordError']
            for(var i = 0; i < 3; i++){
                if(fields[i] == ''){
                    this.fields[i].msg = 'El campo no puede estar vacío.';
                    this.fields[i].status = true
                    return false
                }
            }

            // if(username == ''){
            //     this.usernameError.msg = 'El campo no puede estar vacío.'
            //     this.usernameError.status = true
            //     return false
            // }
            // else if(email == ''){
            //     this.emailError.msg = 'El campo no puede estar vacío.'
            //     this.emailError.status = true
            //     return false
            // }
            // else if(password == ''){
            //     this.passwordError.msg = 'El campo no puede estar vacío.'
            //     this.passwordError.status = true
            //     return false
            // }
            
            if(password != repeatPassword){
                this.repeatPassError.status = true
                return false
            }
            allUsers.forEach((user) => {
                if(user.name == username){
                    this.usernameError.msg = 'El usuario introducido ya existe.'
                    this.usernameError.status = true
                    return false
                }
            })

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
                    profile_img: '#',
                    friends_id_list: [],
                    groups_id_list: [],
                    movies_seen_id_list: [],
                    movies_pendent_id_list: [],
                    movies_favourite_id_list: []
                },
                cookie: cookie
            }

            //POST user
            await postUser(baseURL, newUser);
            
            window.location.href = 'http://localhost:5173/'
        }
    },
}
</script>

<script setup>
</script>
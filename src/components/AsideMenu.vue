
<template>
    <aside class="bg-l-surface-color dark:bg-d-surface group pt-8 md:absolute md:inset-y-0 md:left-0">

        <div class="w-full flex justify-between items-center">
            <!-- Logotype Component -->
            <Logotype class="md:w-[80%]"/>

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
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Inicio
                    </li>
                </a>
                <!-- Explorar link -->
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Explorar
                    </li>
                </a>
                <!-- Mi lista link -->
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Mi lista
                    </li>
                </a>
                <!-- Tendencias -->
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Tendencias
                    </li>
                </a>
                <!-- Estrenos -->
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Estrenos
                    </li>
                </a>
                <!-- Mejor puntuadas -->
                <a href="#" class="flex 2xl:justify-start items-center 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 active:border-l-8 hover:border-d-secondary transition ease-in duration-150 lg:justify-center lg:pl-0 xl:text-lg lg:text-base md:pl-8">
                    <svg class="lg:w-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <li class="2xl:block lg:hidden pl-4 tracking-widertransition group-hover/link:opacity-75 ease-in duration-150">
                        Mejor puntuadas
                    </li>
                </a>
            </ul>

            <!-- Following users -->
            <h2 @click="goTop" class="pb-8 pl-8 sticky top-16 md:text-xl dark:text-d-primary dark:bg-d-surface dark:hover:text-d-variant-0 text-2xl italic tracking-wider font-bold cursor-pointer 2xl:block lg:hidden">SIGUIENDO</h2>

            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <ul class="2xl:text-lg tracking-wider mb-20 dark:text-d-soft-white">
                <a href="#" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">
                    <li class="flex items-center group-hover/link:opacity-75 transition ease-in duration-150">
                        <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/01.jpg" alt="userImage"></div>
                        <p class="pl-4 lg:hidden 2xl:block">Sara</p>
                    </li>
                </a>
                <a href="#" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">
                    <li class="flex items-center group-hover/link:opacity-75 transition ease-in duration-150">
                        <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/02.jpg" alt="userImage"></div>
                        <p class="pl-4 lg:hidden 2xl:block">Sebas</p>
                    </li>
                </a>
                <a href="#" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">
                    <li class="flex items-center group-hover/link:opacity-75 transition ease-in duration-150">
                        <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/03.jpg" alt="userImage"></div>
                        <p class="pl-4 lg:hidden 2xl:block">Paula</p>
                    </li>
                </a>
                <a href="#" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-4 border-l-4 border-d-surface group/link hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">
                    <li class="flex items-center group-hover/link:opacity-75 transition ease-in duration-150">
                        <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/04.jpg" alt="userImage"></div>
                        <p class="pl-4 lg:hidden 2xl:block">Alex</p>
                    </li>
                </a>
            </ul>

            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <!-- Logout -->
            <a href="#" class="flex items-center 2xl:justify-start 2xl:pl-8 mb-8 2xl:text-lg border-l-4 border-d-surface group/logout hover:border-l-4 hover:border-d-secondary active:border-l-8 transition ease-in duration-150 lg:justify-center lg:pl-0 md:pl-8">
                <svg class="w-8 lg:w-10 md:w-8 md:dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p class="pl-4 dark:text-d-soft-white group-hover/logout:opacity-75 transition ease-in duration-150 lg:hidden 2xl:block">Logout</p>
            </a>
            
            <div class="lg:block 2xl:hidden md:hidden w-full mb-8 border-b-2 border-d-background"></div>

            <!-- Top comments -->
            <h2 class="pb-8 pl-8 md:text-xl dark:text-d-primary dark:bg-d-surface text-2xl italic tracking-wider font-bold lg:hidden 2xl:block">COMENTARIOS TOP</h2>
            
            <!-- Comment -->
            <article class="group 2xl:h-56 m-8 2xl:p-4 lg:p-2 md:p-4 lg:w-fit rounded-lg shadow-lg dark:bg-gradient-to-br from-d-surface via-d-background to-d-background dark:text-d-soft-white hover:h-fit cursor-pointer transition ease-in duration-200 overflow-hidden">
                <div class="flex justify-between mb-2 lg:hidden lg:h-fit 2xl:flex">
                    <svg class="w-8 dark:text-d-soft-white" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="flex items-center">

                        <img src="../assets/Icons/star-00.png" alt="star-icon" class="w-6 mr-1">
                        <p>8.4</p>
                    </div>
                </div>
                <h3 class="mb-4 text-lg md:text-base font-bold tracking-wider dark:text-d-soft-white lg:hidden 2xl:block">Spider Man</h3>
                <div class="lg:hidden 2xl:block">
                    <a href="#" class="flex items-center mb-4 group transition ease-in duration-150">
                        <li class="flex items-center group-hover:text-d-secondary transition ease-in duration-150">
                            <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center">
                            <img src="../assets/Images/Profiles/01.jpg" alt="userImage"></div>
                            <p class="pl-4">Sara</p>
                        </li>
                    </a>
                </div>
                <div class="transition-all ease-in duration-200 lg:hidden 2xl:block">
                    <p class="text-ellipsis overflow-hidden dark:text-d-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro doloremque similique repellendus ipsam debitis officiis temporibus odio nemo quam laborum deserunt recusandae voluptas natus, nostrum voluptate animi? Quidem, modi?</p>
                </div>

                <!-- lg:TABLE breakpoint show icon -->
                <svg class="lg:block lg:w-6 xl:w-8 2xl:hidden md:hidden" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </article>

            <!-- ITEMS NO ACTUALIZADOS **** -->
            
            <!-- Comment -->
            <article class="group 2xl:h-56 m-8 p-4 rounded-lg shadow-lg dark:bg-gradient-to-br from-d-surface via-d-background to-d-background dark:text-d-soft-white hover:h-fit cursor-pointer transition ease-in duration-200 overflow-hidden">
                <div class="flex justify-between mb-2 xl:hidden xl:h-fit 2xl:flex">
                    <svg class="w-8 dark:text-d-muted" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="flex items-center">

                        <svg class="w-6 mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p>8.4</p>
                    </div>
                </div>
                <h3 class="mb-4 text-lg font-bold tracking-wider dark:text-d-soft-white xl:hidden 2xl:block">Spider Man</h3>
                <div class="xl:hidden 2xl:block">
                    <a href="#" class="flex items-center mb-4 group transition ease-in duration-150">
                        <li class="flex items-center group-hover:text-d-secondary transition ease-in duration-150">
                            <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/01.jpg" alt="userImage"></div>
                            <p class="pl-4">Sara</p>
                        </li>
                    </a>
                </div>
                <div class="transition-all ease-in duration-200 xl:hidden 2xl:block">
                    <p class="text-ellipsis overflow-hidden dark:text-d-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro doloremque similique repellendus ipsam debitis officiis temporibus odio nemo quam laborum deserunt recusandae voluptas natus, nostrum voluptate animi? Quidem, modi?</p>
                </div>

                <!-- xl:TABLE breakpoint show icon -->
                <svg class="xl:block xl:w-8 2xl:hidden" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </article>
            
            <!-- Comment -->
            <article class="group 2xl:h-56 m-8 p-4 rounded-lg shadow-lg dark:bg-gradient-to-br from-d-surface via-d-background to-d-background dark:text-d-soft-white hover:h-fit cursor-pointer transition ease-in duration-200 overflow-hidden">
                <div class="flex justify-between mb-2 xl:hidden xl:h-fit 2xl:flex">
                    <svg class="w-8 dark:text-d-muted" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="flex items-center">

                        <svg class="w-6 mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p>8.4</p>
                    </div>
                </div>
                <h3 class="mb-4 text-lg font-bold tracking-wider dark:text-d-soft-white xl:hidden 2xl:block">Spider Man</h3>
                <div class="xl:hidden 2xl:block">
                    <a href="#" class="flex items-center mb-4 group transition ease-in duration-150">
                        <li class="flex items-center group-hover:text-d-secondary transition ease-in duration-150">
                            <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/01.jpg" alt="userImage"></div>
                            <p class="pl-4">Sara</p>
                        </li>
                    </a>
                </div>
                <div class="transition-all ease-in duration-200 xl:hidden 2xl:block">
                    <p class="text-ellipsis overflow-hidden dark:text-d-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro doloremque similique repellendus ipsam debitis officiis temporibus odio nemo quam laborum deserunt recusandae voluptas natus, nostrum voluptate animi? Quidem, modi?</p>
                </div>

                <!-- xl:TABLE breakpoint show icon -->
                <svg class="xl:block xl:w-8 2xl:hidden" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </article>
            
            <!-- Comment -->
            <article class="group 2xl:h-56 m-8 p-4 rounded-lg shadow-lg dark:bg-gradient-to-br from-d-surface via-d-background to-d-background dark:text-d-soft-white hover:h-fit cursor-pointer transition ease-in duration-200 overflow-hidden">
                <div class="flex justify-between mb-2 xl:hidden xl:h-fit 2xl:flex">
                    <svg class="w-8 dark:text-d-muted" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="flex items-center">

                        <svg class="w-6 mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p>8.4</p>
                    </div>
                </div>
                <h3 class="mb-4 text-lg font-bold tracking-wider dark:text-d-soft-white xl:hidden 2xl:block">Spider Man</h3>
                <div class="xl:hidden 2xl:block">
                    <a href="#" class="flex items-center mb-4 group transition ease-in duration-150">
                        <li class="flex items-center group-hover:text-d-secondary transition ease-in duration-150">
                            <div class="w-10 h-10 rounded-full border-2 border-custom-white-text overflow-hidden flex justify-center items-center"><img src="../assets/Images/Profiles/01.jpg" alt="userImage"></div>
                            <p class="pl-4">Sara</p>
                        </li>
                    </a>
                </div>
                <div class="transition-all ease-in duration-200 xl:hidden 2xl:block">
                    <p class="text-ellipsis overflow-hidden dark:text-d-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro doloremque similique repellendus ipsam debitis officiis temporibus odio nemo quam laborum deserunt recusandae voluptas natus, nostrum voluptate animi? Quidem, modi?</p>
                </div>

                <!-- xl:TABLE breakpoint show icon -->
                <svg class="xl:block xl:w-8 2xl:hidden" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </article>

        </section>
    </aside>
</template>

<script>
import Logotype from './Logotype.vue';

export default {
  name: 'AsideMenu',
  components: {
    Logotype
  },
  methods: {
    goTop(){
        document.documentElement.scrollTop = 0
    },
    closeAsideMenu() {
        this.$emit('closeAsideMenu')
    }
  }
}  
</script>

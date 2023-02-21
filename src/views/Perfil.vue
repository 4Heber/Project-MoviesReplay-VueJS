<template>
    <main class="w-screen h-screen flex justify-center items-center dark:bg-gradient-to-br dark:from-d-surface dark:via-d-variant-1 dark:to-d-surface">
        <!-- EN PROGRESO -->
        <div class="flex flex-col items-center">
            <router-link :to="{name: 'home'}" class="dark:text-d-soft-white text-5xl mb-6">·Inicio</router-link>
            <h1 class="dark:text-d-soft-white text-3xl">Perfil de usuario en progreso.</h1>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Perfil',
}
</script>

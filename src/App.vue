<script>
import { RouterView, RouterLink } from 'vue-router'
import ToggleTheme from './components/ToggleTheme.vue'

export default {
  name: 'app',
  components: {
    ToggleTheme,
  }
}
</script>

<template>
    <!-- Navigation -->
    <!-- <div>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'login'}">Login</router-link></li>
        <li><router-link :to="{name: 'register'}">Register</router-link></li>
      </ul>
    </div> -->

    <!-- Blur filter container -->
    <!-- class="absolute z-30 top-2 right-32 w-[80%]" -->
    

    <!-- Cargar componentes dependiendo de la ruta actual -->
    <router-view />
</template>


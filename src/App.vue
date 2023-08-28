<script lang="ts">
import TheHero from '@/components/JobSearch/TheHero.vue'
import MainNav from '@/components/Navigation/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero
  }
}
</script>

<template>
  <main-nav />
  <the-hero />
</template>

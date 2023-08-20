<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileImage',
  data() {
    return {
      imageSrc:
        'https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png'
    }
  }
})
</script>

<template>
  <img :src="imageSrc" alt="avatar-image" class="h-8 w-8 rounded-3xl object-contain" />
</template>

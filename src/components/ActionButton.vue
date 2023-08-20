<script lang="ts" setup>
// Using composition API
import { ref } from 'vue'
const name = ref('Sign in')
</script>

<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-100 hover:shadow-blue"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import { ref } from 'vue'

const role = ref('')
const location = ref('')

function search(event: Event) {
  event.preventDefault()
  console.log(role.value, location.value)
}
</script>

<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-300">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <input
          name="role"
          type="text"
          v-model="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>

      <span
        class="flex items-center h-full border-l border-r border-brand-gray-300 bg-brand-gray-200 px-3"
        >in</span
      >
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label for="role" class="absolute left-0 -top-10">Where?</label>
        <input
          name="location"
          type="text"
          v-model="location"
          placeholder="Brussels"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>

    <action-button name="Search" type="secondary" class="rounded-r-3xl" @click="search" />
  </form>
</template>

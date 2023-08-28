<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import TextInput from '@/components/shared/TextInput.vue'
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
        <text-input
          placeholder="Software engineer"
          @handle-input="role = $event"
          :value="role"
          name="role"
        />
      </div>

      <span
        class="flex items-center h-full border-l border-r border-brand-gray-300 bg-brand-gray-200 px-3"
        >in</span
      >
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label for="role" class="absolute left-0 -top-10">Where?</label>
        <text-input
          placeholder="Brussels"
          @handle-input="location = $event"
          :value="location"
          name="location"
        />
      </div>
    </div>

    <action-button name="Search" type="secondary" class="rounded-r-3xl" @click="search" />
  </form>
</template>

<script setup lang="ts">
const { name, value } = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
// Define the emit function
const emit = defineEmits(['handleInput'])

function handleInput($event: Event) {
  emit('handleInput', ($event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :name="name"
    type="text"
    :value="value"
    @input="handleInput"
    placeholder="Brussels"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>

<script setup lang="ts">
type Props = {
  isJobMenuActive: boolean
}

const { isJobMenuActive } = defineProps<Props>()
</script>

<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-100 bg-white">
    <div class="flex items-center h-full px-8">
      <div v-if="isJobMenuActive">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-100">802</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

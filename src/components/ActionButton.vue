<script lang="ts" setup>
// Using composition API
interface Props {
  name: string
  variant: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  name: 'Go'
})
</script>

<template>
  <button :class="variant">
    {{ props.name }}
  </button>
</template>

<style lang="postcss" scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 hover:shadow-blue bg-brand-blue-100 text-white;
}
.secondary {
  @apply border-2 border-brand-blue-100 hover:bg-brand-blue-100 hover:text-white;
}
</style>

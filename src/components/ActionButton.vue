<script lang="ts" setup>
import { computed, type PropType } from 'vue'

// Using composition API
type Props = {
  name: string
  type: 'primary' | 'secondary'
  disabled?: boolean
}

// const props = withDefaults(defineProps<Props>(), {
//   type: 'primary',
//   name: 'Go',
//   disabled: false
// })

// Experimenting with validator and default values
const props = defineProps({
  type: {
    type: String as PropType<Props['type']>,
    default: 'primary',
    validator(value: Props['type']) {
      return ['primary', 'secondary'].includes(value)
    }
  },
  name: {
    type: String,
    default: 'Go'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isButtonDisabled = computed(() => props.disabled)
</script>

<template>
  <button :class="type" :disabled="isButtonDisabled">
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
  @apply bg-transparent text-brand-blue-100 hover:bg-brand-blue-200 hover:text-white;
}
</style>

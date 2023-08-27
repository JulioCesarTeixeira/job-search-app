<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const dynamicTextArray = ['Code', 'Design', 'Create', 'Build']
const interval = ref<NodeJS.Timer | null>(null)

const action = ref(dynamicTextArray[0])
function changeTitle() {
  interval.value = setInterval(() => {
    const currentIndex = dynamicTextArray.indexOf(action.value)
    const nextIndex = (currentIndex + 1) % dynamicTextArray.length
    const nextAction = dynamicTextArray[nextIndex]
    action.value = nextAction
  }, 3000)
}
function clearTitle() {
  if (interval.value) clearInterval(interval.value)
}

const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true
  }
})

onMounted(changeTitle)
onBeforeUnmount(clearTitle)
</script>

<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="[actionClasses]">{{ action }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Job Search</h2>
  </section>
</template>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #32a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>

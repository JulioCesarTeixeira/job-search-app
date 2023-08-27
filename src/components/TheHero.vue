<script setup lang="ts">
import TheHeadline from '@/components/TheHeadline.vue'
</script>

<template>
  <main>
    <section class="flex flex-col h-screen bg-yellow-100 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">1 col</div>
        <div class="col-span-5 col-start-2 border border-blue-700"><the-headline /></div>
        <div class="col-span-5 col-start-7 border border-blue-700">5 cols</div>
        <div class="col-start-12 col-span-1 border border-blue-700">1 col</div>
      </div>
    </section>
  </main>
</template>

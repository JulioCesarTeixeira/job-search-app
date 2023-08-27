<script setup lang="ts">
import TheHeadline from '@/components/TheHeadline.vue'
import JobSearchForm from './JobSearchForm.vue'
</script>

<template>
  <main>
    <section class="flex flex-col h-scree pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7"></div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

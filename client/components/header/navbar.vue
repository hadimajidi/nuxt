<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mt-5 dark:mt-5 mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <nav class="bg-white lg:flex gradient-border" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="item in props.breadcrumbs" :key="item.name" class="flex">
        <div class="flex items-center">
          <svg class="h-full w-6 flex-shrink-0 text-gray-200" preserveAspectRatio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="item.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
    </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  breadcrumbs: Array
})
// console.log("props--------",props.breadcrumbs)
// const breadcrumbs = [
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Project Nero', href: '#', current: true },
// ]
</script>
<style>

</style>
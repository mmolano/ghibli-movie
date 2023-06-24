<template>
   <div class="flex flex-col justify-center">
      <div class="relative">
         <div class="max-h-600 overflow-hidden">
            <img class="hidden sm:block w-full" src="../../assets/images/hero/ghibli.jpeg" alt="totoro image" />
         </div>
         <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
            <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">Ghibli's Movies</p>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
export default {
   name: 'HeroCard',
}
</script>
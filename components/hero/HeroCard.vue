<template>
   <section class="flex flex-col justify-center">
      <div class="relative">
         <img class="w-full" src="../../assets/images/hero/head.png" alt="totoro image" />
         <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
            <p class="hidden sm:block text-3xl font-semibold leading-9 text-white">Ghibli's Movies</p>
         </div>
      </div>
   </section>
</template>

<script lang="ts">
export default {
   name: 'HeroCard',
}
</script>
<template>
   <div class="w-300 aspect-w-3 m-4">
      <img :src="film.image" alt="film image" class="w-300 object-center h-400 mx-auto">
      <div>
         <h2 class="font-bold text-lg">{{ film.title }}</h2>
         <p>{{ convert(film.running_time) }}</p>
         <p>Released: {{ film.release_date }}</p>
         <nuxt-link class="p-2 my-2 bg-blue-600 w-full text-center block" :to="'/films/' + film.id">View Details</nuxt-link>
      </div>
   </div>
</template>

<script lang="ts">
import toHours from '../../lib/minutes-converter';

interface Film {
   title: string;
   release_date: string;
   running_time: string;
   id: string;
   image: string;
}

export default {
   name: 'CardMovie',
   props: {
      film: {
         type: Object as () => Film,
         required: true,
         default: (): Film => ({
            title: '',
            release_date: '',
            running_time: '',
            id: '',
            image: '',
         }),
      },
   },
   methods: {
      convert(minutes: string) {
         return toHours(minutes);
      }
   }
}
</script>

<style lang="css" scoped>
img {
   max-width: 25rem;
   min-width: 16rem;
}
</style>

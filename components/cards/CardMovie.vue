<template>
   <div @mouseover="hovered = true" @mouseleave="hovered = false" class="aspect-w-3 m-3 group group-hover:bg-opacity-60 transition duration-500">
      <nuxt-link :to="'/films/' + film.id">
         <div class="relative">
            <img :src="film.image" alt="film image" class="w-300 object-center h-400 mx-auto">
            <div class="flex justify-center items-center absolute top-0 h-full w-full text-center bg-semi-transparent opacity-0 group-hover:opacity-100 transition duration-500">
               <h3 class="p-3 bg-black">View More</h3>
            </div>
         </div>
         <div>
            <h2 class="font-bold text-xl">{{ film.title }}</h2>
            <p>Duration: {{ convert(film.running_time) }}</p>
            <p>Released: {{ film.release_date }}</p>
         </div>
      </nuxt-link>
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
   data() {
      return {
         hovered: false as boolean
      }
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
   min-width: 17rem;
}

.bg-semi-transparent {
   background-color: rgba(0, 0, 0, 0.454)
}
</style>

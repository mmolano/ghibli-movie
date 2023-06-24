<template>
   <section class="m-4">
      <NuxtLink class="button" :to="{ name: 'index' }"><font-awesome-icon :icon="['fas', 'arrow-left']" /> Back </NuxtLink>
      <LoadingData v-if="loading" />
      <div v-else class="flex flex-wrap">
         <div class="image-container">
            <img class="mx-auto my-3" :src="details.image" alt="movie image" />
         </div>
         <div class="description-container">
            <h2 class="font-bold text-4xl">{{ details.title }}</h2>
            <p class="my-2">{{ details.original_title }} - {{ details.original_title_romanised }}</p>
            <p class="my-2">{{ details.description }}</p>
            <p class="my-2"><span class="underline font-bold">Directed by:</span> {{ details.director }}</p>
            <p class="my-2"><span class="underline font-bold">Produced by:</span> {{ details.producer }}</p>
            <p class="my-2"><span class="underline font-bold">Released:</span> {{ details.release_date }}</p>
            <p class="my-2"><span class="underline font-bold">Duration:</span> {{ convert(details.running_time) }}</p>
            <h3 class="font-bold"><span class="underline">The Team:</span> ({{ filteredPeoples.length }})</h3>
            <div class="flex flex-wrap my-6">
               <PeopleCard v-for="people in filteredPeoples" :key="people.id" :people="people" />
            </div>
         </div>
      </div>
   </section>
</template>

<script lang="js">
import { mapActions, mapState } from 'vuex';
import toHours from '../../lib/minutes-converter';

export default {
   data() {
      return {
         details: {
            title: '',
            original_title: '',
            original_title_romanised: '',
            description: '',
            director: '',
            producer: '',
            release_date: '',
            running_time: '',
            image: '',
            people: []
         },
         loading: true
      }
   },
   computed: {
      ...mapState('people', ['peoples']),
      filteredPeoples: function () {
         return this.peoples.filter(people => {
            return this.details.people.includes(people.url);
         });
      },
   },
   mounted() {
      this.updateInformation()
      this.updatePeople()
   },
   methods: {
      ...mapActions('films', ['fetchFilm']),
      ...mapActions('people', ['fetchPeoples']),
      async updateInformation() {
         try {
            this.details = await this.fetchFilm(this.$route.params.id)
            setTimeout(() => {
               this.loading = false
            }, 1000)
         } catch (err) {
            console.log(err);
         }
      },
      async updatePeople() {
         try {
            await this.fetchPeoples()
         } catch (err) {
            console.log(err);
         }
      },
      convert(minutes) {
         return toHours(minutes);
      }
   },
}
</script>

<style lang="scss" scoped>
.image-container,
.description-container {
   width: 50%;
}

img {
   max-width: 400px;
}

@media screen and (max-width: 600px) {

   .image-container,
   .description-container {
      width: 100%;
   }
}
</style>

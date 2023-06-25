<template>
   <section class="m-4">
      <NuxtLink id="cypress-return-button" class="button" :to="{ name: 'index' }"><font-awesome-icon :icon="['fas', 'arrow-left']" /> Back </NuxtLink>
      <LoadingData v-if="loading" />
      <div v-else class="flex flex-wrap">
         <div class="image-container">
            <img class="w-300 my-3 mx-auto sm:w-full" :src="details.image" alt="movie image" />
         </div>
         <div class="description-container">
            <h2 class="font-bold text-4xl cypress-card-title">{{ details.title }}</h2>
            <p class="my-2">{{ details.original_title }} - {{ details.original_title_romanised }}</p>
            <p class="my-2">{{ details.description }}</p>
            <p class="my-2"><span class="font-bold text-xl">Directed by:</span></p>
            <p>{{ details.director }}</p>
            <p class="my-2"><span class="font-bold text-xl">Produced by:</span></p>
            <p>{{ details.producer }}</p>
            <p class="my-2"><span class="font-bold text-xl">Released:</span></p>
            <p>{{ details.release_date }}</p>
            <p class="my-2"><span class="font-bold text-xl">Duration:</span></p>
            <p>{{ convert(details.running_time) }}</p>
            <p class="my-2"><span class="font-bold text-xl">The Team: ({{ filteredPeoples.length }})</span></p>
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

@media screen and (max-width: 951px) {

   .image-container,
   .description-container {
      width: 100%;
   }
}
</style>

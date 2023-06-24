<template>
   <div v-if="details">
      <h1>{{ details.title }}</h1>
      <!-- Display other film data here -->
   </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

interface Details {
   title: string;
   original_title: string,
   original_title_romanized: string,
   description: string,
   director: string,
   producer: string,
   release_date: string,
   running_time: string,
   image: string,
   people: [],
}

export default {
   data(): { details: Details | null } {
      return {
         details: {
            title: '',
            original_title: '',
            original_title_romanized: '',
            description: '',
            director: '',
            producer: '',
            release_date: '',
            running_time: '',
            image: '',
            people: [],
         }
      }
   },
   methods: {
      ...mapActions('films', ['fetchFilm']),
      async updateInformation() {
         try {
            this.details = await this.fetchFilm(this.$route.params.id)
         } catch (err) {
            console.log(err);
         }
      }
   },
   mounted() {
      this.updateInformation()
   },
}
</script>


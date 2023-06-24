<template>
  <div class="">
    <!-- Put Header -->
    <!-- Replace by Movie Card -->
    <section class="flex flex-wrap justify-center">
      <CardMovie v-for="film in films" :key="film.id" :film="film" />
    </section>
    <!-- Put Footer -->
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'
import CardMovie from '~/components/cards/CardMovie'

export default {
  components: {
    CardMovie,
  },
  methods: {
    ...mapActions('films', ['fetchFilms']),
    async getFilms() {
      try {
        await this.fetchFilms()
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getFilms()
  },
  computed: {
   ...mapState('films', ['films']),
  },
}
</script>

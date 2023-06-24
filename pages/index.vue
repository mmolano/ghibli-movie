<template>
  <div>
    
    <SearchFilm v-model="search" />
    <LoadingData v-if="loading" />
    <section v-else class="flex flex-wrap justify-center">
      <CardMovie v-for="film in filteredFilms" :key="film.id" :film="film" />
    </section>
    <!-- TODO Put Pagination | Add error handler and remove console log on all files -->
  </div>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex'
import CardMovie from '~/components/cards/CardMovie'

export default {
  components: {
    CardMovie,
  },
  data() {
    return {
      search: '',
      loading: true
    }
  },
  mounted() {
    this.getFilms()
  },
  computed: {
    ...mapState('films', ['films']),
    filteredFilms: function () {
      if (!this.search) {
        return this.films
      }
      const filterValue = this.search.replace(/\s+/g, '').toLowerCase();

      const filter = (film) =>
        film.title.replace(/\s+/g, '').toLowerCase().includes(filterValue) ||
        film.release_date.replace(/\s+/g, '').toLowerCase().includes(filterValue)

      return this.films.filter(filter)
    },
  },
  methods: {
    ...mapActions('films', ['fetchFilms']),
    async getFilms() {
      try {
        await this.fetchFilms()
        setTimeout(() => {
          this.loading = false
        }, 300)
      } catch (err) {
        console.log(err);
      }
    }
  },
}
</script>

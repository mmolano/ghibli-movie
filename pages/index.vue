<template>
  <div class="m-3">
    <SearchFilm v-model="search" />
    <div class="text-center" v-if="search === ''">Showing {{ films.length }} movies</div>
    <div class="text-center" v-else>Found {{ paginatedFilms.length }} movies</div>
    <LoadingData v-if="loading" />
    <section v-else class="flex flex-wrap justify-center">
      <CardMovie v-for="film in paginatedFilms" :key="film.id" :film="film" />
    </section>
    <section id="cypress-pagination" v-if="!loading && paginatedFilms.length !== 0"
      class="mx-auto my-10 flex justify-around max-w-sm border-t-2 pt-4">
      <button id="cypress-prev-button" @click="previousPage" :disabled="currentPage === 1"><font-awesome-icon
          :icon="['fas', 'chevron-left']" />
        Previous</button>
      <p>{{ currentPage + '/' + maxPage }}</p>
      <button id="cypress-next-button" @click="nextPage" :disabled="currentPage === maxPage">Next <font-awesome-icon
          :icon="['fas', 'chevron-right']" /></button>
    </section>
  </div>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex'
import CardMovie from '~/components/cards/CardMovie'

export default {
  components: {
    CardMovie,
  },
  head() {
    return {
      title: 'Ghibli\'s movies',
      meta:
        [
          {
            hid: 'description',
            name: 'description',
            content: 'Get all Ghibli\'s movies informations',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'ghibli, movies, animation',
          }
        ]
    }
  },
  data() {
    return {
      search: '',
      loading: true,
      currentPage: 1,
      itemsPerPage: 10
    }
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
    paginatedFilms() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredFilms.slice(start, end);
    },
    maxPage() {
      return Math.ceil(this.filteredFilms.length / this.itemsPerPage);
    }
  },
  watch: {
    search() {
      this.currentPage = 1;
    }
  },
  mounted() {
    this.getFilms()
  },
  methods: {
    ...mapActions('films', ['fetchFilms']),
    async getFilms() {
      await this.fetchFilms()
      setTimeout(() => {
        this.loading = false
      }, 300)
    },
    nextPage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
}
</script>

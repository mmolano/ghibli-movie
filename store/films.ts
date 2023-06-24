import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
   films: [] as Array<{ [key: string]: any }>
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
   SET_FILMS(state, films) {
      if (films) {
         state.films = films.map((film: any) => {
            const { title, release_date, running_time, image, id } = film;
            return { title, release_date, running_time, image, id };
         })
      } else {
         state.films = []
      }
   }
}

export const actions: ActionTree<RootState, RootState> = {
   async fetchFilms({ commit }) {
      try {
         const response = await this.$axios.$get('films')
         commit('SET_FILMS', response)
      } catch (e: any) {
         // Create mixin error
         console.log(e.message);
      }
   },
   async fetchFilm(context, id) {
      try {
         const response = await this.$axios.$get(`films/${id}`)
         return response
      } catch (e: any) {
         console.log(e.message);
      }
   },
}

import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
   films: [] as Array<{ [key: string]: any }>
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
   SET_FILMS(state, films) {
      if (films) {
         state.films = films
      } else {
         state.films = []
      }
   }
}

export const actions: ActionTree<RootState, RootState> = {
   async fetchFilms({ commit }) {
      try {
         const response = await this.$axios.$get('films?fields=title,release_date,running_time,id,image')
         commit('SET_FILMS', response)
      } catch (e: any) {
         this.$toast.show({
            type: 'danger',
            title: 'Error',
            message: 'Could not load films',
         })
         throw e
      }
   },
   async fetchFilm(context, id) {
      try {
         return await this.$axios.$get(`films/${id}`)
      } catch (e: any) {
         this.$toast.show({
            type: 'danger',
            title: 'Error',
            message: 'Could not load film informations',
         })
         throw e
      }
   },
}

import { ActionTree, MutationTree } from 'vuex'

interface PeopleIf {
   id: string
   name: string
   url: string
}

export const state = () => ({
   peoples: [] as Array<{ [key: string]: PeopleIf }>
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
   SET_PEOPLES(state, peoples) {
      if (peoples) {
         state.peoples = peoples
      } else {
         state.peoples = []
      }
   }
}

export const actions: ActionTree<RootState, RootState> = {
   async fetchPeoples({ commit }) {
      try {
         const response = await this.$axios.$get('people?fields=name,id,url')
         commit('SET_PEOPLES', response)
      } catch (e: any) {
         this.$toast.show({
            type: 'danger',
            title: 'Error',
            message: 'There was an error loading some data, please contact the administrator.',
         })
      }
   },
}

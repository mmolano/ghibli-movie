import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vuex/types/index' {
   interface ActionContext<S, R> {
      $axios: NuxtAxiosInstance;
   }
}

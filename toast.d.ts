import { Store } from 'vuex';
import ToastInterface from "nuxt-tailvue/types/toast";

declare module 'vuex/types/index' {
   interface Store<S> {
      $toast: ToastInterface;
   }
}

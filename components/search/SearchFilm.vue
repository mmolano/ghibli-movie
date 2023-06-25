<template>
   <section class="m-4">
      <div>
         <label class="m-2 block" for="search">Search a movie: </label>
         <input class="p-3 w-300" id="search" v-model="model" type="search" placeholder="Name, date" />
      </div>
   </section>
</template>

<script>
export default {
   name: "SearchFilm",
   props: [
      'value'
   ],
   computed: {
      model: {
         get() {
            return this.value
         },
         set(val) {
            this.$emit('input', val)
         }
      }
   },
}
</script>

<style lang="css">
 input {
   background-color: #20253c;
   color: white;
 }
</style>
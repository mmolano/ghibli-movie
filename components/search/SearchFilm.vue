<template>
   <div class="m-4">
      <div>
         <label for="search"></label>
         <input class="p-3 w-300" id="search" v-model="model" type="search" placeholder="i'm looking for..." />
      </div>
   </div>
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
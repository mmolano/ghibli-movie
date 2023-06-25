<template>
   <div class="w-1/2 my-2 flex flex-wrap flex-col sm:w-1/3 items-center m-auto text-center">
      <font-awesome-icon :icon="['fas', 'user']" />
      {{ people.name }}
   </div>
</template>
<script lang="ts">

type genderType = "Male" | "Female" | ""

interface People {
   id: string
   name: string
   gender: genderType
}

export default {
   name: 'PeopleCard',
   props: {
      people: {
         type: Object as () => People,
         required: true,
         default: (): People => ({
            id: '',
            name: '',
            gender: ''
         }),
      }
   }
}
</script>
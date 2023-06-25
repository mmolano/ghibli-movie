<template>
   <main class="mx-auto mb-4">
      <HeroCard />
      <Nuxt keep-alive />
   </main>
</template>

<script>
export default {

}
</script>

<style lang="css">
body {
   background-color: #151720;
   color: #ffff;
}

main {
   max-width: 1580px;
}

@media screen and (max-width: 768px) {
   main {
      margin-top: 0 !important;
   }
}
</style>


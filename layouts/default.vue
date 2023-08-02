<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<template>
  <v-app class="app">
    <v-main>
      <v-container d-flex>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getMonth() }} / {{ new Date().getDate() }} / {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
@import '~@/assets/style/main.scss';
</style>

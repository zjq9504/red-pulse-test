<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="router-link" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 1,
          text: 'Input',
          page: '/Input'
        },
        {
          id: 2,
          text: 'Display',
          page: '/Display'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link {
  margin: 0 8px;
}
</style>

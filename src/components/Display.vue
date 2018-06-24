<template>
  <div>
    <h3>Displays the value updated from Input tab</h3>
    <div class="value-display">Value: {{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'Display',
  data () {
    return {
      value: this.$store.state.value
    }
  }
}
</script>

<style scoped>
</style>

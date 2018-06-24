<template>
  <div>
    <h3>Enter inputs and click on Confirm button</h3>
    <div class="input-row">
      <input v-model="input1">
      <span class="value-display">Value: {{ input1 }}</span>
    </div>
    <div class="input-row">
      <input v-model="input2">
      <span class="value-display">Value: {{ input2 }}</span>
    </div>
    <button @click="onClickSave" class="confirm-button">Save</button>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      input1: this.$store.state.input1,
      input2: this.$store.state.input2
    }
  },
  methods: {
    onClickSave () {
      const body = {
        input1: this.input1,
        input2: this.input2,
        value: this.input1 + ' ' + this.input2
      }
      this.$store.commit('updateValue', body)
    }
  }
}
</script>

<style scoped>
.input-row + .input-row {
  margin: 8px 0 0 0;
}
.value-display {
  margin: 0 0 0 8px;
}
.confirm-button {
  margin: 10px 0 0 0;
}
</style>

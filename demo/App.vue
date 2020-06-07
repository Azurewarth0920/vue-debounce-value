<template>
  <div class="app">
    <input type="text" v-model="model" v-debounce-value="debouncedValue" />
    <p>v-model: {{ model }}</p>
    <p>v-debounce-value: {{ debouncedValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      debouncedValue: ''
    }
  }
}
</script>

<template>
  <div class="app">
    <input type="text" v-model="model" v-debounce-value="debounceModel" />
    <p>v-model: {{ model }}</p>
    <p>v-debounce-value: {{ debounceModel }}</p>
    <input type="text" v-model="debounceModel" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      debounceModel: 'aaa'
    }
  },
  methods: {
    plusModel() {
      this.model = this.model + 'd'
    }
  }
}
</script>

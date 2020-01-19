<template>
<div class="app">
  <input
    type="text"
    v-model="model"
    v-debounce-model="debounceModel"
  >
  <p>v-model: {{ model }}</p>
  <p>v-debounce-model: {{ debounceModel }}</p>
  <input
    type="text"
    v-model="model1"
    v-debounce-model="debounceModel1"
  >
  <p>v-model: {{ model1 }}</p>
  <p>v-debounce-model: {{ debounceModel1 }}</p>
  <button @click="plusModel"> + 1</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      model: '',
      debounceModel: '',
      model1: '',
      debounceModel1: ''
    }
  },
  methods: {
    plusModel () {
      this.model = this.model + 'd'
    }
  }
}
</script>

<template>
  <div class="app">
    <input type="text" v-model="model" v-debounce="debounceModel" v-if="flag" />
    <p>v-model: {{ model }}</p>
    <p>v-debounce-model: {{ debounceModel }}</p>
    <input type="text" v-model="debounceModel" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      debounceModel: '',
      flag: true
    }
  },
  methods: {
    plusModel() {
      this.model = this.model + 'd'
    }
  },
  mounted() {
    setTimeout(() => {
      this.flag = false
    }, 5000)
  }
}
</script>

# vue-debounce-value

an vue directive plugin of getting debouncing value or throttling value of input element.

## installation

```
$ npm install --save vue-debounce-value
# or
$ yarn add vue-debounce-value
```

## config

1.  Install the plugin to Vue.js constructor.

```JavaScript
import Vue from 'vue'
import VueDebounceValue from 'vue-debounce-value'

Vue.use(VueDebounceValue)

new Vue({.....
```

and you can also pass initial options to vue debounce value.

```JavaScript

Vue.use(VueDebounceValue, {
  delay: 400,
  useThrottle: true
})

```

## usage

```HTML
<template>
  <input type="text" v-debounce-value="debouncedValue" />
</template>

<script>
export default {
  data() {
    return {
      debouncedValue: ''
    }
  },
</script>
```

when inputting, the debounced(or throttled) will be save to the expression (eg.debouncedValue)

or you can directly pass the config to the directive

```HTML
<template>
  <input type="text" v-debounce-value="{
    target: 'debouncedValue',
    delay: 1000,
    useThrottle: true
  }" />
</template>
```

## options

* delay - Number, optional, default: `500`

The delay of assignment after the value is not change.

* useThrottle - Boolean, optional, default: `false`

Use the throttle mode instead of debouncing.
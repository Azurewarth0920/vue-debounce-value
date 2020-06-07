export const parseOptions = (binding, defaults = {}) => {
  if (typeof binding.value === 'string') {
    return {
      target: binding.value,
      ...defaults
    }
  } else {
    const { target, delay, useThrottle } = binding.value
    if (!target) {
      throw 'a reactive property should be provided.'
    }

    return {
      target,
      delay: delay === undefined ? defaults.delay : delay,
      useThrottle:
        useThrottle === undefined ? defaults.useThrottle : useThrottle
    }
  }
}

import { DirectiveOptions, PluginObject } from 'vue'

export interface DebounceOptions {
  target: string
  useThrottle: boolean
  delay: number
}

declare const _default: PluginObject<DebounceOptions>

export default _default

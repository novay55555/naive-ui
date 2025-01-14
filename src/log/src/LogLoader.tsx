import { h, defineComponent } from 'vue'
import { NBaseLoading } from '../../_internal'
import { default as useLocale } from '../../_mixins/use-locale'

export default defineComponent({
  name: 'LogLoader',
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup () {
    return {
      locale: useLocale('Log').localeRef
    }
  },
  render () {
    const { clsPrefix } = this
    return (
      <div class={`${clsPrefix}-log-loader`}>
        <NBaseLoading clsPrefix={clsPrefix} strokeWidth={24} scale={0.85} />
        <span class={`${clsPrefix}-log-loader__content`}>
          {this.locale.loading}
        </span>
      </div>
    )
  }
})

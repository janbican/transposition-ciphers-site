import { mount } from '@vue/test-utils'
import Convert from '@/components/columnar/Convert'

const localVue = global.localVue

const factory = (values = {}) => {
  return mount(Convert, {
    localVue,
    data() {
      return {
        ...values
      }
    }
  })
}

describe('ColumnarConvert', () => {
  it('hides convert area if keyValue is empty', () => {
    const wrapper = factory()

    expect(wrapper.find('.convert-area').element).not.toBeVisible()
  })

  it('shows convert area if keyValue is valid', () => {
    const wrapper = factory({ keyValue: 'keyword' })

    expect(wrapper.find('.convert-area').element).toBeVisible()
  })
})

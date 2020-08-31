import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import ColumnarCipher from '@/mixins/ColumnarCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [ColumnarCipher]
})

const wrapper = shallowMount(component)

describe('Columnar', () => {
  it('encrypts message correctly', () => {
    expect(
      wrapper.vm.columnarEncrypt([3, 0, 1, 4, 2], 'thisistranspositioncipher')
    ).toBe('HTPIPIROOHINICRTSSTISASNE')

    expect(
      wrapper.vm.columnarEncrypt([4, 2, 1, 0, 5, 3], 'enigmaisciphermachine')
    ).toBe('GIAICMENSRNAHHEIEIMPC')

    expect(wrapper.vm.columnarEncrypt([1, 0], 'wewillattackinthemorning')).toBe(
      'EILTAKNHMRIGWWLATCITEONN'
    )
  })

  it('decrypt message correctly', () => {
    expect(
      wrapper.vm.columnarDecrypt([3, 0, 1, 4, 2], 'HTPIPIROOHINICRTSSTISASNE')
    ).toBe('thisistranspositioncipher')

    expect(
      wrapper.vm.columnarDecrypt([4, 2, 1, 0, 5, 3], 'GIAICMENSRNAHHEIEIMPC')
    ).toBe('enigmaisciphermachine')

    expect(wrapper.vm.columnarDecrypt([1, 0], 'EILTAKNHMRIGWWLATCITEONN')).toBe(
      'wewillattackinthemorning'
    )
  })
})

import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import MyszkowskiCipher from '@/mixins/MyszkowskiCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [MyszkowskiCipher]
})

const wrapper = shallowMount(component)

describe('Myszkowski', () => {
  it('encrypts message correctly', () => {
    expect(
      wrapper.vm.myszkowskiEncrypt(
        [3, 2, 1, 0, 3, 2],
        'thisismyszkowskitransposition'
      )
    ).toBe('SZIPOISKSIHSYOSRNSTTIMKWTAOIN')

    expect(
      wrapper.vm.myszkowskiEncrypt([4, 2, 1, 0, 5, 3], 'enigmaisciphermachine')
    ).toBe('GIAICMENSRNAHHEIEIMPC')

    expect(
      wrapper.vm.myszkowskiEncrypt([0, 0, 1, 0, 1], 'enigmaisciphermachine')
    ).toBe('ENGAICPHRACIEIMSIEMHN')

    expect(
      wrapper.vm.myszkowskiEncrypt([2, 0, 1, 0, 2], 'wewillattackinthemorning')
    ).toBe('EIATKNEOIGWTIMNWLLACTHRN')
  })

  it('decrypts message correctly', () => {
    expect(
      wrapper.vm.myszkowskiDecrypt('tomato', 'SZIPOISKSIHSYOSRNSTTIMKWTAOIN')
    ).toBe('thisismyszkowskitransposition')

    expect(
      wrapper.vm.myszkowskiDecrypt('ecbafd', 'GIAICMENSRNAHHEIEIMPC')
    ).toBe('enigmaisciphermachine')

    expect(wrapper.vm.myszkowskiDecrypt('aabab', 'ENGAICPHRACIEIMSIEMHN')).toBe(
      'enigmaisciphermachine'
    )

    expect(
      wrapper.vm.myszkowskiDecrypt('tenet', 'EIATKNEOIGWTIMNWLLACTHRN')
    ).toBe('wewillattackinthemorning')
  })
})

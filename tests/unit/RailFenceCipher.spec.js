import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import RailFenceCipher from '@/mixins/RailFenceCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [RailFenceCipher]
})

const wrapper = shallowMount(component)

describe('RailFence', () => {
  it('encrypts message correctly', () => {
    expect(wrapper.vm.railFenceEncrypt(3, 'wearediscoveredfleeatonce')).toBe(
      'WECRLTEERDSOEEFEAOCAIVDEN'
    )

    expect(wrapper.vm.railFenceEncrypt(5, 'enigmaisciphermachine')).toBe(
      'ECCNSIAHIIPMIGAHRNMEE'
    )

    expect(wrapper.vm.railFenceEncrypt(4, 'wewillattackinthemorning')).toBe(
      'WAIOELTKNMRGWLTCTENNIAHI'
    )
  })

  it('decrypt message correctly', () => {
    expect(wrapper.vm.railFenceDecrypt(3, 'WECRLTEERDSOEEFEAOCAIVDEN')).toBe(
      'wearediscoveredfleeatonce'
    )

    expect(wrapper.vm.railFenceDecrypt(5, 'ECCNSIAHIIPMIGAHRNMEE')).toBe(
      'enigmaisciphermachine'
    )

    expect(wrapper.vm.railFenceDecrypt(4, 'WAIOELTKNMRGWLTCTENNIAHI')).toBe(
      'wewillattackinthemorning'
    )
  })
})

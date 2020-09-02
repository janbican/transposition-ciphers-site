import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import RouteCipher from '@/mixins/RouteCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [RouteCipher]
})

const wrapper = shallowMount(component)

describe('Route', () => {
  it('encryptVerticalFromTopLeft correctly', () => {
    expect(
      wrapper.vm.encryptVerticalFromTopLeft(5, 'enigmaisciphermachinexxxx')
    ).toBe('EAPAEXCHINISEHXXIRCGMIMNX')
  })

  it('decryptVerticalFromTopLeft correctly', () => {
    expect(
      wrapper.vm.decryptVerticalFromTopLeft(5, 'EAPAEXCHINISEHXXIRCGMIMNX')
    ).toBe('enigmaisciphermachinexxxx')
  })

  it('encryptVerticalFromTopRight correctly', () => {
    expect(
      wrapper.vm.encryptVerticalFromTopRight(4, 'wewillattackinthemorning')
    ).toBe('ITKHRGNOTCAWELANMINEITLW')
  })

  it('encryptVerticalFromTopRight correctly second', () => {
    expect(wrapper.vm.encryptVerticalFromTopRight(3, 'wewillattack')).toBe(
      'WLTKCTLEWIAA'
    )
  })

  it('decryptVerticalFromTopRight correctly', () => {
    expect(
      wrapper.vm.decryptVerticalFromTopRight(4, 'ITKHRGNOTCAWELANMINEITLW')
    ).toBe('wewillattackinthemorning')
  })

  it('encryptVerticalFromBottomLeft correctly', () => {
    expect(
      wrapper.vm.encryptVerticalFromBottomLeft(6, 'cryptographyisfunx')
    ).toBe('IGCRRSFAYPPUNHTOYX')
  })

  it('decryptVerticalFromBottomLeft correctly', () => {
    expect(
      wrapper.vm.decryptVerticalFromBottomLeft(6, 'IGCRRSFAYPPUNHTOYX')
    ).toBe('cryptographyisfunx')
  })

  it('encryptVerticalFromBottomRight correctly', () => {
    expect(wrapper.vm.encryptVerticalFromBottomRight(3, 'thunderstorm')).toBe(
      'MTEUHDSRORNT'
    )
  })

  it('decryptVerticalFromBottomRight correctly', () => {
    expect(wrapper.vm.decryptVerticalFromBottomRight(3, 'MTEUHDSRORNT')).toBe(
      'thunderstorm'
    )
  })
})

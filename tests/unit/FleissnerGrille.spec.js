import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import FleissnerGrille from '@/mixins/FleissnerGrille'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [FleissnerGrille]
})

const wrapper = shallowMount(component)

describe('Fleissner', () => {
  it('encrypts message correctly', () => {
    let grille = [
      [1, 2, 1, 2],
      [2, 1, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 1, 2]
    ]

    expect(wrapper.vm.fleissnerEncrypt(grille, 'transpositionxxx')).toBe(
      'TIRSNAPXOXTSXINO'
    )

    grille = [
      [2, 1, 2, 1, 2],
      [2, 2, 2, 2, 2],
      [1, 1, 2, 2, 2],
      [2, 2, 2, 1, 2],
      [2, 2, 2, 2, 1]
    ]

    expect(
      wrapper.vm.fleissnerEncrypt(grille, 'wewillattackinthemorning')
    ).toBe('IWAEORNTNTWITHIANLCKEGML')
  })

  it('encrypts message correctly', () => {
    let grille = [
      [1, 2, 1, 2],
      [2, 1, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 1, 2]
    ]

    expect(wrapper.vm.fleissnerDecrypt(grille, 'TIRSNAPXOXTSXINO')).toBe(
      'transpositionxxx'
    )

    grille = [
      [2, 1, 2, 1, 2],
      [2, 2, 2, 2, 2],
      [1, 1, 2, 2, 2],
      [2, 2, 2, 1, 2],
      [2, 2, 2, 2, 1]
    ]

    expect(
      wrapper.vm.fleissnerDecrypt(grille, 'IWAEORNTNTWITHIANLCKEGML')
    ).toBe('wewillattackinthemorning')
  })
})

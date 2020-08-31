import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import KeyPermutations from '@/mixins/KeyPermutations'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [KeyPermutations]
})

const wrapper = shallowMount(component)

describe('KeyPermutations', () => {
  it('basic permutation works correctly', () => {
    expect(wrapper.vm.getKeyPermutation('keyword')).toEqual([
      2,
      1,
      6,
      5,
      3,
      4,
      0
    ])

    expect(wrapper.vm.getKeyPermutation('helloworld')).toEqual([
      2,
      1,
      3,
      4,
      6,
      9,
      7,
      8,
      5,
      0
    ])

    expect(wrapper.vm.getKeyPermutation('abcdef')).toEqual([0, 1, 2, 3, 4, 5])

    expect(wrapper.vm.getKeyPermutation('fedcba')).toEqual([5, 4, 3, 2, 1, 0])
  })

  it('permutations with repeated letters works correctly', () => {
    expect(wrapper.vm.getKeyPermutationRepeated('keyword')).toEqual([
      2,
      1,
      6,
      5,
      3,
      4,
      0
    ])

    expect(wrapper.vm.getKeyPermutationRepeated('tomato')).toEqual([
      3,
      2,
      1,
      0,
      3,
      2
    ])

    expect(wrapper.vm.getKeyPermutationRepeated('aacbb')).toEqual([
      0,
      0,
      2,
      1,
      1
    ])

    expect(wrapper.vm.getKeyPermutationRepeated('alobalova')).toEqual([
      0,
      2,
      3,
      1,
      0,
      2,
      3,
      4,
      0
    ])
  })
})

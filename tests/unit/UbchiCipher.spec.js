import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import UbchiCipher from '@/mixins/UbchiCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [UbchiCipher]
})

const wrapper = shallowMount(component)

describe('Ubchi', () => {
  it('encrypts message correctly', () => {
    let result = wrapper.vm.ubchiEncrypt(
      [1, 5, 7, 9, 11, 3, 0, 6, 8, 2, 4, 10],
      2,
      'thisistranspositioncipherusedbygermanyinworldwartwo'
    )

    expect(result[1]).toBe(
      'RHINTWYIINHIAOSLEPSORNSWEDNMIPYORDWTASERBCSZRUAITOGTZ'
    )

    result = wrapper.vm.ubchiEncrypt(
      [3, 1, 4, 0, 2, 5],
      2,
      'enigmaisciphermachine'
    )

    expect(result[0]).toBe('giansrnmpceieiicmeahhzz')
    expect(result[1]).toBe('NCCZIMIHSEMZGNEAAPIHRIE')

    result = wrapper.vm.ubchiEncrypt(
      [6, 7, 0, 4, 1, 5, 3, 2],
      3,
      'wewillattackinthemorningprepare'
    )

    expect(result[0]).toBe('wcoelinathgatneikrplnirwtepeamrzzz')
    expect(result[1]).toBe('OGPPLTNAAIWZNERREALEINIMWTKTZCHREZ')
  })

  it('decrypts message correctly', () => {
    let result = wrapper.vm.ubchiDecrypt(
      [1, 5, 7, 9, 11, 3, 0, 6, 8, 2, 4, 10],
      2,
      'RHINTWYIINHIAOSLEPSORNSWEDNMIPYORDWTASERBCSZRUAITOGTZ'
    )

    expect(result[1]).toBe(
      'thisistranspositioncipherusedbygermanyinworldwartwo'
    )

    result = wrapper.vm.ubchiDecrypt(
      [3, 1, 4, 0, 2, 5],
      2,
      'NCCZIMIHSEMZGNEAAPIHRIE'
    )

    expect(result[0]).toBe('giansrnmpceieiicmeahhzz')
    expect(result[1]).toBe('enigmaisciphermachine')

    result = wrapper.vm.ubchiDecrypt(
      [6, 7, 0, 4, 1, 5, 3, 2],
      3,
      'OGPPLTNAAIWZNERREALEINIMWTKTZCHREZ'
    )

    expect(result[0]).toBe('wcoelinathgatneikrplnirwtepeamrzzz')
    expect(result[1]).toBe('wewillattackinthemorningprepare')
  })
})

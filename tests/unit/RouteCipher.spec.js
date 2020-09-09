import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import RouteCipher from '@/mixins/RouteCipher'

const component = Vue.component('MockComponent', {
  template: '<div></div>',
  mixins: [RouteCipher]
})

const wrapper = shallowMount(component)

describe('Route', () => {
  // Vertical
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

  //Horizontal
  it('encryptHorizontalFromTopLeft correctly', () => {
    expect(
      wrapper.vm.encryptHorizontalFromTopLeft(5, 'thisistranspositionx')
    ).toBe('THISINARTSSPOSIXNOIT')
  })

  it('decryptHorizontalFromTopLeft correctly', () => {
    expect(
      wrapper.vm.decryptHorizontalFromTopLeft(5, 'THISINARTSSPOSIXNOIT')
    ).toBe('thisistranspositionx')
  })

  it('encryptHorizontalFromTopRight correctly', () => {
    expect(
      wrapper.vm.encryptHorizontalFromTopRight(
        6,
        'transpositionisamethodofencryptionxx'
      )
    ).toBe('PSNARTOSITIOEMASINTHODOFPYRCNETIONXX')
  })

  it('decryptHorizontalFromTopRight correctly', () => {
    expect(
      wrapper.vm.decryptHorizontalFromTopRight(
        6,
        'PSNARTOSITIOEMASINTHODOFPYRCNETIONXX'
      )
    ).toBe('transpositionisamethodofencryptionxx')
  })

  it('encryptHorizontalFromBottomLeft correctly', () => {
    expect(
      wrapper.vm.encryptHorizontalFromBottomLeft(5, 'thewinteriscomingxxx')
    ).toBe('NGXXXIMOCSNTERIIWEHT')
  })

  it('decryptHorizontalFromBottomLeft correctly', () => {
    expect(
      wrapper.vm.decryptHorizontalFromBottomLeft(5, 'NGXXXIMOCSNTERIIWEHT')
    ).toBe('thewinteriscomingxxx')
  })

  it('encryptHorizontalFromBottomRight correctly', () => {
    expect(
      wrapper.vm.encryptHorizontalFromBottomRight(
        4,
        'neverbendyourheadholdithighx'
      )
    ).toBe('XHGIDITHLOHDRHEAUOYDRBENEVEN')
  })

  it('decryptHorizontalFromBottomRight correctly', () => {
    expect(
      wrapper.vm.decryptHorizontalFromBottomRight(
        4,
        'XHGIDITHLOHDRHEAUOYDRBENEVEN'
      )
    ).toBe('neverbendyourheadholdithighx')
  })

  it('encryptSpiralClockwiseInwards correctly', () => {
    expect(
      wrapper.vm.encryptSpiralClockwiseInwards(4, 'thisistranspositionx')
    ).toBe('SRPTXNOIOAITHITSISNS')

    expect(
      wrapper.vm.encryptSpiralClockwiseInwards(5, 'thisistranspositionx')
    ).toBe('INIXNOITSSTHISASOPTR')
  })

  it('decryptSpiralClockwiseInwards correctly', () => {
    expect(
      wrapper.vm.decryptSpiralClockwiseInwards(4, 'SRPTXNOIOAITHITSISNS')
    ).toBe('thisistranspositionx')

    expect(
      wrapper.vm.decryptSpiralClockwiseInwards(5, 'INIXNOITSSTHISASOPTR')
    ).toBe('thisistranspositionx')
  })

  it('encryptSpiralAntiClockwiseOutwards correctly', () => {
    expect(
      wrapper.vm.encryptSpiralAntiClockwiseOutwards(5, 'thisistranspositionx')
    ).toBe('RTPOSASIHTSSTIONXINI')

    expect(
      wrapper.vm.encryptSpiralAntiClockwiseOutwards(
        4,
        'enigmaisciphermachinexxx'
      )
    ).toBe('AIRHIMPIINEMCECEXXXNAHSG')
  })

  it('decryptSpiralAntiClockwiseOutwards correctly', () => {
    expect(
      wrapper.vm.decryptSpiralAntiClockwiseOutwards(5, 'RTPOSASIHTSSTIONXINI')
    ).toBe('thisistranspositionx')

    expect(
      wrapper.vm.decryptSpiralAntiClockwiseOutwards(
        4,
        'AIRHIMPIINEMCECEXXXNAHSG'
      )
    ).toBe('enigmaisciphermachinexxx')
  })

  it('encryptSpiralAntiClockwiseInwards correctly', () => {
    expect(
      wrapper.vm.encryptSpiralAntiClockwiseInwards(
        6,
        'relaxingsoundsofrainxxxx'
      )
    ).toBe('IXALERNDINXXXXANUOSGSOFR')

    expect(
      wrapper.vm.encryptSpiralAntiClockwiseInwards(4, 'playcodeonlineeditor')
    ).toBe('YALPCONITORDIEDONEEL')
  })

  it('decryptSpiralAntiClockwiseInwards correctly', () => {
    expect(
      wrapper.vm.decryptSpiralAntiClockwiseInwards(
        6,
        'IXALERNDINXXXXANUOSGSOFR'
      )
    ).toBe('relaxingsoundsofrainxxxx')

    expect(
      wrapper.vm.decryptSpiralAntiClockwiseInwards(4, 'YALPCONITORDIEDONEEL')
    ).toBe('playcodeonlineeditor')
  })

  it('encryptSpiralClockwiseOutwards correctly', () => {
    expect(
      wrapper.vm.encryptSpiralClockwiseOutwards(
        5,
        'javascriptisaprogramminglanguagexxx'
      )
    ).toBe('NRAPAGUGNIGSRIPTRMLAXXXEGAMOICJAVAS')

    expect(wrapper.vm.encryptSpiralClockwiseOutwards(4, 'javascriptxx')).toBe(
      'CRIXXTPSJAVA'
    )
  })

  it('decryptSpiralClockwiseOutwards correctly', () => {
    expect(
      wrapper.vm.decryptSpiralClockwiseOutwards(
        5,
        'NRAPAGUGNIGSRIPTRMLAXXXEGAMOICJAVAS'
      )
    ).toBe('javascriptisaprogramminglanguagexxx')

    expect(wrapper.vm.decryptSpiralClockwiseOutwards(4, 'CRIXXTPSJAVA')).toBe(
      'javascriptxx'
    )
  })
})

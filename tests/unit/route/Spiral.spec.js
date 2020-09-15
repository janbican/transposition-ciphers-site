import {
  encryptClockwiseInwards,
  decryptClockwiseInwards,
  encryptAntiClockwiseOutwards,
  decryptAntiClockwiseOutwards,
  encryptAntiClockwiseInwards,
  decryptAntiClockwiseInwards,
  encryptClockwiseOutwards,
  decryptClockwiseOutwards
} from '@/ciphers/route/Spiral'

describe('Spiral RouteCipher', () => {
  it('encrypts clockwise inwards', () => {
    expect(encryptClockwiseInwards(4, 'thisistranspositionx')).toBe(
      'SRPTXNOIOAITHITSISNS'
    )
    expect(encryptClockwiseInwards(5, 'thisistranspositionx')).toBe(
      'INIXNOITSSTHISASOPTR'
    )
  })

  it('decrypts clockwise inwards', () => {
    expect(decryptClockwiseInwards(4, 'SRPTXNOIOAITHITSISNS')).toBe(
      'thisistranspositionx'
    )
    expect(decryptClockwiseInwards(5, 'INIXNOITSSTHISASOPTR')).toBe(
      'thisistranspositionx'
    )
  })

  it('encrypts anticlockwise outwards', () => {
    expect(encryptAntiClockwiseOutwards(5, 'thisistranspositionx')).toBe(
      'RTPOSASIHTSSTIONXINI'
    )
    expect(encryptAntiClockwiseOutwards(4, 'enigmaisciphermachinexxx')).toBe(
      'AIRHIMPIINEMCECEXXXNAHSG'
    )
    expect(encryptAntiClockwiseOutwards(3, 'enigmamachinexx')).toBe(
      'IAMNEGMHEXXNCAI'
    )
  })

  it('decrypts anticlockwise outwards', () => {
    expect(decryptAntiClockwiseOutwards(5, 'RTPOSASIHTSSTIONXINI')).toBe(
      'thisistranspositionx'
    )
    expect(decryptAntiClockwiseOutwards(4, 'AIRHIMPIINEMCECEXXXNAHSG')).toBe(
      'enigmaisciphermachinexxx'
    )
    expect(decryptAntiClockwiseOutwards(3, 'IAMNEGMHEXXNCAI')).toBe(
      'enigmamachinexx'
    )
  })

  it('encrypts anticlockwise inwards', () => {
    expect(encryptAntiClockwiseInwards(6, 'relaxingsoundsofrainxxxx')).toBe(
      'IXALERNDINXXXXANUOSGSOFR'
    )
    expect(encryptAntiClockwiseInwards(4, 'playcodeonlineeditor')).toBe(
      'YALPCONITORDIEDONEEL'
    )
    expect(encryptAntiClockwiseInwards(3, 'routecipherx')).toBe('UORTIERXHCEP')
  })

  it('decrypts anticlockwise inwards', () => {
    expect(decryptAntiClockwiseInwards(6, 'IXALERNDINXXXXANUOSGSOFR')).toBe(
      'relaxingsoundsofrainxxxx'
    )
    expect(decryptAntiClockwiseInwards(4, 'YALPCONITORDIEDONEEL')).toBe(
      'playcodeonlineeditor'
    )
    expect(decryptAntiClockwiseInwards(3, 'UORTIERXHCEP')).toBe('routecipherx')
  })

  it('encrypts clockwise outwards', () => {
    expect(
      encryptClockwiseOutwards(5, 'javascriptisaprogramminglanguagexxx')
    ).toBe('NRAPAGUGNIGSRIPTRMLAXXXEGAMOICJAVAS')
    expect(encryptClockwiseOutwards(4, 'javascriptxx')).toBe('CRIXXTPSJAVA')
  })

  it('decrypts clockwise outwards', () => {
    expect(
      decryptClockwiseOutwards(5, 'NRAPAGUGNIGSRIPTRMLAXXXEGAMOICJAVAS')
    ).toBe('javascriptisaprogramminglanguagexxx')
    expect(decryptClockwiseOutwards(4, 'CRIXXTPSJAVA')).toBe('javascriptxx')
  })
})

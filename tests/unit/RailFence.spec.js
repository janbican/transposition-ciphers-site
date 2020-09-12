import { encrypt, decrypt } from '@/ciphers/RailFence'

describe('RailFence', () => {
  it('encrypts message', () => {
    expect(encrypt(3, 'wearediscoveredfleeatonce')).toBe(
      'WECRLTEERDSOEEFEAOCAIVDEN'
    )

    expect(encrypt(5, 'enigmaisciphermachine')).toBe('ECCNSIAHIIPMIGAHRNMEE')

    expect(encrypt(4, 'wewillattackinthemorning')).toBe(
      'WAIOELTKNMRGWLTCTENNIAHI'
    )

    expect(encrypt(7, 'vueisajavascriptframework')).toBe(
      'VRKUCIRESPOIATWSVFEAARMJA'
    )
  })

  it('decrypt message', () => {
    expect(decrypt(3, 'WECRLTEERDSOEEFEAOCAIVDEN')).toBe(
      'wearediscoveredfleeatonce'
    )

    expect(decrypt(5, 'ECCNSIAHIIPMIGAHRNMEE')).toBe('enigmaisciphermachine')

    expect(decrypt(4, 'WAIOELTKNMRGWLTCTENNIAHI')).toBe(
      'wewillattackinthemorning'
    )

    expect(decrypt(7, 'VRKUCIRESPOIATWSVFEAARMJA')).toBe(
      'vueisajavascriptframework'
    )
  })
})

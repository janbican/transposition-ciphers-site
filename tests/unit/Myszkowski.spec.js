import { encrypt, decrypt } from '@/ciphers/Myszkowski'

describe('Myszkowski', () => {
  it('encrypts message', () => {
    expect(encrypt([3, 2, 1, 0, 3, 2], 'thisismyszkowskitransposition')).toBe(
      'SZIPOISKSIHSYOSRNSTTIMKWTAOIN'
    )
    expect(encrypt([4, 2, 1, 0, 5, 3], 'enigmaisciphermachine')).toBe(
      'GIAICMENSRNAHHEIEIMPC'
    )
    expect(encrypt([0, 0, 1, 0, 1], 'enigmaisciphermachine')).toBe(
      'ENGAICPHRACIEIMSIEMHN'
    )
    expect(encrypt([2, 0, 1, 0, 2], 'wewillattackinthemorning')).toBe(
      'EIATKNEOIGWTIMNWLLACTHRN'
    )
    expect(encrypt([4, 1, 2, 0, 3, 4], 'rainonleavesonaforestroad')).toBe(
      'NVFRAENSIAATOEOORNLSOREAD'
    )
  })

  it('decrypts message', () => {
    expect(decrypt('tomato', 'SZIPOISKSIHSYOSRNSTTIMKWTAOIN')).toBe(
      'thisismyszkowskitransposition'
    )
    expect(decrypt('ecbafd', 'GIAICMENSRNAHHEIEIMPC')).toBe(
      'enigmaisciphermachine'
    )
    expect(decrypt('aabab', 'ENGAICPHRACIEIMSIEMHN')).toBe(
      'enigmaisciphermachine'
    )
    expect(decrypt('tenet', 'EIATKNEOIGWTIMNWLLACTHRN')).toBe(
      'wewillattackinthemorning'
    )
    expect(decrypt('window', 'NVFRAENSIAATOEOORNLSOREAD')).toBe(
      'rainonleavesonaforestroad'
    )
  })
})

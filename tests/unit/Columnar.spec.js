import { encrypt, decrypt } from '@/ciphers/Columnar'

describe('Columnar', () => {
  it('encrypts message', () => {
    expect(encrypt([3, 0, 1, 4, 2], 'thisistranspositioncipher')).toBe(
      'HTPIPIROOHINICRTSSTISASNE'
    )
    expect(encrypt([4, 2, 1, 0, 5, 3], 'enigmaisciphermachine')).toBe(
      'GIAICMENSRNAHHEIEIMPC'
    )
    expect(encrypt([1, 0], 'wewillattackinthemorning')).toBe(
      'EILTAKNHMRIGWWLATCITEONN'
    )
    expect(encrypt([6, 0, 3, 1, 2, 5, 4], 'kronikadvacatehostoleti')).toBe(
      'RVOINCTIAOOASAEEKTLKDHT'
    )
  })

  it('decrypts message', () => {
    expect(decrypt([3, 0, 1, 4, 2], 'HTPIPIROOHINICRTSSTISASNE')).toBe(
      'thisistranspositioncipher'
    )
    expect(decrypt([4, 2, 1, 0, 5, 3], 'GIAICMENSRNAHHEIEIMPC')).toBe(
      'enigmaisciphermachine'
    )
    expect(decrypt([1, 0], 'EILTAKNHMRIGWWLATCITEONN')).toBe(
      'wewillattackinthemorning'
    )
    expect(decrypt([6, 0, 3, 1, 2, 5, 4], 'RVOINCTIAOOASAEEKTLKDHT')).toBe(
      'kronikadvacatehostoleti'
    )
  })
})

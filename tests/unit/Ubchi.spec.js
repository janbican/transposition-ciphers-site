import { encrypt, decrypt } from '@/ciphers/Ubchi'

describe('Ubchi', () => {
  it('encrypts message', () => {
    let result = encrypt(
      [1, 5, 7, 9, 11, 3, 0, 6, 8, 2, 4, 10],
      2,
      'thisistranspositioncipherusedbygermanyinworldwartwo'
    )
    expect(result[1]).toBe(
      'RHINTWYIINHIAOSLEPSORNSWEDNMIPYORDWTASERBCSZRUAITOGTZ'
    )

    const [partCipherText, plainText] = encrypt(
      [3, 1, 4, 0, 2, 5],
      2,
      'enigmaisciphermachine'
    )
    expect(partCipherText).toBe('giansrnmpceieiicmeahhzz')
    expect(plainText).toBe('NCCZIMIHSEMZGNEAAPIHRIE')

    result = encrypt(
      [6, 7, 0, 4, 1, 5, 3, 2],
      3,
      'wewillattackinthemorningprepare'
    )
    expect(result[0]).toBe('wcoelinathgatneikrplnirwtepeamrzzz')
    expect(result[1]).toBe('OGPPLTNAAIWZNERREALEINIMWTKTZCHREZ')

    result = encrypt([4, 0, 8, 2, 7, 1, 6, 5, 3], 3, 'howtostructurecssinvue')
    expect(result[0]).toBe('otvsctreuihcnrstsoewuuzzz')
    expect(result[1]).toBe('THWTSZSNUUOOIEESRTZCRZVCU')
  })

  it('decrypts message', () => {
    let result = decrypt(
      [1, 5, 7, 9, 11, 3, 0, 6, 8, 2, 4, 10],
      2,
      'RHINTWYIINHIAOSLEPSORNSWEDNMIPYORDWTASERBCSZRUAITOGTZ'
    )
    expect(result[1]).toBe(
      'thisistranspositioncipherusedbygermanyinworldwartwo'
    )

    result = decrypt([3, 1, 4, 0, 2, 5], 2, 'NCCZIMIHSEMZGNEAAPIHRIE')
    expect(result[0]).toBe('giansrnmpceieiicmeahhzz')
    expect(result[1]).toBe('enigmaisciphermachine')

    result = decrypt(
      [6, 7, 0, 4, 1, 5, 3, 2],
      3,
      'OGPPLTNAAIWZNERREALEINIMWTKTZCHREZ'
    )
    expect(result[0]).toBe('wcoelinathgatneikrplnirwtepeamrzzz')
    expect(result[1]).toBe('wewillattackinthemorningprepare')

    result = decrypt(
      [4, 0, 8, 2, 7, 1, 6, 5, 3],
      3,
      'THWTSZSNUUOOIEESRTZCRZVCU'
    )
    expect(result[0]).toBe('otvsctreuihcnrstsoewuuzzz')
    expect(result[1]).toBe('howtostructurecssinvue')
  })
})

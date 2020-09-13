import { encrypt, decrypt } from '@/ciphers/FleissnerGrille'

describe('Fleissner', () => {
  it('encrypts message', () => {
    let grille = [
      [1, 2, 1, 2],
      [2, 1, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 1, 2]
    ]
    expect(encrypt(grille, 'transpositionxxx')).toBe('TIRSNAPXOXTSXINO')

    grille = [
      [2, 1, 2, 1, 2],
      [2, 2, 2, 2, 2],
      [1, 1, 2, 2, 2],
      [2, 2, 2, 1, 2],
      [2, 2, 2, 2, 1]
    ]
    expect(encrypt(grille, 'wewillattackinthemorning')).toBe(
      'IWAEORNTNTWITHIANLCKEGML'
    )

    grille = [
      [1, 2, 2, 2, 2, 2],
      [2, 2, 1, 2, 2, 2],
      [2, 1, 2, 2, 2, 1],
      [2, 2, 1, 2, 2, 2],
      [2, 2, 2, 2, 1, 1],
      [2, 2, 1, 2, 1, 2]
    ]
    expect(encrypt(grille, 'nekteristudentiuzdostavajiznamkyxxxx')).toBe(
      'NONSAUTAEDMKEKNVTTAYEXJXIUXIRIXZSDTZ'
    )
  })

  it('decrypts message', () => {
    let grille = [
      [1, 2, 1, 2],
      [2, 1, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 1, 2]
    ]
    expect(decrypt(grille, 'TIRSNAPXOXTSXINO')).toBe('transpositionxxx')

    grille = [
      [2, 1, 2, 1, 2],
      [2, 2, 2, 2, 2],
      [1, 1, 2, 2, 2],
      [2, 2, 2, 1, 2],
      [2, 2, 2, 2, 1]
    ]
    expect(decrypt(grille, 'IWAEORNTNTWITHIANLCKEGML')).toBe(
      'wewillattackinthemorning'
    )

    grille = [
      [1, 2, 2, 2, 2, 2],
      [2, 2, 1, 2, 2, 2],
      [2, 1, 2, 2, 2, 1],
      [2, 2, 1, 2, 2, 2],
      [2, 2, 2, 2, 1, 1],
      [2, 2, 1, 2, 1, 2]
    ]
    expect(decrypt(grille, 'NONSAUTAEDMKEKNVTTAYEXJXIUXIRIXZSDTZ')).toBe(
      'nekteristudentiuzdostavajiznamkyxxxx'
    )
  })
})

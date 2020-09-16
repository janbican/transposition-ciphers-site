import {
  encryptFromTopLeft,
  decryptFromTopLeft
} from '@/ciphers/route/Diagonal'

describe('Diagonal RouteCipher', () => {
  it('encrypts message from top left', () => {
    expect(encryptFromTopLeft(5, 'diagonalroutecipherx')).toBe(
      'DNIAAUPTLGOREHECOIRX'
    )
    expect(encryptFromTopLeft(4, 'thisistranspositionx')).toBe(
      'TIHISAONTSRSSIOIPTNX'
    )
    expect(encryptFromTopLeft(5, 'enigmaisaciphermachinexxx')).toBe(
      'EANIIIMPSGMAHANECECRHXXIX'
    )
  })
  it('decrypts message from top left', () => {
    expect(decryptFromTopLeft(5, 'DNIAAUPTLGOREHECOIRX')).toBe(
      'diagonalroutecipherx'
    )
    expect(decryptFromTopLeft(4, 'TIHISAONTSRSSIOIPTNX')).toBe(
      'thisistranspositionx'
    )
    expect(decryptFromTopLeft(5, 'EANIIIMPSGMAHANECECRHXXIX')).toBe(
      'enigmaisaciphermachinexxx'
    )
  })
})

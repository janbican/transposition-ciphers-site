import {
  encryptFromTopLeft,
  decryptFromTopLeft,
  encryptFromBottomRight,
  decryptFromBottomRight
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
  it('encrypts message from bottom right', () => {
    expect(encryptFromBottomRight(5, 'diagonalroutecipherx')).toBe(
      'XIRECOOREHPTLGAAUNID'
    )
    expect(encryptFromBottomRight(4, 'thisistranspositionx')).toBe(
      'XTNOIPRSSIONTSISAIHT'
    )
    expect(encryptFromBottomRight(5, 'enigmaisaciphermachinexxx')).toBe(
      'XIXXHRCECENAHAMGSPMIIINAE'
    )
  })
  it('decrypts message from bottom right', () => {
    expect(decryptFromBottomRight(5, 'XIRECOOREHPTLGAAUNID')).toBe(
      'diagonalroutecipherx'
    )
    expect(decryptFromBottomRight(4, 'XTNOIPRSSIONTSISAIHT')).toBe(
      'thisistranspositionx'
    )
    expect(decryptFromBottomRight(5, 'XIXXHRCECENAHAMGSPMIIINAE')).toBe(
      'enigmaisaciphermachinexxx'
    )
  })
})

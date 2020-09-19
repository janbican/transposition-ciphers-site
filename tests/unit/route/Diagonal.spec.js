import {
  encryptFromTopLeft,
  decryptFromTopLeft,
  encryptFromBottomRight,
  decryptFromBottomRight,
  encryptFromTopRight,
  decryptFromTopRight,
  encryptFromBottomLeft,
  decryptFromBottomLeft
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
  it('encrypts message from top right', () => {
    expect(encryptFromTopRight(3, 'enigmaisciphermachine')).toBe(
      'IANEMCHSGIPMHRIECENAI'
    )
    expect(encryptFromTopRight(5, 'diagonalroutecipherx')).toBe(
      'OOGARIXCLIDAERETNUHP'
    )
    expect(encryptFromTopRight(5, 'thisistranspositioncipher')).toBe(
      'INSIAICSRHTTONREOPSSIHPTI'
    )
  })
  it('decrypts message from top right', () => {
    expect(decryptFromTopRight(3, 'IANEMCHSGIPMHRIECENAI')).toBe(
      'enigmaisciphermachine'
    )
    expect(decryptFromTopRight(5, 'OOGARIXCLIDAERETNUHP')).toBe(
      'diagonalroutecipherx'
    )
    expect(decryptFromTopRight(5, 'INSIAICSRHTTONREOPSSIHPTI')).toBe(
      'thisistranspositioncipher'
    )
  })
  it('encrypts message from bottom left', () => {
    expect(encryptFromBottomLeft(3, 'enigmaisciphermachine')).toBe(
      'IANECEIRHMPIGSHCMENAI'
    )
    expect(encryptFromBottomLeft(5, 'diagonalroutecipherx')).toBe(
      'PUHETNDAERXCLIARIOGO'
    )
    expect(encryptFromBottomLeft(5, 'thisistranspositioncipher')).toBe(
      'ITPHISSPOERNOTTHRSCIAISNI'
    )
  })
  it('decrypts message from bottom left', () => {
    expect(decryptFromBottomLeft(3, 'IANECEIRHMPIGSHCMENAI')).toBe(
      'enigmaisciphermachine'
    )
    expect(decryptFromBottomLeft(5, 'PUHETNDAERXCLIARIOGO')).toBe(
      'diagonalroutecipherx'
    )
    expect(decryptFromBottomLeft(5, 'ITPHISSPOERNOTTHRSCIAISNI')).toBe(
      'thisistranspositioncipher'
    )
  })
})

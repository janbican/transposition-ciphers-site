import {
  encryptFromTopLeft,
  decryptFromTopLeft,
  encryptFromTopRight,
  decryptFromTopRight,
  encryptFromBottomLeft,
  decryptFromBottomLeft,
  encryptFromBottomRight,
  decryptFromBottomRight
} from '@/ciphers/route/Vertical'

describe('Vertical RouteCipher', () => {
  it('encrypts message from top left', () => {
    expect(encryptFromTopLeft(5, 'enigmaisciphermachinexxxx')).toBe(
      'EAPAEXCHINISEHXXIRCGMIMNX'
    )
  })
  it('decrypts message from top left', () => {
    expect(decryptFromTopLeft(5, 'EAPAEXCHINISEHXXIRCGMIMNX')).toBe(
      'enigmaisciphermachinexxxx'
    )
  })
  it('encrypts message from top right (even cols)', () => {
    expect(encryptFromTopRight(4, 'wewillattackinthemorning')).toBe(
      'ITKHRGNOTCAWELANMINEITLW'
    )
  })
  it('encrypts message from top right (odd cols)', () => {
    expect(encryptFromTopRight(3, 'wewillattack')).toBe('WLTKCTLEWIAA')
  })
  it('decrypts message from top right', () => {
    expect(decryptFromTopRight(4, 'ITKHRGNOTCAWELANMINEITLW')).toBe(
      'wewillattackinthemorning'
    )
  })
  it('encrypts message from bottom left', () => {
    expect(encryptFromBottomLeft(6, 'cryptographyisfunx')).toBe(
      'IGCRRSFAYPPUNHTOYX'
    )
  })
  it('decrypts message from bottom left', () => {
    expect(decryptFromBottomLeft(6, 'IGCRRSFAYPPUNHTOYX')).toBe(
      'cryptographyisfunx'
    )
  })
  it('encrypts message from bottom right (odd cols)', () => {
    expect(encryptFromBottomRight(3, 'thunderstorm')).toBe('MTEUHDSRORNT')
  })
  it('encrypts message from bottom right (even cols)', () => {
    expect(encryptFromBottomRight(8, 'javaisaprogramminglanguagexxxxxx')).toBe(
      'XAIPAMUXXGMSIANXXARAVGLXEGOAJRNG'
    )
  })
  it('decrypts message from bottom right (odd cols)', () => {
    expect(decryptFromBottomRight(3, 'MTEUHDSRORNT')).toBe('thunderstorm')
  })
  it('decrypts message from bottom right (even cols)', () => {
    expect(decryptFromBottomRight(8, 'XAIPAMUXXGMSIANXXARAVGLXEGOAJRNG')).toBe(
      'javaisaprogramminglanguagexxxxxx'
    )
  })
})

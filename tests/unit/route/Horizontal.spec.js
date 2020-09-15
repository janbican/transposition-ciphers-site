import {
  encryptFromTopLeft,
  decryptFromTopLeft,
  encryptFromTopRight,
  decryptFromTopRight,
  encryptFromBottomLeft,
  decryptFromBottomLeft,
  encryptFromBottomRight,
  decryptFromBottomRight
} from '@/ciphers/route/Horizontal'

describe('Horizontal RouteCipher', () => {
  it('encrypts message from top left', () => {
    expect(encryptFromTopLeft(5, 'thisistranspositionx')).toBe(
      'THISINARTSSPOSIXNOIT'
    )
  })
  it('decrypts message from top left', () => {
    expect(decryptFromTopLeft(5, 'THISINARTSSPOSIXNOIT')).toBe(
      'thisistranspositionx'
    )
  })
  it('encrypts message from top right', () => {
    expect(encryptFromTopRight(6, 'transpositionisamethodofencryptionxx')).toBe(
      'PSNARTOSITIOEMASINTHODOFPYRCNETIONXX'
    )
  })
  it('decrypts message from top right', () => {
    expect(decryptFromTopRight(6, 'PSNARTOSITIOEMASINTHODOFPYRCNETIONXX')).toBe(
      'transpositionisamethodofencryptionxx'
    )
  })
  it('encrypts message from bottom left', () => {
    expect(encryptFromBottomLeft(5, 'thewinteriscomingxxx')).toBe(
      'NGXXXIMOCSNTERIIWEHT'
    )
  })
  it('decrypts message from bottom left', () => {
    expect(decryptFromBottomLeft(5, 'NGXXXIMOCSNTERIIWEHT')).toBe(
      'thewinteriscomingxxx'
    )
  })
  it('encrypts message from bottom right (even cols)', () => {
    expect(encryptFromBottomRight(4, 'neverbendyourheadholdithighx')).toBe(
      'XHGIDITHLOHDRHEAUOYDRBENEVEN'
    )
  })
  it('encrypts message from bottom right (odd cols)', () => {
    expect(encryptFromBottomRight(5, 'thisistranspositionx')).toBe(
      'XNOITSPOSINARTSTHISI'
    )
  })
  it('decrypts message from bottom right (even cols)', () => {
    expect(decryptFromBottomRight(4, 'XHGIDITHLOHDRHEAUOYDRBENEVEN')).toBe(
      'neverbendyourheadholdithighx'
    )
  })
  it('decrypts message from bottom right (odd cols)', () => {
    expect(decryptFromBottomRight(5, 'XNOITSPOSINARTSTHISI')).toBe(
      'thisistranspositionx'
    )
  })
})

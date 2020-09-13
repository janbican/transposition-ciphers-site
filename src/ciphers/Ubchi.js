import {
  encrypt as columnarEncrypt,
  decrypt as columnarDecrypt
} from '@/ciphers/Columnar'

export function encrypt(keyPermutation, numOfWords, text) {
  if (text.length === 0) return ['', '']

  // první transpozice
  let partCipher = columnarEncrypt(keyPermutation, text)

  // přidání "klamačů"
  const deceiver = 'z'.repeat(numOfWords)
  partCipher += deceiver

  // druhá transpozice
  const cipher = columnarEncrypt(keyPermutation, partCipher)

  return [partCipher.toLowerCase(), cipher]
}

export function decrypt(keyPermutation, numOfWords, cipher) {
  if (cipher.length === 0) return ['', '']

  // první transpozice
  let partCipher = columnarDecrypt(keyPermutation, cipher)

  // druhá transpozice s odstraněnými klamači
  const plainText = columnarDecrypt(
    keyPermutation,
    partCipher.slice(0, -numOfWords)
  )

  return [partCipher, plainText]
}

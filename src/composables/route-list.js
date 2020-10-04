import { route } from 'transposition-ciphers'

const vertical = route.vertical
const horizontal = route.horizontal
const spiral = route.spiral
const diagonal = route.diagonal

export function routeCiphers() {
  return [
    ...verticalCiphers,
    ...horizontalCiphers,
    ...spiralCiphers,
    ...diagonalCiphers
  ]
}

const verticalCiphers = [
  {
    encrypt: vertical.encryptFromTopLeft,
    decrypt: vertical.decryptFromTopLeft,
    text: 'Vertikální z levého horního rohu',
    img: 'vertical-top-left.png'
  },
  {
    encrypt: vertical.encryptFromTopRight,
    decrypt: vertical.decryptFromTopRight,
    text: 'Vertikální z pravého horního rohu',
    img: 'vertical-top-right.png'
  },
  {
    encrypt: vertical.encryptFromBottomLeft,
    decrypt: vertical.decryptFromBottomLeft,
    text: 'Vertikální z levého dolního rohu',
    img: 'vertical-bottom-left.png'
  },
  {
    encrypt: vertical.encryptFromBottomRight,
    decrypt: vertical.decryptFromBottomRight,
    text: 'Vertikální z pravého dolního rohu',
    img: 'vertical-bottom-right.png'
  }
]

const horizontalCiphers = [
  {
    encrypt: horizontal.encryptFromTopLeft,
    decrypt: horizontal.decryptFromTopLeft,
    text: 'Horizontální z levého horního rohu',
    img: 'horizontal-top-left.png'
  },
  {
    encrypt: horizontal.encryptFromTopRight,
    decrypt: horizontal.decryptFromTopRight,
    text: 'Horizontální z pravého horního rohu',
    img: 'horizontal-top-right.png'
  },
  {
    encrypt: horizontal.encryptFromBottomLeft,
    decrypt: horizontal.decryptFromBottomLeft,
    text: 'Horizontální z levého dolního rohu',
    img: 'horizontal-bottom-left.png'
  },
  {
    encrypt: horizontal.encryptFromBottomRight,
    decrypt: horizontal.decryptFromBottomRight,
    text: 'Horizontální z pravého dolního rohu',
    img: 'horizontal-bottom-right.png'
  }
]

const spiralCiphers = [
  {
    encrypt: spiral.encryptClockwiseInwards,
    decrypt: spiral.decryptClockwiseInwards,
    text: 'Spirála z pravého horního rohu ve směru hodinových ručiček',
    img: 'spiral-clockwise-top-right.png'
  },
  {
    encrypt: spiral.encryptAntiClockwiseOutwards,
    decrypt: spiral.decryptAntiClockwiseOutwards,
    text: 'Spirála zevnitř proti směru hodinových ručiček',
    img: 'spiral-anticlockwise-middle.png'
  },
  {
    encrypt: spiral.encryptAntiClockwiseInwards,
    decrypt: spiral.decryptAntiClockwiseInwards,
    text: 'Spirála z pravého horního rohu proti směru hodinových ručiček',
    img: 'spiral-anticlockwise-top-right.png'
  },
  {
    encrypt: spiral.encryptClockwiseOutwards,
    decrypt: spiral.decryptClockwiseOutwards,
    text: 'Spirála zevnitř ve směru hodinových ručiček',
    img: 'spiral-clockwise-middle.png'
  }
]

const diagonalCiphers = [
  {
    encrypt: diagonal.encryptFromTopLeft,
    decrypt: diagonal.decryptFromTopLeft,
    text: 'Diagonála z levého horního rohu',
    img: 'diagonal-top-left.png'
  },
  {
    encrypt: diagonal.encryptFromBottomRight,
    decrypt: diagonal.decryptFromBottomRight,
    text: 'Diagonála z pravého dolního rohu',
    img: 'diagonal-bottom-right.png'
  },
  {
    encrypt: diagonal.encryptFromTopRight,
    decrypt: diagonal.decryptFromTopRight,
    text: 'Diagonála z pravého horního rohu',
    img: 'diagonal-top-right.png'
  },
  {
    encrypt: diagonal.encryptFromBottomLeft,
    decrypt: diagonal.decryptFromBottomLeft,
    text: 'Diagonála z levého dolního rohu',
    img: 'diagonal-bottom-left.png'
  }
]

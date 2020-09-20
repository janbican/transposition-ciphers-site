import { encrypt, decrypt } from '@/ciphers/route/Common'

export function horizontalCiphers() {
  return [
    {
      encrypt: encryptFromTopLeft,
      decrypt: decryptFromTopLeft,
      text: 'Horizontální z levého horního rohu',
      img: 'horizontal-top-left.png'
    },
    {
      encrypt: encryptFromTopRight,
      decrypt: decryptFromTopRight,
      text: 'Horizontální z pravého horního rohu',
      img: 'horizontal-top-right.png'
    },
    {
      encrypt: encryptFromBottomLeft,
      decrypt: decryptFromBottomLeft,
      text: 'Horizontální z levého dolního rohu',
      img: 'horizontal-bottom-left.png'
    },
    {
      encrypt: encryptFromBottomRight,
      decrypt: decryptFromBottomRight,
      text: 'Horizontální z pravého dolního rohu',
      img: 'horizontal-bottom-right.png'
    }
  ]
}

function orderFromTop(cols, rows, left) {
  const order = []
  let index = left ? 0 : cols - 1
  let offset = left ? 1 : -1

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      order.push(index)
      index += offset
    }
    index += cols + (offset > 0 ? -1 : 1)
    offset = -offset
  }

  return order
}

function orderFromTopLeft(cols, rows) {
  return orderFromTop(cols, rows, true)
}

function orderFromTopRight(cols, rows) {
  return orderFromTop(cols, rows, false)
}

function orderFromBottom(cols, rows, left) {
  const order = []
  let index = left ? cols * (rows - 1) : cols * rows - 1
  let offset = left ? 1 : -1

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      order.push(index)
      index += offset
    }
    index -= cols + (offset < 0 ? -1 : 1)
    offset = -offset
  }

  return order
}

function orderFromBottomLeft(cols, rows) {
  return orderFromBottom(cols, rows, true)
}

function orderFromBottomRight(cols, rows) {
  return orderFromBottom(cols, rows, false)
}

export function encryptFromTopLeft(cols, text) {
  return encrypt(cols, text, orderFromTopLeft)
}

export function decryptFromTopLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromTopLeft)
}

export function encryptFromTopRight(cols, text) {
  return encrypt(cols, text, orderFromTopRight)
}

export function decryptFromTopRight(cols, cipher) {
  return decrypt(cols, cipher, orderFromTopRight)
}

export function encryptFromBottomLeft(cols, text) {
  return encrypt(cols, text, orderFromBottomLeft)
}

export function decryptFromBottomLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromBottomLeft)
}

export function encryptFromBottomRight(cols, text) {
  return encrypt(cols, text, orderFromBottomRight)
}

export function decryptFromBottomRight(cols, cipher) {
  return decrypt(cols, cipher, orderFromBottomRight)
}

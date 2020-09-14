import { encryptByOrder, decryptByOrder } from '@/ciphers/route/Common'

function orderFromLeft(cols, rows, down) {
  const order = []
  let index = down ? 0 : cols * (rows - 1)
  let offset = down ? cols : -cols

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      order.push(index)
      index += offset
    }
    index -= offset - 1
    offset = -offset
  }

  return order
}

function orderFromLeftDown(cols, rows) {
  return orderFromLeft(cols, rows, true)
}

function orderFromLeftUp(cols, rows) {
  return orderFromLeft(cols, rows, false)
}

function orderFromRight(cols, rows, down) {
  const order = []
  let index = down ? cols - 1 : cols * rows - 1
  let offset = down ? cols : -cols

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      order.push(index)
      index += offset
    }
    index -= offset + 1
    offset = -offset
  }

  return order
}

function orderFromRightDown(cols, rows) {
  return orderFromRight(cols, rows, true)
}

function orderFromRightUp(cols, rows) {
  return orderFromRight(cols, rows, false)
}

function encrypt(cols, text, orderFunc) {
  const rows = text.length / cols
  return encryptByOrder(orderFunc(cols, rows), text)
}

function decrypt(cols, cipher, orderFunc) {
  const rows = cipher.length / cols
  return decryptByOrder(orderFunc(cols, rows), cipher)
}

export function encryptFromTopLeft(cols, text) {
  return encrypt(cols, text, orderFromLeftDown)
}

export function decryptFromTopLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromLeftDown)
}

export function encryptFromTopRight(cols, text) {
  return encrypt(cols, text, orderFromRightDown)
}

export function decryptFromTopRight(cols, cipher) {
  return decrypt(cols, cipher, orderFromRightDown)
}

export function encryptFromBottomLeft(cols, text) {
  return encrypt(cols, text, orderFromLeftUp)
}

export function decryptFromBottomLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromLeftUp)
}

export function encryptFromBottomRight(cols, text) {
  return encrypt(cols, text, orderFromRightUp)
}

export function decryptFromBottomRight(cols, cipher) {
  return decrypt(cols, cipher, orderFromRightUp)
}

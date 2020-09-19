import { encrypt, decrypt } from '@/ciphers/route/Common'

export function diagonalCiphers() {
  return [
    {
      encrypt: encryptFromTopLeft,
      decrypt: decryptFromTopLeft,
      text: 'Diagonála z levého horního rohu'
    },
    {
      encrypt: encryptFromBottomRight,
      decrypt: decryptFromBottomRight,
      text: 'Diagonála z pravého dolního rohu'
    },
    {
      encrypt: encryptFromTopRight,
      decrypt: decryptFromTopRight,
      text: 'Diagonála z pravého horního rohu'
    },
    {
      encrypt: encryptFromBottomLeft,
      decrypt: decryptFromBottomLeft,
      text: 'Diagonála z levého dolního rohu'
    }
  ]
}

function partsFromLeft(cols, rows) {
  const parts = []

  // loop přes všechny části
  // začátek na 1. řádků a zbytku posledního sloupce
  for (let i = 0; i < cols + rows - 1; i++) {
    // určení počátečního sloupce a řádku
    let col = i < cols ? i : cols - 1
    let row = i < cols ? 0 : i - cols + 1

    // vytvoření části
    // průchod od horního diagonálně dolů a vlevo
    const part = []
    while (col >= 0 && row < rows) {
      part.push(cols * row + col)
      col -= 1
      row += 1
    }
    parts.push(part)
  }

  return parts
}

function orderFromTopLeft(cols, rows) {
  const parts = partsFromLeft(cols, rows)
  const order = []

  for (let i = 0; i < parts.length; i++) {
    const part = i % 2 === 0 ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

function orderFromBottomRight(cols, rows) {
  const parts = partsFromLeft(cols, rows)
  const order = []
  const remainder = parts.length % 2 === 0 ? 0 : 1

  for (let i = parts.length - 1; i >= 0; i--) {
    const part = i % 2 === remainder ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

function partsFromRight(cols, rows) {
  const parts = []

  for (let i = cols + rows - 2; i >= 0; i--) {
    // určení počátečního sloupce a řádku
    let col = i >= cols - 1 ? 0 : cols - i - 1
    let row = i >= cols - 1 ? i - cols + 1 : 0

    const part = []
    while (col < cols && row < rows) {
      part.push(cols * row + col)
      col += 1
      row += 1
    }

    parts.push(part)
  }

  return parts
}

function orderFromTopRight(cols, rows) {
  const parts = partsFromRight(cols, rows)
  const order = []
  const remainder = parts.length % 2 === 0 ? 1 : 0

  for (let i = parts.length - 1; i >= 0; i--) {
    const part = i % 2 === remainder ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

function orderFromBottomLeft(cols, rows) {
  const parts = partsFromRight(cols, rows)
  const order = []

  for (let i = 0; i < parts.length; i++) {
    const part = i % 2 === 1 ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

export function encryptFromTopLeft(cols, text) {
  return encrypt(cols, text, orderFromTopLeft)
}

export function decryptFromTopLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromTopLeft)
}

export function encryptFromBottomRight(cols, text) {
  return encrypt(cols, text, orderFromBottomRight)
}

export function decryptFromBottomRight(cols, cipher) {
  return decrypt(cols, cipher, orderFromBottomRight)
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

import { encrypt, decrypt } from '@/ciphers/route/Common'

export function diagonalCiphers() {
  return [
    {
      encrypt: encryptFromTopLeft,
      decrypt: decryptFromTopLeft,
      text: 'Diagonála z levého horního rohu',
      img: 'diagonal-top-left.png'
    },
    {
      encrypt: encryptFromBottomRight,
      decrypt: decryptFromBottomRight,
      text: 'Diagonála z pravého dolního rohu',
      img: 'diagonal-bottom-right.png'
    },
    {
      encrypt: encryptFromTopRight,
      decrypt: decryptFromTopRight,
      text: 'Diagonála z pravého horního rohu',
      img: 'diagonal-top-right.png'
    },
    {
      encrypt: encryptFromBottomLeft,
      decrypt: decryptFromBottomLeft,
      text: 'Diagonála z levého dolního rohu',
      img: 'diagonal-bottom-left.png'
    }
  ]
}

// vrací seznam indexů po diagonálách
// diagonály zprava doleva
// příklad:
// 0 1 2
// 3 4 5
// 6 7 8
// return [[0], [1, 3], [2, 4, 6], [5, 7], [8]]
function partsRightToLeft(cols, rows) {
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

// vrací seznam indexů po diagonálách
// diagonály zleva doprava
// příklad:
// 0 1 2
// 3 4 5
// 6 7 8
// return [[6], [3, 7], [0, 4, 8], [1, 5], [2]]
function partsLeftToRight(cols, rows) {
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

// průchod po diagonálách
// každá s lichým indexem je obrácena
function orderFromTopLeft(cols, rows) {
  const parts = partsRightToLeft(cols, rows)
  const order = []

  for (let i = 0; i < parts.length; i++) {
    const part = i % 2 === 0 ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

// průchod po diagonálách
// obrácené diagonály na základě počtu diagonál
function orderFromBottomRight(cols, rows) {
  const parts = partsRightToLeft(cols, rows)
  const order = []
  const remainder = parts.length % 2 === 0 ? 0 : 1

  for (let i = parts.length - 1; i >= 0; i--) {
    const part = i % 2 === remainder ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

// průchod po diagonálách
// obrácené diagonály na základě počtu diagonál
function orderFromTopRight(cols, rows) {
  const parts = partsLeftToRight(cols, rows)
  const order = []
  const remainder = parts.length % 2 === 0 ? 1 : 0

  for (let i = parts.length - 1; i >= 0; i--) {
    const part = i % 2 === remainder ? parts[i] : parts[i].reverse()
    for (const item of part) order.push(item)
  }

  return order
}

// průchod po diagonálách
// každá se sudým indexem je obrácena
function orderFromBottomLeft(cols, rows) {
  const parts = partsLeftToRight(cols, rows)
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

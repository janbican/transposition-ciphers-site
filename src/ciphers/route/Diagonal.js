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
    }
  ]
}

function orderFromTopLeft(cols, rows) {
  const order = []

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

    // pokud je část s lichým indexem, je její pořadí obráceno
    const actualPart = i % 2 === 0 ? part : part.reverse()
    for (const item of actualPart) {
      order.push(item)
    }
  }

  return order
}

function orderFromBottomRight(cols, rows) {
  const order = []
  let count = 0 // index aktuální části (pro určení, zda obrátit)

  // loop přes všechny části
  for (let i = cols + rows - 1; i >= 0; i--) {
    // určení počátečního sloupce a řádku
    let col = i < cols ? i : cols - 1
    let row = i < cols ? 0 : i - cols + 1

    // vytvoření části
    const part = []
    while (col >= 0 && row < rows) {
      part.push(cols * row + col)
      col -= 1
      row += 1
    }

    // případné obrácení pořadí
    const actualPart = count % 2 === 0 ? part : part.reverse()
    for (const item of actualPart) {
      order.push(item)
    }
    count += 1
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

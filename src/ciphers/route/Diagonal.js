import { encrypt, decrypt } from '@/ciphers/route/Common'

export function diagonalCiphers() {
  return [
    {
      encrypt: encryptFromTopLeft,
      decrypt: decryptFromTopLeft,
      text: 'Diagonála z levého horního rohu'
    }
  ]
}

function orderFromLeft(cols, rows) {
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

export function encryptFromTopLeft(cols, text) {
  return encrypt(cols, text, orderFromLeft)
}

export function decryptFromTopLeft(cols, cipher) {
  return decrypt(cols, cipher, orderFromLeft)
}

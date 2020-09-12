// vytváří šifrované řádky, které pak spojí
export function encrypt(numOfLayers, text) {
  const cipherLines = new Array(numOfLayers).fill('')
  let line = 0
  let offset = 1 // určuje směr průchodu, 1 dolů, -1 nahoru

  for (const letter of text) {
    cipherLines[line] += letter
    line += offset

    // aktualizace offsetu
    offset = calcOffset(line, numOfLayers, offset)
  }

  return cipherLines.join('').toUpperCase()
}

// určí počáteční indexy jednotlivých šifrovaných řádků
// následuje průchod jako při šifrování
export function decrypt(numOfLayers, cipher) {
  const indices = getLinesStartIndices(numOfLayers, cipher.length)
  let plainText = ''
  let line = 0
  let offset = 1

  for (let i = 0; i < cipher.length; i++) {
    // získání následujícího písmene
    const index = indices[line]
    plainText += cipher.charAt(index)
    // ikrementace atuálního indexu řádku
    indices[line] += 1
    // posun v rámci řádků
    line += offset

    // aktualizace offsetu
    offset = calcOffset(line, numOfLayers, offset)
  }

  return plainText.toLowerCase()
}

// zjišťuje, zda lze současným směrem pokračovat
// pokud ne, směr je změněn
function calcOffset(line, numOfLayers, offset) {
  return line === numOfLayers - 1 || line === 0 ? -offset : offset
}

// inspirace Bucket sortem
// přihrádky pro počáteční indexy šifrovaných řádků
function getLinesStartIndices(numOfLayers, length) {
  const indices = new Array(numOfLayers + 1).fill(0)
  let line = 0
  let offset = 1

  // výpočet délky jednotlivých řádků
  // průchod jako při šifrování
  // index řádků je posunut o 1
  for (let i = 0; i < length; i++) {
    indices[line + 1] += 1
    line += offset

    // aktualizace offsetu
    offset = calcOffset(line, numOfLayers, offset)
  }

  // výpočet počátečních indexů řádků
  // začíná se nulou
  // index = předchozí index + počet písmen aktuální přihrádky
  for (let i = 1; i < numOfLayers; i++) {
    indices[i] += indices[i - 1]
  }

  return indices
}

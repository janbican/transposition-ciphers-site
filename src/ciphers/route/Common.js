// pracuje s polem číselných pořadí jednotlivých písmen
// výsledkem je permutace textu na základě tohoto pořadí
export function encryptByOrder(order, text) {
  let cipher = ''
  for (const index of order) {
    cipher += text.charAt(index)
  }
  return cipher.toUpperCase()
}

export function decryptByOrder(order, cipher) {
  const plainArray = new Array(order.length)
  for (let i = 0; i < order.length; i++) {
    plainArray[order[i]] = cipher.charAt(i)
  }
  return plainArray.join('').toLowerCase()
}

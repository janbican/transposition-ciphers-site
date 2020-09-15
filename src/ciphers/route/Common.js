// šifrování na základě funkce, která určí pořadí písmen
export function encrypt(cols, text, orderFunc) {
  const rows = text.length / cols
  return encryptByOrder(orderFunc(cols, rows), text)
}

export function decrypt(cols, cipher, orderFunc) {
  const rows = cipher.length / cols
  return decryptByOrder(orderFunc(cols, rows), cipher)
}

// pracuje s polem číselných pořadí jednotlivých písmen
// výsledkem je permutace textu na základě tohoto pořadí
function encryptByOrder(order, text) {
  let cipher = ''
  for (const index of order) {
    cipher += text.charAt(index)
  }
  return cipher.toUpperCase()
}

function decryptByOrder(order, cipher) {
  const plainArray = new Array(order.length)
  for (let i = 0; i < order.length; i++) {
    plainArray[order[i]] = cipher.charAt(i)
  }
  return plainArray.join('').toLowerCase()
}

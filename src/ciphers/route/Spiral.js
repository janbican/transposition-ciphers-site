import { encrypt, decrypt } from '@/ciphers/route/Common'

function orderClockwise(cols, rows, reverse) {
  let rowBegin = 0
  let rowEnd = rows - 1
  let colBegin = 0
  let colEnd = cols - 1
  let order = []

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //průchod dolů
    for (let i = rowBegin; i <= rowEnd; i++) {
      order.push(i * cols + colEnd)
    }
    colEnd--

    //průchod doleva
    for (let i = colEnd; i >= colBegin; i--) {
      order.push(rowEnd * cols + i)
    }
    rowEnd--

    //průchod nahoru
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        order.push(i * cols + colBegin)
      }
    }
    colBegin++

    //průchod doprava
    if (rowBegin <= rowEnd) {
      for (let i = colBegin; i <= colEnd; i++) {
        order.push(rowBegin * cols + i)
      }
    }
    rowBegin++
  }

  return reverse ? order.reverse() : order
}

function orderClockwiseInwards(cols, rows) {
  return orderClockwise(cols, rows, false)
}

function orderAntiClockwiseOutwards(cols, rows) {
  return orderClockwise(cols, rows, true)
}

function orderAntiClockwise(cols, rows, reverse) {
  let rowBegin = 0
  let rowEnd = rows - 1
  let colBegin = 0
  let colEnd = cols - 1
  let order = []

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // průchod doleva
    for (let i = colEnd; i >= colBegin; i--) {
      order.push(rowBegin * cols + i)
    }
    rowBegin++

    // průchod dolů
    for (let i = rowBegin; i <= rowEnd; i++) {
      order.push(i * cols + colBegin)
    }
    colBegin++

    // průchod doprava
    if (rowBegin <= rowEnd) {
      for (let i = colBegin; i <= colEnd; i++) {
        order.push(rowEnd * cols + i)
      }
    }
    rowEnd--

    // průchod nahoru
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        order.push(i * cols + colEnd)
      }
    }
    colEnd--
  }

  return reverse ? order.reverse() : order
}

function orderAntiClockwiseInwards(cols, rows) {
  return orderAntiClockwise(cols, rows, false)
}

function orderClockwiseOutwards(cols, rows) {
  return orderAntiClockwise(cols, rows, true)
}

export function encryptClockwiseInwards(cols, text) {
  return encrypt(cols, text, orderClockwiseInwards)
}

export function decryptClockwiseInwards(cols, cipher) {
  return decrypt(cols, cipher, orderClockwiseInwards)
}

export function encryptAntiClockwiseOutwards(cols, text) {
  return encrypt(cols, text, orderAntiClockwiseOutwards)
}

export function decryptAntiClockwiseOutwards(cols, cipher) {
  return decrypt(cols, cipher, orderAntiClockwiseOutwards)
}

export function encryptAntiClockwiseInwards(cols, text) {
  return encrypt(cols, text, orderAntiClockwiseInwards)
}

export function decryptAntiClockwiseInwards(cols, cipher) {
  return decrypt(cols, cipher, orderAntiClockwiseInwards)
}

export function encryptClockwiseOutwards(cols, text) {
  return encrypt(cols, text, orderClockwiseOutwards)
}

export function decryptClockwiseOutwards(cols, cipher) {
  return decrypt(cols, cipher, orderClockwiseOutwards)
}

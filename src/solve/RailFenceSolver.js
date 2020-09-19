import { decrypt } from '@/ciphers/RailFence'

const dict = new Map()

let maxWordLen = 0
let wordCost = {}
let maxCost = 9e999

export async function loadDictionary() {
  // aby došlo k importu až je potřeba
  const dictionary = await import('raw-loader!@/solve/dict.txt')
  const wordsByFreq = await import('raw-loader!@/solve/words-by-freq.txt')

  let words = dictionary.default.split('\n')
  words.forEach(word => dict.set(word, null))

  words = wordsByFreq.default.split('\n')
  words.forEach((word, index) => {
    wordCost[word] = Math.log((index + 1) * Math.log(words.length))
    if (word.length > maxWordLen) maxWordLen = word.length
    if (wordCost[word] < maxCost) maxCost = wordCost[word]
  })
}

// hrubou silou
// dešifrování postupně všemi přijatelnými klíči
export function solve(cipher) {
  for (let i = 2; i <= cipher.length / 2; i++) {
    const plainText = decrypt(i, cipher)
    // nalezení možných slov
    const words = findWords(plainText.substring(0, 50))
    // pokud obsahuje určitou míru anglických slov, je řešení vráceno
    if (isEnglish(words)) return findWords(plainText).join(' ')
  }
  return 'bez výsledku'
}

function findWords(string) {
  const words = []
  for (const word of splitWords(string)) {
    words.push(word)
  }
  return words
}

function splitWords(s) {
  let cost = [0]

  function best_match(i) {
    let candidates = cost.slice(Math.max(0, i - maxWordLen), i).reverse()
    let minPair = [Number.MAX_SAFE_INTEGER, 0]
    candidates.forEach(function(c, k) {
      let ccost
      if (wordCost[s.substring(i - k - 1, i).toLowerCase()]) {
        ccost = c + wordCost[s.substring(i - k - 1, i).toLowerCase()]
      } else {
        ccost = Number.MAX_SAFE_INTEGER
      }
      if (ccost < minPair[0]) {
        minPair = [ccost, k + 1]
      }
    })
    return minPair
  }

  for (let i = 1; i < s.length + 1; i++) {
    cost.push(best_match(i)[0])
  }

  let out = []
  let i = s.length
  while (i > 0) {
    let k = best_match(i)[1]

    let newToken = true
    if (s.slice(i - k, i) != "'") {
      if (out.length > 0) {
        if (
          out[-1] == "'s" ||
          (Number.isInteger(s[i - 1]) && Number.isInteger(out[-1][0]))
        ) {
          out[-1] = s.slice(i - k, i) + out[-1]
          newToken = false
        }
      }
    }

    if (newToken) {
      out.push(s.slice(i - k, i))
    }

    i -= k
  }

  return out.reverse()
}

function getEnglishCount(words) {
  if (words == []) return 0.0

  let matches = 0
  for (const word of words) {
    if (dict.has(word)) {
      matches += 1
    }
  }

  return matches / words.length
}

function isEnglish(words, { wordPercentage = 40 } = {}) {
  return getEnglishCount(words) * 100 >= wordPercentage
}

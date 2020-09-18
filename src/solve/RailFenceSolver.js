import dictionary from 'raw-loader!@/solve/dictionary.txt'
import wordsByFreq from 'raw-loader!@/solve/words-by-freq.txt'

import { decrypt } from '@/ciphers/RailFence'

const dictMap = new Map()

let maxWordLen = 0
let wordCost = {}
let maxCost = 9e999

export function load() {
  let words = dictionary.split('\r\n')
  words.forEach(word => dictMap.set(word.toLowerCase(), null))

  words = wordsByFreq.split('\n')
  words.forEach((word, index) => {
    wordCost[word] = Math.log((index + 1) * Math.log(words.length))
    if (word.length > maxWordLen) maxWordLen = word.length
    if (wordCost[word] < maxCost) maxCost = wordCost[word]
  })
}

export function solve(cipher) {
  for (let i = 2; i <= cipher.length / 2; i++) {
    const plainText = decrypt(i, cipher)
    const words = splitSentence(plainText.substring(0, 50))
    if (isEnglish(words)) return plainText
  }
  return 'bez výsledku'
}

function splitSentence(string) {
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
    // let c = best_match(i)[0]
    let k = best_match(i)[1]
    //if (c == cost[i])
    //    console.log("Alert: " + c);

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
    if (dictMap.has(word)) {
      matches += 1
    }
  }

  return matches / words.length
}

function isEnglish(words, { wordPercentage = 40 } = {}) {
  const result = getEnglishCount(words) * 100 >= wordPercentage
  console.log(result)
  return result
}

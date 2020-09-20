// založeno na algoritmu https://stackoverflow.com/a/11642687
// použití upraveného kódu https://github.com/parsakafi/wordsninja

const wordCost = {}
let maxWordLen = 0
let maxCost = 9e999

// líné načtení slov ze souboru words-by-freq.txt
// slova podle frekvence použití z menší části Wikipedie
export async function loadWordsByFrequency() {
  const wordsByFreq = await import(
    'raw-loader!@/solve/findwords/words-by-freq.txt'
  )

  const words = wordsByFreq.default.split('\n')
  words.forEach((word, i) => {
    wordCost[word] = Math.log((i + 1) * Math.log(words.length))
    if (word.length > maxWordLen) maxWordLen = word.length
    if (wordCost[word] < maxCost) maxCost = wordCost[word]
  })
}

// vrací slova, které obsahuje řetězec string v pořadí, v jakém se objevují
export function findWords(string) {
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

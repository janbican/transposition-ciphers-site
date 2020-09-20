// pro ověření, zda slova obsažená v poli jsou v anglickém jazyce
// zdroj SWEIGART, Al. Cracking codes with Python: an introduction to building and breaking ciphers.
// Chapter 11: Detecting English Programmatically
// algoritmus je převeden do kódu Javascriptu a upraven

const dict = new Map()

// líné načtení slov ze souboru dict.txt
// slova jsou od zdroje (kniha)
export async function loadDictionary() {
  const dictionary = await import('raw-loader!@/solve/englishcheck/dict.txt')
  const words = dictionary.default.split('\n')
  words.forEach(word => dict.set(word, null))
}

export function isEnglish(words, { wordPercentage = 60 } = {}) {
  return getEnglishCount(words) * 100 >= wordPercentage
}

function getEnglishCount(words) {
  if (words == []) return 0.0

  let matches = 0
  for (const word of words) {
    if (dict.has(word)) matches += 1
  }
  return matches / words.length
}

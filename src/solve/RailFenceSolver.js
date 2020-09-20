import { decrypt } from '@/ciphers/RailFence'
import { loadWordsByFrequency, findWords } from '@/solve/findwords/FindWords'
import { loadDictionary, isEnglish } from '@/solve/englishcheck/EnglishCheck'

export function loadSolveData() {
  loadWordsByFrequency()
  loadDictionary()
}

// hrubou silou
// dešifrování postupně všemi přijatelnými klíči
// výsledek otestován - je to text v angličtině?
// vrácen seznam výsledků
export function solve(cipher) {
  const candidates = []
  for (let i = 2; i <= cipher.length / 2; i++) {
    const plainText = decrypt(i, cipher)
    // nalezení možných slov
    const words = findWords(plainText.substring(0, 50))
    // pokud obsahuje určitou míru anglických slov, je řešení vráceno
    if (isEnglish(words)) candidates.push(findWords(plainText).join(' '))
  }
  return candidates == [] ? ['bez výsledku'] : candidates
}

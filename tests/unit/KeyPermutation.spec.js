import {
  keyPermutation,
  keyPermutationDuplicate
} from '@/ciphers/KeyPermutation'

describe('KeyPermutations', () => {
  it('gets basic permutation', () => {
    expect(keyPermutation('keyword')).toEqual([2, 1, 6, 5, 3, 4, 0])
    expect(keyPermutation('helloworld')).toEqual([2, 1, 3, 4, 6, 9, 7, 8, 5, 0])
    expect(keyPermutation('abcdef')).toEqual([0, 1, 2, 3, 4, 5])
    expect(keyPermutation('fedcba')).toEqual([5, 4, 3, 2, 1, 0])
    expect(keyPermutation('mravenec')).toEqual([4, 6, 0, 7, 2, 5, 3, 1])
  })

  it('gets permutation with duplicate indices', () => {
    expect(keyPermutationDuplicate('keyword')).toEqual([2, 1, 6, 5, 3, 4, 0])
    expect(keyPermutationDuplicate('tomato')).toEqual([3, 2, 1, 0, 3, 2])
    expect(keyPermutationDuplicate('aacbb')).toEqual([0, 0, 2, 1, 1])
    expect(keyPermutationDuplicate('mravenec')).toEqual([
      3,
      5,
      0,
      6,
      2,
      4,
      2,
      1
    ])
    expect(keyPermutationDuplicate('alobalova')).toEqual([
      0,
      2,
      3,
      1,
      0,
      2,
      3,
      4,
      0
    ])
  })
})

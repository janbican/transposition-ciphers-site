import { spiralCiphers } from '@/ciphers/route/Spiral'
import { verticalCiphers } from '@/ciphers/route/Vertical'
import { diagonalCiphers } from '@/ciphers/route/Diagonal'
import { horizontalCiphers } from '@/ciphers/route/Horizontal'

export function routeCiphers() {
  return [
    ...spiralCiphers(),
    ...verticalCiphers(),
    ...diagonalCiphers(),
    ...horizontalCiphers()
  ]
}

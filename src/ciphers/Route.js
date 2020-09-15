import { spiralCiphers } from '@/ciphers/route/Spiral'
import { verticalCiphers } from '@/ciphers/route/Vertical'
import { horizontalCiphers } from '@/ciphers/route/Horizontal'

export function routeCiphers() {
  return [...spiralCiphers(), ...verticalCiphers(), ...horizontalCiphers()]
}

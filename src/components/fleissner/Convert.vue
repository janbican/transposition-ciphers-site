<template>
  <div>
    <b-row>
      <b-col>
        <grille @change="grilleChanged" />
      </b-col>
    </b-row>

    <div v-show="isGrilleComplete">
      <b-row class="mt-5">
        <b-col lg="6">
          <plain-text-area
            v-model="plainText"
            :value="plainText"
            :maxLength="maxTextLength"
            :isInvalid="isPlainTextInvalid"
            :invalidFeedback="invalidPlainTextFeedback"
            @valueChanged="plainTextChanged"
          />
        </b-col>

        <b-col lg="6">
          <cipher-text-area
            v-model="cipherText"
            :value="cipherText"
            :maxLength="maxTextLength"
            :isInvalid="isCipherTextInvalid"
            :invalidFeedback="invalidCipherTextFeedback"
            @valueChanged="cipherTextChanged"
          />
        </b-col>
      </b-row>

      <b-row v-show="isPlainTextInvalid">
        <b-col>
          <b-button variant="outline-dark" @click="completePlainText"
            >Doplnit otevřený text</b-button
          >
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Grille from '@/components/fleissner/Grille'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'

import { fleissner } from 'transposition-ciphers'

export default {
  name: 'FleissnerConvert',
  components: {
    grille: Grille,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      completeGrille: null,
      isEncrypting: true,
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    grilleChanged(grille) {
      this.plainText = ''
      this.cipherText = ''
      if (grille == null) {
        this.completeGrille = null
        return
      }

      this.completeGrille = []
      for (const row of grille) {
        this.completeGrille.push(row.map(value => (value === 1 ? true : false)))
      }
    },
    plainTextChanged() {
      this.isEncrypting = true
      this.encrypt()
    },
    cipherTextChanged() {
      this.isEncrypting = false
      this.decrypt()
    },
    encrypt() {
      this.cipherText = ''
      if (this.isPlainTextInvalid) return
      this.cipherText = fleissner.encrypt(this.completeGrille, this.plainText, {
        normalize: false
      })
    },
    decrypt() {
      this.plainText = ''
      if (this.isCipherTextInvalid) return
      this.plainText = fleissner.decrypt(this.completeGrille, this.cipherText, {
        normalize: false
      })
    },
    completePlainText() {
      const remainder = this.maxTextLength - this.plainText.length
      this.plainText += 'x'.repeat(remainder)
      this.encrypt()
    },
    invalidTextFeedback(length) {
      return (
        'Nedostatečná délka - ' + length + '/' + this.maxTextLength + ' písmen'
      )
    }
  },
  computed: {
    isGrilleComplete() {
      return this.completeGrille !== null
    },
    maxTextLength() {
      if (this.completeGrille == null) return 0
      const size = this.completeGrille.length
      return size * size - (size % 2 == 1 ? 1 : 0)
    },
    isPlainTextInvalid() {
      return this.isEncrypting && this.maxTextLength != this.plainText.length
    },
    isCipherTextInvalid() {
      return !this.isEncrypting && this.maxTextLength != this.cipherText.length
    },
    invalidPlainTextFeedback() {
      return this.invalidTextFeedback(this.plainText.length)
    },
    invalidCipherTextFeedback() {
      return this.invalidTextFeedback(this.cipherText.length)
    }
  }
}
</script>

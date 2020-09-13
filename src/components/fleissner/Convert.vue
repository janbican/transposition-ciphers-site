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

import {
  encrypt as fleissnerEncrypt,
  decrypt as fleissnerDecrypt
} from '@/ciphers/FleissnerGrille'

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
      this.completeGrille = grille
      this.plainText = ''
      this.cipherText = ''
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
      this.cipherText = fleissnerEncrypt(
        this.copyGrille(this.completeGrille),
        this.plainText
      )
    },
    decrypt() {
      this.plainText = ''
      if (this.isCipherTextInvalid) return
      this.plainText = fleissnerDecrypt(
        this.copyGrille(this.completeGrille),
        this.cipherText
      )
    },
    copyGrille(grille) {
      const copy = []
      for (const row of grille) {
        copy.push(row.slice(0))
      }
      return copy
    },
    completePlainText() {
      const remainder = this.maxTextLength - this.plainText.length
      this.plainText += 'x'.repeat(remainder)
      this.encrypt()
    }
  },
  computed: {
    isGrilleComplete: function() {
      return this.completeGrille !== null
    },

    maxTextLength: function() {
      if (this.completeGrille == null) return 0
      const size = this.completeGrille.length
      return size * size - (size % 2 == 1 ? 1 : 0)
    },

    isPlainTextInvalid: function() {
      return this.isEncrypting && this.maxTextLength != this.plainText.length
    },

    isCipherTextInvalid: function() {
      return !this.isEncrypting && this.maxTextLength != this.cipherText.length
    },

    invalidPlainTextFeedback: function() {
      return (
        'Nedostatečná délka - ' +
        this.plainText.length +
        '/' +
        this.maxTextLength +
        ' písmen'
      )
    },

    invalidCipherTextFeedback: function() {
      return (
        'Nedostatečná délka - ' +
        this.cipherText.length +
        '/' +
        this.maxTextLength +
        ' písmen'
      )
    }
  }
}
</script>

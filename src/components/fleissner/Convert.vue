<template>
  <div>
    <b-row>
      <b-col>
        <grille @change="grilleChanged" />
      </b-col>
    </b-row>

    <div v-show="completeGrille !== null">
      <b-row class="mt-3">
        <b-col lg="6">
          <plain-text-area
            v-model="plainText"
            :value="plainText"
            :maxLength="maxTextLength"
            @valueChanged="plainTextChanged"
          />
        </b-col>

        <b-col lg="6">
          <cipher-text-area
            v-model="cipherText"
            :value="cipherText"
            :maxLength="maxTextLength"
            @valueChanged="cipherTextChanged"
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col class="center">
          <p>Maximální délka zprávy: {{ maxTextLength }}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FleissnerGrille from '@/mixins/FleissnerGrille'
import Grille from '@/components/fleissner/Grille'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'

export default {
  name: 'FleissnerConvert',
  mixins: [FleissnerGrille],
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
      if (grille === null) return
      if (this.isEncrypting) this.encrypt()
      else this.decrypt()
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
      this.cipherText = this.fleissnerEncrypt(
        this.copyGrille(this.completeGrille),
        this.plainText
      )
    },
    decrypt() {
      this.plainText = this.fleissnerDecrypt(
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
    }
  },
  computed: {
    maxTextLength: function() {
      if (this.completeGrille == null) return 0
      const size = this.completeGrille.length
      return size * size - (size % 2 == 1 ? 1 : 0)
    }
  }
}
</script>

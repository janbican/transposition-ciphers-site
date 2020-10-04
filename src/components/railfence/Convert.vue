<template>
  <div class="convert">
    <b-row class="mb-3">
      <b-col>
        <key-number-input
          v-model.number="keyValue"
          :value="keyValue"
          label="Klíč (počet řádků)"
          invalidFeedback="Počet řádků musí být alespoň 2"
          :isValid="isKeyValueValid"
          @valueChanged="keyValueChanged"
        />
      </b-col>
    </b-row>

    <div v-show="isKeyValueValid">
      <b-row>
        <b-col lg="6">
          <plain-text-area
            v-model="plainText"
            :value="plainText"
            @valueChanged="plainTextChanged"
          />
        </b-col>

        <b-col lg="6">
          <cipher-text-area
            v-model="cipherText"
            :value="cipherText"
            @valueChanged="cipherTextChanged"
          />
        </b-col>
      </b-row>

      <b-row class="justify-content-md-center mt-5 text-center">
        <b-col col>
          <b-button
            v-if="!isGridDisplayed"
            variant="outline-info"
            @click="displayGrid"
            >Ukázat šifrovací mřížku</b-button
          >
          <div v-else>
            <h5 v-show="plainText.length > 0">šifrovací mřížka</h5>
            <encryption-grid
              :keyValue="keyValue"
              :text="plainText"
              :isValid="isKeyValueValid"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import EncryptionGrid from '@/components/railfence/EncryptionGrid'

import { railfence } from 'transposition-ciphers'

export default {
  name: 'RailFenceConvert',
  components: {
    'key-number-input': KeyNumberInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'encryption-grid': EncryptionGrid
  },
  data() {
    return {
      isEncrypting: true,
      isGridDisplayed: true,
      keyValue: 3,
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    keyValueChanged() {
      if (this.isKeyValueValid) {
        if (this.isEncrypting) this.encrypt()
        else this.decrypt()
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
      this.isGridDisplayed = this.plainText.length < 200
      this.cipherText = railfence.encrypt(this.keyValue, this.plainText, {
        normalize: false
      })
    },
    decrypt() {
      this.isGridDisplayed = this.cipherText.length < 200
      this.plainText = railfence.decrypt(this.keyValue, this.cipherText, {
        normalize: false
      })
    },
    displayGrid() {
      const message = 'Zobrazení může chvíli trvat. Pokračovat?'
      if (confirm(message)) this.isGridDisplayed = true
    }
  },
  computed: {
    isKeyValueValid() {
      return this.keyValue > 1
    }
  }
}
</script>

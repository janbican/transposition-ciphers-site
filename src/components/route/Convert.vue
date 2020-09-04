<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <key-number-input
          v-model.number="numOfCols"
          :value="numOfCols"
          label="Počet sloupců"
          invalidFeedback="Počet sloupců musí být alespoň 2"
          :isValid="isNumOfColsValid"
          @valueChanged="numOfColsChanged"
        />
      </b-col>
    </b-row>

    <div v-show="isNumOfColsValid">
      <b-row class="mb-3">
        <b-col>
          <b-form-group description="Vyber šifrovací cestu" label="Cesta">
            <b-form-select
              v-model="route"
              :options="routes"
              @change="routeChanged"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6">
          <plain-text-area
            v-model="plainText"
            :value="plainText"
            :isInvalid="isPlainTextInvalid"
            :invalidFeedback="invalidPlainTextFeedback"
            @valueChanged="plainTextChanged"
          />
        </b-col>

        <b-col lg="6">
          <cipher-text-area
            v-model="cipherText"
            :value="cipherText"
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
import RouteCipher from '@/mixins/RouteCipher'
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'

export default {
  name: 'RouteConvert',
  mixins: [RouteCipher],
  components: {
    'key-number-input': KeyNumberInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      isEncrypting: true,
      numOfCols: 4,
      route: {
        encrypt: 'encryptVerticalFromTopLeft',
        decrypt: 'decryptVerticalFromTopLeft'
      },
      routes: [
        {
          value: {
            encrypt: 'encryptVerticalFromTopLeft',
            decrypt: 'decryptVerticalFromTopLeft'
          },
          text: 'vertical from top left'
        },
        {
          value: {
            encrypt: 'encryptVerticalFromTopRight',
            decrypt: 'decryptVerticalFromTopRight'
          },
          text: 'vertical from top right'
        },
        {
          value: {
            encrypt: 'encryptVerticalFromBottomLeft',
            decrypt: 'decryptVerticalFromBottomLeft'
          },
          text: 'vertical from bottom left'
        },
        {
          value: {
            encrypt: 'encryptVerticalFromBottomRight',
            decrypt: 'decryptVerticalFromBottomRight'
          },
          text: 'vertical from bottom right'
        }
      ],
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    numOfColsChanged() {
      if (this.isNumOfColsValid) {
        if (this.isEncrypting) this.encrypt()
        else this.decrypt()
      }
    },
    routeChanged() {
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
      this.cipherText = ''
      if (this.isPlainTextInvalid) return
      const method = this.route.encrypt
      this.cipherText = this[method](this.numOfCols, this.plainText)
    },
    decrypt() {
      this.plainText = ''
      if (this.isCipherTextInvalid) return
      const method = this.route.decrypt
      this.plainText = this[method](this.numOfCols, this.cipherText)
    },
    completePlainText() {
      const length = this.plainText.length
      const remainder = this.numOfCols - (length % this.numOfCols)
      this.plainText += 'x'.repeat(remainder)
      this.encrypt()
    }
  },
  computed: {
    isNumOfColsValid() {
      return this.numOfCols > 1
    },

    isPlainTextInvalid() {
      return this.isEncrypting && this.plainText.length % this.numOfCols !== 0
    },

    isCipherTextInvalid() {
      return !this.isEncrypting && this.cipherText.length % this.numOfCols !== 0
    },

    invalidPlainTextFeedback() {
      const length = this.plainText.length
      const remainder = this.numOfCols - (length % this.numOfCols)
      return (
        'Neúplná tabulka - ' + length + '/' + (length + remainder) + ' písmen'
      )
    },

    invalidCipherTextFeedback() {
      const length = this.cipherText.length
      const remainder = this.numOfCols - (length % this.numOfCols)
      return (
        'Neúplná tabulka - ' + length + '/' + (length + remainder) + ' písmen'
      )
    }
  }
}
</script>

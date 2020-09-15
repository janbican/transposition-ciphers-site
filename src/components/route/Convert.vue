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
      <b-row>
        <b-col col>
          <label>Cesta</label>
          <p>
            <strong>{{ route.text }}</strong>
            <b-button v-b-toggle.pick-route variant="outline-dark" class="ml-3"
              >Výběr cesty</b-button
            >
          </p>
          <b-collapse id="pick-route" class="mt-3">
            <route-picker
              :routes="routes"
              :selected="route"
              @change="routeChanged"
            />
          </b-collapse>
        </b-col>
      </b-row>

      <b-row class="mt-3">
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
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import RoutePicker from '@/components/route/RoutePicker'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'

import { routeCiphers } from '@/ciphers/Route'

export default {
  name: 'RouteConvert',
  components: {
    'key-number-input': KeyNumberInput,
    'route-picker': RoutePicker,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea
  },
  data() {
    return {
      isEncrypting: true,
      numOfCols: 4,
      routes: routeCiphers(),
      route: null,
      plainText: '',
      cipherText: ''
    }
  },
  created() {
    this.route = this.routes[0]
  },
  methods: {
    numOfColsChanged() {
      if (this.isNumOfColsValid) {
        if (this.isEncrypting) this.encrypt()
        else this.decrypt()
      }
    },
    routeChanged(route) {
      this.route = route
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
      const encryptFunc = this.route.encrypt
      this.cipherText = encryptFunc(this.numOfCols, this.plainText)
    },
    decrypt() {
      this.plainText = ''
      if (this.isCipherTextInvalid) return
      const decryptFunc = this.route.decrypt
      this.plainText = decryptFunc(this.numOfCols, this.cipherText)
    },
    completePlainText() {
      const length = this.plainText.length
      const remainder = this.numOfCols - (length % this.numOfCols)
      this.plainText += 'x'.repeat(remainder)
      this.encrypt()
    },
    invalidTextFeedback(length) {
      const remainder = this.numOfCols - (length % this.numOfCols)
      return (
        'Neúplná tabulka - ' + length + '/' + (length + remainder) + ' písmen'
      )
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
      return this.invalidTextFeedback(this.plainText.length)
    },
    invalidCipherTextFeedback() {
      return this.invalidTextFeedback(this.cipherText.length)
    }
  }
}
</script>

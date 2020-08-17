<template>
  <div class="convert">
    <b-row>
      <b-col>
        <conversion-choice v-model="convertChoice" :choice="convertChoice" />
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center mb-3">
      <b-col col lg="6">
        <key-number-input
          v-model.number="keyValue"
          :value="keyValue"
          :minimum="2"
          :isValid="isKeyValueValid"
          @valueChanged="keyValueChanged"
        />
      </b-col>
    </b-row>

    <b-row v-show="isKeyValueValid">
      <b-col lg="6">
        <plain-text-area
          v-model="plainText"
          :value="plainText"
          :isDisabled="!isEncrypting"
          @valueChanged="plainTextChanged"
        />
      </b-col>

      <b-col lg="6">
        <cipher-text-area
          v-model="cipherText"
          :value="cipherText"
          :isDisabled="isEncrypting"
          @valueChanged="cipherTextChanged"
        />
      </b-col>
    </b-row>

    <b-row v-show="isKeyValueValid" class="justify-content-md-center mt-5">
      <b-col col md="4">
        <h5>šifrovací mřížka</h5>
        <rail-fence-grid :keyValue="keyValue" :text="plainText" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RailFenceCipher from '@/mixins/RailFenceCipher'
import ConversionChoice from '@/components/common/convert/ConversionChoice'
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import RailFenceGrid from '@/components/railfence/RailFenceGrid'

export default {
  name: 'Convert',
  mixins: [RailFenceCipher],
  components: {
    'conversion-choice': ConversionChoice,
    'key-number-input': KeyNumberInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'rail-fence-grid': RailFenceGrid
  },
  data() {
    return {
      convertChoice: 'encrypt',
      keyValue: 2,
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    keyValueChanged() {
      if (this.isKeyValueValid) this.convert()
    },
    plainTextChanged() {
      this.convert()
    },
    cipherTextChanged() {
      this.convert()
    },
    convert() {
      if (this.isEncrypting) this.encrypt()
      else this.decrypt()
    },
    encrypt() {
      this.cipherText = this.railFenceEncrypt(this.keyValue, this.plainText)
    },
    decrypt() {
      this.plainText = this.railFenceDecrypt(this.keyValue, this.cipherText)
    }
  },
  computed: {
    isKeyValueValid: function() {
      return this.keyValue > 1
    },
    isEncrypting: function() {
      return this.convertChoice == 'encrypt'
    }
  }
}
</script>

<style scoped>
h5 {
  text-align: center;
  border-bottom: 0;
}
</style>

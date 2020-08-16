<template>
  <div id="convert">
    <b-row>
      <b-col>
        <conversion-choice v-model="convertChoice" :choice="convertChoice" />
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center">
      <b-col col lg="6">
        <key-input
          v-model="keyValue"
          :value="keyValue"
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

    <b-row v-show="isKeyValueValid" class="justify-content-md-center">
      <b-col col lg="4">
        <columnar-table
          :keyValue="keyValue"
          :keyPermutation="keyPermutation"
          :text="plainText"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ColumnarCipher from '@/mixins/ColumnarCipher'
import KeyPermutations from '@/mixins/KeyPermutations'
import ConversionChoice from '@/components/common/convert/ConversionChoice'
import KeyInput from '@/components/common/convert/KeyInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import ColumnarTable from '@/components/columnar/ColumnarTable'

export default {
  name: 'Convert',
  mixins: [ColumnarCipher, KeyPermutations],
  components: {
    'conversion-choice': ConversionChoice,
    'key-input': KeyInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'columnar-table': ColumnarTable
  },
  data() {
    return {
      convertChoice: 'encrypt',
      keyValue: '',
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
      this.cipherText = this.columnarEncrypt(
        this.keyPermutation,
        this.plainText
      )
    },
    decrypt() {
      this.plainText = this.columnarDecrypt(
        this.keyPermutation,
        this.cipherText
      )
    }
  },
  computed: {
    keyPermutation: function() {
      return this.getKeyPermutation(this.keyValue)
    },
    isKeyValueValid: function() {
      return this.keyValue.length > 1
    },
    isEncrypting: function() {
      return this.convertChoice == 'encrypt'
    }
  }
}
</script>

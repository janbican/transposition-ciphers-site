<template>
  <div class="convert">
    <b-row class="mb-3">
      <b-col>
        <key-number-input
          v-model.number="keyValue"
          :value="keyValue"
          :minimum="2"
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

      <b-row class="justify-content-md-center mt-5">
        <b-col col md="4">
          <h5>šifrovací mřížka</h5>
          <rail-fence-grid :keyValue="keyValue" :text="plainText" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import RailFenceCipher from '@/mixins/RailFenceCipher'
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import PlainTextArea from '@/components/common/convert/PlainTextArea'
import CipherTextArea from '@/components/common/convert/CipherTextArea'
import RailFenceGrid from '@/components/railfence/RailFenceGrid'

export default {
  name: 'Convert',
  mixins: [RailFenceCipher],
  components: {
    'key-number-input': KeyNumberInput,
    'plain-text-area': PlainTextArea,
    'cipher-text-area': CipherTextArea,
    'rail-fence-grid': RailFenceGrid
  },
  data() {
    return {
      isEncrypting: true,
      keyValue: 2,
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

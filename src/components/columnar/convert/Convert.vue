<template>
  <div id="convert">
    <conversion-choice v-model="convertChoice" :choice="convertChoice" />

    <b-row class="justify-content-md-center">
      <b-col col lg="6">
        <key-input
          v-model="keyValue"
          :value="keyValue"
          :isValid="isKeyValueValid"
        />
      </b-col>
    </b-row>

    <b-row v-show="isKeyValueValid">
      <b-col>
        <h5 v-if="convertChoice === 'encrypt'">zašifrovat</h5>
        <h5 v-else>dešifrovat</h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ConversionChoice from '@/components/common/convert/ConversionChoice'
import KeyInput from '@/components/common/convert/KeyInput'

export default {
  name: 'Convert',
  components: {
    'conversion-choice': ConversionChoice,
    'key-input': KeyInput
  },
  data() {
    return {
      convertChoice: 'encrypt',
      keyValue: ''
    }
  },
  computed: {
    isKeyValueValid: function() {
      return this.keyValue.length > 1
    }
  }
}
</script>

<style scoped>
.choice {
  display: flex;
  justify-content: center;
}
</style>

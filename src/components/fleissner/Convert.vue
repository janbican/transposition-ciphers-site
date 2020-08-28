<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <size-input
          v-model.number="size"
          :value="size"
          :minimum="4"
          :isValid="isSizeValid"
          @valueChanged="sizeChanged"
        />
      </b-col>
    </b-row>

    <div v-show="isSizeValid">
      <b-row class="mb-3">
        <b-col>
          <grille :size="size" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FleissnerGrille from '@/mixins/FleissnerGrille'
import KeyNumberInput from '@/components/common/convert/KeyNumberInput'
import Grille from '@/components/fleissner/Grille'

export default {
  name: 'FleissnerConvert',
  mixins: { FleissnerGrille },
  components: {
    'size-input': KeyNumberInput,
    grille: Grille
  },
  data() {
    return {
      size: 4
    }
  },
  methods: {
    sizeChanged() {}
  },
  computed: {
    isSizeValid: function() {
      return this.size >= 4
    }
  }
}
</script>

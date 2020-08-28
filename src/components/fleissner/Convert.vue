<template>
  <div>
    <b-row class="mb-3">
      <b-col>
        <grille />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FleissnerGrille from '@/mixins/FleissnerGrille'
import Grille from '@/components/fleissner/Grille'

export default {
  name: 'FleissnerConvert',
  mixins: { FleissnerGrille },
  components: {
    grille: Grille
  }
}
</script>

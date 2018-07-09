<template>
    <v-content>
      <v-container fluid fill-height>
       <span>{{ wetuInfo }}</span>
      </v-container>
    </v-content>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  data () {
      return {
      }
  },
  computed: {
    ...mapGetters([
      'wetuInfo'
    ])
  }
}
</script>

<style>
</style>

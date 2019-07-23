<template>
  <dir>
    <Linxios url="https://dev.to">
      <template v-if="state.loaded" slot-scope="{ state }">
        {{ state.meta }}
      </template>
    </Linxios>
  </dir>
</template>

<script>
import Linxios from "./linxios-vue";

export default {
  components: {
    Linxios
  },
}
</script>

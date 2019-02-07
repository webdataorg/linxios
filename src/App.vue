<template>
  <dir>
    {{ loading }}
    <Linxios url="https://dev.to" @loading="e => loading = e">
      <template slot-scope="{ state, actions: { setImageLoaded }}">
        <p v-if="state.imageLoading">loading</p>
        <img v-show="state.imageLoaded" :src="state.meta.og.image" @load="setImageLoaded()"/>
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
  data() {
    return {
      loading: false,
      meta: null
    }
  }
}
</script>

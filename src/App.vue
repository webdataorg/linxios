<template>
  <Linxios url="https://dev.to">
    <template slot-scope="{ state, actions: { setImageLoaded }}">
      <img v-show="state.imageLoaded" :src="state.meta.og.image" @load="setImageLoaded()"/>
    </template>
  </Linxios>
</template>

<script>
import Linxios from "./linxios-vue";

export default {
  components: {
    Linxios
  }
}
</script>

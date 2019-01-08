<template>
  <div>
    <slot v-bind="slotProps"></slot>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      meta: null,
      loading: false,
      loaded: false,
      loadingTime: null,
      imageLoaded: false
    }
  },
  computed: {
    slotProps() {
      return { 
        state: this.$data, 
        actions: {
          setImageLoaded: this.setImageLoaded
        }
      }
    }
  },
  methods: {
    getURLData(url) {
      return fetch(`https://url-metadata.firebaseapp.com?url=${url}`)
        .then(res => res.json());
    },
    setImageLoaded() {
      this.imageLoaded = true;
    }
  },
  mounted() {
    const start = new Date();
    this.loading = true;
    this.getURLData(this.url)
      .then(meta => {
        this.meta = meta;
        this.loading = false;
        const end = new Date();
        this.loadingTime = end - start;
        this.loaded = true;
      });
  }
}
</script>

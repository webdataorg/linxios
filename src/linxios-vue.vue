<template>
  <div>
    <slot v-bind="slotProps"></slot>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
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
        state: Object.assign({},this.$data,{ imageLoading: this.imageLoading }), 
        actions: {
          setImageLoaded: this.setImageLoaded
        }
      }
    },
    imageLoading() {
      return !this.imageLoaded;
    }
  },
  methods: {
    async getURLData(url) {
      const res = await fetch(`https://us-central1-webdata-eeba3.cloudfunctions.net/api?url=${url}`);
      return res.json();
    },
    setImageLoaded() {
      this.imageLoaded = true;
    },
    setLoadingInfo() {
      this.loading = false;
      this.loaded = true;
    }
  },
  async mounted() {
    this.loading = true;
    this.meta = await this.getURLData(this.url);
    this.setLoadingInfo();
  },
  watch: {
    loading: {
      handler(n) {
        this.$emit("loading",n);
      }
    },
    loaded: {
      handler(n) {
        this.$emit("loaded",n);
      }
    },
    imageLoaded: {
      handler(n) {
        this.$emit("image-loaded",n);
      }
    }
  }
}
</script>

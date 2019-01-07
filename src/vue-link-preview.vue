<template>
  <div>
    <slot :meta="meta" :loading="loading" :loading-time="loadingTime"></slot>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      meta: null,
      loading: false,
      loadingTime: null
    }
  },
  methods: {
    async getURLData(url) {
      const res = await fetch(`https://url-metadata.firebaseapp.com?url=${url}`);
      return await res.json();
    }
  },
  async mounted() {
    const start = new Date();
    this.loading = true;
    this.meta = await this.getURLData(this.url);
    this.loading = false;
    const end = new Date();

    this.loadingTime = end - start;
  }
}
</script>

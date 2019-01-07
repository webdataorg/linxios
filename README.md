# Vue Link Preview

A Vue component for providing you with a websites' metadata, it uses the [**WebData API**](https://webdata.firebaseapp.com) for providing the metadata

## Demo

### Global Install
#### main.js

```js
import VueLinkPreview from "@webdataorg/vue-link-preview";

Vue.component("VueLinkPreview",VueLinkPreview);
```
### Local Install
#### App.vue
```vue
<template>
  <vue-link-preview>
    <div slot-scope="{ meta }">
      // use your own mark
    </div>
  </vue-link-preview>
</template>

<script>
import VueLinkPreview from "@webdataorg/vue-link-preview";

export default {
  components: {
    VueLinkPreview
  }
}
</script>
```
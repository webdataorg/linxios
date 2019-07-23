# Linxios

A Vue component for providing you with a websites' metadata, it uses the [**WebData API**](https://webdata.firebaseapp.com) for providing the metadata

## Demo

### Global Install
#### main.js

```js
import Linxios from "@webdataorg/linxios-vue";

Vue.use(Linxios);
```
### Local Install
#### App.vue
```vue
<template>
  <lixios>
    <div slot-scope="{ state, actions }">
      // use your own mark
    </div>
  </lixios>
</template>

<script>
import { Linxios } from "@webdataorg/linxios-vue";

export default {
  components: {
    Linxios
  }
}
</script>
```
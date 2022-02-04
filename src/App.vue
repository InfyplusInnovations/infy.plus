<template>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: { RouterView },
  setup() {},
};
</script>

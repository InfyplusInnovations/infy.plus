<template>
  <div class="overflow-hidden bg-gray-900 bg-opacity-50">
    <!-- <div id="home" class="fixed -z-10"></div> -->
    <bg-star class="fixed -z-10" />
    <div class="h-screen w-screen overflow-y-auto">
      <Nav />
    </div>
  </div>
</template>
<script>
import Nav from "../components/Nav/Nav.vue";
import BgStar from "@/components/bg/BgStar.vue";
export default {
  components: { BgStar, Nav },
  setup() {},
};
</script>

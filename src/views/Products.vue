<template>
  <div class="overflow-hidden bg-gray-900 bg-opacity-50">
    <!-- <div id="home" class="fixed -z-10"></div> -->
    <bg-star class="fixed -z-10" />
    <div class="h-screen w-screen overflow-y-auto">
      <Nav />
      <Products />
      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from "../components/Nav/Nav.vue";
import BgStar from "@/components/bg/BgStar.vue";
import Footer from "@/components/sections/Footer.vue";
import Products from "@/components/Products/Products.vue";

export default {
  components: { BgStar, Nav, Footer, Products },
  setup() {},
};
</script>

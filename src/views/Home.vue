<template>
  <div class="overflow-hidden bg-gray-900 bg-opacity-60">
    <!-- <div id="home" class="fixed -z-10"></div> -->
    <bg-star class="fixed -z-10" />
    <div class="h-screen w-screen overflow-y-auto">
      <Nav />
      <Hero />
      <OurWorks />
      <services />
      <testimonials />
      <contact />
      <Footer />
    </div>
  </div>
</template>
<script>
import OurWorks from "../components/sections/OurWorks.vue";
import Nav from "../components/Nav/Nav.vue";
import Hero from "../components/sections/Hero.vue";
import Testimonials from "../components/sections/Testimonials.vue";
import Contact from "../components/sections/Contact.vue";
import BgStar from "@/components/bg/BgStar.vue";
import Footer from "../components/sections/Footer.vue";
import Services from "@/components/sections/Services/Services.vue";
export default {
  components: {
    Nav,
    Hero,
    OurWorks,
    Testimonials,
    Contact,
    Footer,
    Services,
    BgStar,
  },
  setup() {},
};
</script>

<template>
  <div class="w-screen bg-gray-900">
    <Nav />
    <Hero />
    <OurWorks />
    <services />
    <testimonials />
    <contact />
    <Footer />
  </div>
</template>
<script>
import OurWorks from "../components/sections/OurWorks.vue";
import Nav from "../components/Nav/Nav.vue";
import Hero from "../components/sections/Hero.vue";
import Testimonials from "../components/sections/Testimonials.vue";
import Contact from "../components/sections/Contact.vue";

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
  },
  setup() {},
};
</script>

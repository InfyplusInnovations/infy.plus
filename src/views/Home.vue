<template>
  <div class="overflow-hidden bg-gray-900 bg-opacity-50">
    <!-- <div id="home" class="fixed -z-10"></div> -->
    <bg-star class="fixed -z-10" />
    <div class="h-screen w-screen overflow-y-auto" ref="homeScroll">
      <Nav />
      <Hero id="home" />
      <OurWorks id="works" />
      <services id="services" />
      <testimonials id="testimonials" />
      <contact id="contact" />
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
import { useRouter } from "vue-router";
import { onMounted, ref } from "@vue/runtime-core";

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
  setup() {
    const router = useRouter();
    let homeScroll = ref(null);
    onMounted(() => {
      router.afterEach((to, from) => {
        if (to.hash && homeScroll.value) {
          homeScroll.value.scrollTop = document.querySelector(
            to.hash
          ).offsetTop;
        }
      });
      if (router.currentRoute.value.hash && homeScroll.value) {
        homeScroll.value.scrollTop = document.querySelector(
          router.currentRoute.value.hash
        ).offsetTop;
      }
    });
    return {
      homeScroll,
    };
  },
};
</script>

<template>
  <section class="py-10 flex justify-center items-center p-5">
    <div class="w-full max-w-7xl">
      <div class="">
        <h3 class="font-bold text-white text-xl font-secondary">
          <span class="text-2xl text-blue-400">WHAT</span> <br />
          PEOPLE ARE SAYING ABOUT US
        </h3>
      </div>
      <div class="">
        <swiper :pagination="true">
          <swiper-slide class="py-5">
            <testimonial />
          </swiper-slide>
          <swiper-slide class="py-5">
            <testimonial />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script>
import Testimonial from "../Testimonial.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";

// install Swiper modules
SwiperCore.use([Pagination]);
export default {
  components: {
    Testimonial,
    Swiper,
    SwiperSlide,
  },
};
</script>

Testimonial

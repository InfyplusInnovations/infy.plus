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
            <testimonial
              content="We developed a great relationship with Infyplus Innovations for making our dream project a reality and their dedication and attention to detail was impressive"
              client="Mr. Tom Jacob (RN Global Solutions)"
            />
          </swiper-slide>
          <swiper-slide class="py-5">
            <testimonial
              content="During pandemic, I needed a way to promote my business and connect with my students. With the stunning website they built for my coaching center now I'm able to promote Edustar in the best possible way .
Thankyou Infyplus and team"
              client="Mr. Sunildevaprabha (Edustar Fastrack)"
            />
          </swiper-slide>
          <swiper-slide class="py-5">
            <testimonial
              content="Thanks Infyplus for helping us move to the next level. We appreciate your hardwork and commitment to our institution"
              client="Mr. Joseph M T (SJUPS Narakakkanam)"
            />
          </swiper-slide>
          <swiper-slide class="py-5">
            <testimonial
              content="I was struggling to extend my reach to clients and employers. Having an amazing website not only increased the confidence but was also helpful to connect with the existing customers"
              client="Mr. Manoj T A (Meera Healthcare)"
            />
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

<template>
  <section class="py-24 flex flex-col justify-center items-center">
    <div
      class="
        max-w-7xl
        w-full
        grid
        lg:grid-cols-3
        gap-8
        md:gap-4
        justify-items-center
        md:grid-cols-2
      "
    >
      <our-works-card pattern="blue" />
      <our-works-card pattern="red" />
      <our-works-card pattern="green" />
    </div>
  </section>
</template>
<script>
import OurWorksCard from "../OurWorksCard.vue";
export default {
  components: { OurWorksCard },
  setup() {},
};
</script>
